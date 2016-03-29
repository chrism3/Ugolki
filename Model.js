/*jslint node: true, browser: true */
"use strict";

/*
 * This file is the model for the application. This is where the majority of the actual
 * functionality has been coded, such as moving pieces, calling the AI players, preparing
 * validation of user entry. 
 * 
 */

function Model() {
    /*
     * Unfortunately, due to the number of variables habe have to be used with get
     * and set methods (to allow communication back to the controller & view) there
     * are many global variables here. However, these are only directly accessed in this
     * file, for the most part, they are accessed with the use of a get method. 
     */
    
    // need to create all of the pieces for the game
    var p = new gamePieces();
    p.newGamePiece("player_one", "white", 1, 0, 0);
    var p2 = new gamePieces();
    p2.newGamePiece("player_two", "black", 2, 1, 0);
    
    var player_1_type = "human";
    var player_2_type = "AI";
    
    // this array is used to store a representation of the board
    var board = new Array(8);
    // this variable used to store the possible moves, when they are found later in the file
    var possible_moves = new Array();
    var new_x_coord = -1;
    var new_y_coord = -1;
    var isPieceSelected = false;
    var current_player_colour = "white";
    var current_piece;
    
    /*
     * boolean variable that is used with get and set method, so the controller
     * can check whether or not finding of moves has been successful
     */
    var find_moves_successful;
    
    // this variable is a boolean representation of whether or not a player is signed in
    var signed_in;
    // variable used to keep track of which player the human is... helps for adding results to the database
    var human_player = "player 1";
    // variable to store who the winner is, default is no winner
    var winner = "no winner";
    // this vairbale stores the name of the current player signed in 
    var logged_in_player;
    // variable to store boolean value if player is logged in
    var is_logged_in = false;
    
    // variables to set the screen sizes
    var screen_width = 0,
    screen_height = 0;
    
    var player_1_colour = "rgb(255, 235, 205)";
    var player_2_colour = "rgb(92, 64, 51)";
    var dark_board_colour = "rgb(130, 72, 21)";
    var light_board_colour = "rgb(255, 211, 155)";
    
    
    // a list of all AI pieces that have made it to the goal will be kept here
    var pieces_in_goal = new Array();
    // this creates an object of AI interface, which is later updated by a more specific type
    var AI = new generalAI();
    // this is where the AI is set to the simple AI, this is how its the defualt one
    var AI_type = "simpleAI";
    var current_AI_player = new simpleAI2();
    
    // variable to store how many moves have happened
    var turn_count = 0;
    
    // variable to store the current game 
    var game_type = "standard";
    
    /* 
     * @returns {undefined}
     * 
     * This function of this method is to set the array for the baord, 
     * to contain the locations which store a gamePiece. At the start of
     * the game, the locations of pieces are always the same, therefore no 
     * information from the view had to be passed in. 
     */
   this.setBoard = function(){
       var white_id = 1;
       var brown_id = 1;
      
       // firstly, initilaise the board, by creating an array at each index
       for(var i = 0; i < board.length; i++){
           board[i] = new Array(8);
           for(var j = 0; j < board.length; j++){
               board[i][j] = 0;
           }
       }
       // next we place the white sqaures in the bottom left
       for(var i = 7; i > 3; i--){
           for(var j = 0; j < 4; j++){
             var id_no = "white_circle_" + white_id;
             var white_piece = new gamePieces("player_one", "white", id_no, j, i);
             board[j][i] = white_piece;
             white_id++;
             var id_no = "brown_circle_" + brown_id;
             var black_piece = new gamePieces("player_two", "black", id_no, i, j);
             board[i][j] = black_piece;
             brown_id++;             
           }
       }
   };
   
   /*
    * 
    * @returns {undefined}
    * 
    * This method is called by the controller, its only purpose is to detect
    * the screen width and height
    */
   this.setScreenSize = function(){
        screen_width = window.innerWidth;
        screen_height = window.innerWidth;
    };

    /*
     * 
     * @param {type} x_coord
     * @param {type} y_coord
     * @returns {Array|Model.possible_moves}
     * 
     * This function takes in the x and y coordinate of the piece that has been selected by
     * the user. It uses these values to find the available moves for the given piece. Then 
     * returns an array containing all found moves. 
     */
    this.findMoves2 = function (x_coord, y_coord) {
        // set isPieceSelected to true
        isPieceSelected = true;
        // this clears the possible moves
        possible_moves = [];
        
        //console.log("In model (findMoves2) the x and y coords are: " + x_coord + "," + y_coord);

        // create the object of type findMoves
        var find_moves = new findMoves();
        find_moves.init(board, game_type);
        // set to true
        find_moves_successful = true;        
        current_piece = board[x_coord][y_coord];
       
        /*
         * the condition of this if checks to see if the piece to be moved is
         * the correct colour. If it is moves are found, else find_moves_successful
         * is set to flase. 
         */
        if (current_piece.getPieceColour() === current_player_colour) {
            /*
             * here the values that will be passed into the methods to find the
             * available moves are culculated. 
             */
            var above = parseInt((board[x_coord][y_coord].getYCoord()) - 1);
            var below = parseInt((board[x_coord][y_coord].getYCoord()) + 1);
            var left = parseInt((board[x_coord][y_coord].getXCoord()) - 1);
            var right = parseInt((board[x_coord][y_coord].getXCoord()) + 1);
          
          /*
           * The game has 3 different variations of game type, that require different 
           * moves to be made. Below are if statements that find the available moves
           * for the given game type
           */
           if(game_type === "standard"){
                find_moves.moveRight(right, y_coord);
                find_moves.moveLeft(left, y_coord);
                find_moves.moveUp(above, x_coord);
                find_moves.moveDown(below, x_coord);
                find_moves.multipleJump3(x_coord, y_coord);
                possible_moves = find_moves.getPossibleMoves();
            }
            else if(game_type === "no multi jump"){
                find_moves.moveRight(right, y_coord);
                find_moves.moveLeft(left, y_coord);
                find_moves.moveUp(above, x_coord);
                find_moves.moveDown(below, x_coord);
                find_moves.jumpRight(right, y_coord);
                find_moves.jumpLeft(left, y_coord);
                find_moves.jumpUp(above, x_coord);
                find_moves.jumpDown(below, x_coord);
                possible_moves = find_moves.getPossibleMoves();                
            }
            else if(game_type === "toward goal"){
                if(current_player_colour === "white"){
                    find_moves.moveRight(right, y_coord);
                    find_moves.moveUp(above, x_coord);
                    find_moves.jumpUp(above, x_coord);
                    find_moves.jumpRight(right, y_coord);                    
                }
                if(current_player_colour === "black"){
                    find_moves.moveLeft(left, y_coord);
                    find_moves.moveDown(below, x_coord);
                    find_moves.jumpLeft(left, y_coord);
                    find_moves.jumpDown(below, x_coord);
                }
                possible_moves = find_moves.getPossibleMoves();
            }
        }
        else{
            // this is where find_moves is set to false if the users choice of piece was incorect
            find_moves_successful = false;
        }
        //console.log("number of possible moves: " + possible_moves.length);
        
        return possible_moves;
    };

    /* 
     * @param {type} choosen_square_x
     * @param {type} choosen_square_y
     * @returns {Boolean}
     * 
     * This function takes in two variables, these are the x and y coordiantes of
     * users choosen square. This method then returns a boolean value as to whether or
     * not the move of the piece has been successful. 
     */
    this.movePiece = function (choosen_square_x, choosen_square_y) {
        var move_successful;
        if (isPieceSelected) {
            /*
             * This for loop loops through the possible moves, and makes sure the x and y coordinate
             * of the choosen squares are valid moves. 
             */
            for (var i = 0; i < possible_moves.length; i++) {
                if (choosen_square_x === possible_moves[i].getX() &&
                        choosen_square_y === possible_moves[i].getY()) {
                    var x_coord = possible_moves[i].getX();
                    var y_coord = possible_moves[i].getY();

                    // move the piece in the board array
                    board[current_piece.getXCoord()][current_piece.getYCoord()] = 0;
                    current_piece.setXCoord(choosen_square_x);
                    current_piece.setYCoord(choosen_square_y);
                    board[choosen_square_x][choosen_square_y] = current_piece;
                    //console.log("after resetting (model): " + board[current_piece.getXCoord()][current_piece.getYCoord()]);
                    // reset the values for X and Y of the game piece

                    // here the new x and y coords are set, so the controller can get the information to pass back to the view. 
                    new_x_coord = choosen_square_x;
                    new_y_coord = choosen_square_y;
                    // move successful is set to true
                    move_successful = true;
                   
                }
            }
        }
        else {
            // here it is set to false
            move_successful = false;
        }
        // the boolean value is then returned so the controller knows if the method has been successful. 
        return move_successful;
    };

    /*
     * 
     * @returns {choosen_square_x|Number}
     * 
     * this returns the value of the new x coord so that view can
     * be updated with a move
     */
    this.getNewX = function () {
        return new_x_coord;
    };

    /*
     * 
     * @returns {choosen_square_y|Number}
     * 
     * this returns the value of the y coord so that the view can
     * be updated with a move
     */
    this.getNewY = function () {
        return new_y_coord;
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * This function alters which players turn it is. One way to ensure the correct
     * piece has been choosen (and therefore the correct player has made a move) is
     * by using the colour of the pieces. This method is called every time a piece is moved
     * and set the board to the colour that should be moved next. 
     */
    this.setCurrentPlayerColour = function(){
        if(current_player_colour === "white"){
            current_player_colour = "black";
        }
        else current_player_colour = "white";
    };
    
    /*
     * 
     * @returns {String}
     * 
     * This returns a string value of the current colour of
     * piece that is to be moved. 
     */
    this.getCurrentPlayerColour = function (){
        return current_player_colour;
    };
    
    
    /*
     * 
     * @returns {Number|Window.innerWidth}
     * 
     * this returns the height of the screen, that was set earlier in the model
     */
    this.getScreenHeight = function(){
        return screen_height;
    };
    
    /*
     * 
     * @returns {Number|Window.innerWidth}
     * 
     * this returns the width of the screen, that was set earlier in the model
     */
    this.getScreenWidth = function() {
        return screen_width;
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * This is where the conditions of the game are reset for the next move
     * to occur. This is also where the above method setCurentPlayerColour()
     * is called
     */
    this.resetForNextMove = function() {
        new_x_coord = -1;
        new_y_coord = -1;
        isPieceSelected = false;
        this.setCurrentPlayerColour();
    };
    
    /*
     * 
     * @param {type} new_type
     * @returns {undefined}
     * 
     * This function is called from the controller upon the selection of one of
     * the game types. The game types is set to whichever type is passed in.
     */
    this.setGameType = function(new_type){
        console.log("settings game type to: " + new_type);
        game_type = new_type;
    };
    
    /*
     * 
     * @returns {new_type|String}
     * 
     * This function returns a string value representing the current game type
     */
    this.getGameType = function (){
        return game_type;
    };
    
    /*
     * 
     * @returns {Boolean}
     * 
     * returns the booelan value representing whether or not a move has been amde successfully
     * so that the view is only updated with the move actually was a valid move. This variable is
     * set in the makeMove function above. 
     */
    this.wasFindMovesSuccessful = function(){
        return find_moves_successful;
    };   
 
    
    /*
     * 
     * @param {type} player_type
     * @returns {undefined}
     * 
     * this function takes in a variable and the player one type is set to that value.
     * The values passed in are either human or AI
     */
    this.setPlayerOneType = function (player_type){
        player_1_type = player_type;
    };
    /*
     * 
     * @returns {String|player_type}
     * 
     * this function returns the type of the player one, set in above method
     */
    this.getPlayerOneType = function () {
        return player_1_type;
    };
    
    /*
     * 
     * @returns {String|player_type}
     * 
     * this function returns the type of player two, either AI or human
     */
    this.getPlayerTwoType = function (){
        return player_2_type;
    };    
    
    /*
     * 
     * @param {type} player_type
     * @returns {undefined}
     * 
     * This function takes in a value and the player two type is set to that. 
     * Either AI or Human will be passed in. 
     */
    this.setPlayerTwoType = function (player_type){
        //console.log("setting player 2 to: " + player_type);
        player_2_type = player_type;
    };
    
    
    /*
     * 
     * @param {type} player_signed_in
     * @returns {undefined}
     * 
     * this function sets whether or not a player is signed in
     */
    this.setSignedIn = function(player_signed_in){
        signed_in = player_signed_in;
    };
    
    /*
     * 
     * @returns {player_signed_in}
     * 
     * this returns the current value of whether or not a player is signed in
     */
    this.getSignedIn = function(){
        return signed_in;
    };
   
   
   /*
    * 
    * @returns {String|new_player_value}
    * 
    * this returns a string value (player 1, or player 2) to state which player
    * is the current user
    */
    this.getHumanPlayer = function(){
        return human_player;
    };
    
    /*
     * 
     * @param {type} new_player_value
     * @returns {undefined}
     * 
     * method to set human player... paramater passes in will either be 'player 1' or 'player 2'
     */   
    this.setHumanPlayer = function(new_player_value){
        human_player = new_player_value;
    };
    
    /*
     * 
     * @returns {String|set_winner}
     * 
     * method to get who the winner is... either 'player 1' or 'player 2' or 'no winner'
     */    
    this.getWinner = function(){
        return winner;
    };
    
    /*
     * 
     * @param {type} set_winner
     * @returns {undefined}
     * 
     * function to return who the winner is... will either be 'player 1' or 'player 2 or 'no winner'
     */    
    this.setWinner = function(set_winner){
        winner = set_winner;
    };    
    
    /*
     * 
     * @param {type} player_name
     * @returns {undefined}
     * 
     * this function takes in an argument and then sets the logged in player value
     * to be the value passed in. This is also wehre setIsLoggedIn is called
     */
    this.setLoggedInPlayer = function(player_name){
        logged_in_player = player_name;
        this.setIsloggedIn();
    };
    
    /*
     * 
     * @returns {player_name}
     * 
     * method returns the value of the logged in player name
     */
    this.getLoggedInPlayer = function(){
        return logged_in_player;
    };
    
    
    /*
     * 
     * @returns {undefined}
     * this sets that a player is logged in. 
     */
    this.setIsloggedIn = function(){
        is_logged_in = true;
    };
    
    /*
     * 
     * @returns {Boolean}
     * returns the boolean value of whether or  not a player is signed in
     */
    this.getLoggedIn = function(){
        return is_logged_in;
    };
    
    
    /*
     * 
     * @param {type} model
     * @param {type} condition
     * @returns {undefined}
     * 
     * this method checks the AI type as well as calling the code to make an AI move
     * for the related AI player. This function also has to take in two conditions:
     *  
     *      - model: this is a representation of the current mode so the AI players
     *               make valid moves. 
     *      - condition: This is used so that if "new game" is passed in, the AI's goals can
     *                   be reset with the use of the setNewGameAI function. 
     */
    this.checkAIType = function (model, condition){
        var pieces = new Array();
        if(condition === "new game"){
            //console.log("is it setting a new game AI");
            AI.setNewGameAI();
        }

        var find_moves = new findMoves();
        find_moves.init(board);

        // the following if statments are what check the AI
        if(AI_type === "simpleAI"){ 
            // call code for simple AI move
            current_AI_player.simpleAI2(board, model, AI);
        }
        else if(AI_type === "mediumAI"){
            // call code for medium AI move
            current_AI_player.mediumAI(board, model, AI);
        }
        else if(AI_type === "hardAI"){
            // call code for hardAI move
            current_AI_player.hardAI(board, model, AI);
        }
        
        /* If an AI player has been created that a future developer would like to
         * include within the code. All that would be necessary to do include the 
         * a new algorithm would be to create a new else if statement above, and then
         * call the new AI player that has been created. 
         */
    };
    
   /*
    * 
    * @returns {String|type}
    * 
    * returns the current AI type
    */
    this.getAIType = function (){
       return AI_type;
    };
    
    /*
     * 
     * @param {type} type
     * @returns {undefined}
     * 
     * takes in an argument to set the AI type
     */
    this.setAIType = function (type) {
        AI_type = type;
        
        if(AI_type === "simpleAI"){
            current_AI_player = new simpleAI();
        }
        if(AI_type === "mediumAI"){
            current_AI_player = new mediumAI2();
        }
        if(AI_type === "hardAI"){
            current_AI_player = new hardAI();
        }
    };
    
    /*
     * 
     * @returns {choosen_move}
     * 
     * this function is used to return the AI players choosen move so that
     * the view can be updated. 
     */
    this.getAIChoosenMove = function(){
        var move = current_AI_player.getChoosenMove();
        return move;
    };
    
    /*
     * 
     * @returns {index}
     * 
     * this returns the index of the AI's choosen piece so that the view can
     * be updated with the AI move
     */
    this.getAIPieceIndex = function () {
        return current_AI_player.getAIPieceIndex();
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * This function is used to update the models representation of the board 
     * with the move that has been made by the AI. 
     */
    this.updateModelWithAIMove = function(){
        var moved_piece_x = current_AI_player.getAISelectedPieceXCoord();
        var moved_piece_y = current_AI_player.getAISelectedPieceYCoord();
        var move = this.getAIChoosenMove();
        var new_x = move.getX();
        var new_y = move.getY();
        
       // this loop is sued to find the right piece thats coordiantes are to be updated 
       for(var i = 0; i < board.length; i++){
           for(var j = 0; j < board.length; j++){
               if(board[i][j] !== 0){
                    if(board[i][j].getXCoord() === moved_piece_x &&
                            board[i][j].getYCoord() === moved_piece_y){
                        var piece_to_move = board[i][j];
                        board[i][j] = 0;
                        piece_to_move.setXCoord(new_x);
                        piece_to_move.setYCoord(new_y);
                        board[new_x][new_y] = piece_to_move;                    
                    }
                }
           }
       }
   };
    
    /*
     * 
     * @returns {String}
     * 
     * This function is used to calculate whether or not a player has won. It returns
     * a string value to indicate which player is the winner. If neither player has won
     * the method returns the value "no winner"
     */
    this.hasPlayerWon = function(){
        var player_1_won = true;
        var player_2_won = true;
        
        /*
         *the following loop is used to calculate if player two has won
         */
        for(var i = 0; i < 4; i++){
            for(var j = 7; j > 3; j--){
//                console.log("");
//                console.log("index + " + i + "," + j);
                if(board[i][j] !== 0){                    
                    var piece = board[i][j];
                    
//                    console.log("found piece: " + piece.getPieceColour());
                    if(piece.getPieceColour() !== "black"){
                        //console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
                            player_2_won = false;
                            break;
                    }
                }
                else{
                    player_2_won = false;
                    break;
                }
            }
            if(!player_2_won){
                    break;
            }
        }
        if(player_2_won){
            this.setWinner("player 2");
            // returns if the player has won
            return "player 2";
        }
        
        /*
         * the follwowing loop is used to calcualte if player two has won. 
         */
        for(var i = 7; i > 3; i--){
            //console.log(board[7][0].getPieceColour());
            for(var j = 0; j < 4; j++){
                if(board[i][j] !== 0){
                    var piece = board[i][j];
                    //console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
                    if(piece.getPieceColour() !== "white"){
                        //console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
                        player_1_won = false;
                        break;
                    }
                }
                else{
                    player_1_won = false;
                    break;
                }
            }
            if(!player_1_won){
                break
            }
        }
        if (player_1_won){
            this.setWinner("player 1");
            // this is where player 1 is returned if they have won
            return "player 1";
        }
        
        else{
            // no winner yet
            return "no winner";
        }
        
    };
    
    /*
     * 
     * @param {type} user_details
     * @param {type} validation_status
     * @returns {Boolean|Array|stats}
     * 
     * this function is used to call the appropriate valiadation code in the
     * UserValidation.js file. To do so, the user details are passed into this
     * method and the validation status as well (which type of validation is to 
     * be done).
     * 
     */
    this.validation = function(user_details, validation_status){
        var status;
        var validate = new detailsValidation();
        if(validation_status === "sign up"){
            // call the validation for signing up
            validate.signUpValidation(user_details);
            status = validate.getSignInStatus();
        }
        else if(validation_status === "login"){
            // call the validation for loggin in 
            validate.loginValidation(user_details);
            status = validate.getLoginStatus();
        }
        else if(validation_status === "stats"){
            // call the validation to update the stats
            validate.statsUpdateValidation(user_details);
        }
        else if(validation_status === "retrieve stats"){
            // call the validateion to retrieve the stats. 
            var stats = validate.retrieveStatsValidation(user_details);
            return stats;
        }
        // this returns the status of the validation from the USerValidation.js file
        return status;
    };
    
    
    // getter and setter methods for the board and piece colours
    this.getPlayer1Colour = function(){
        return player_1_colour;
    };
    this.getPlayer2Colour = function(){
        return player_2_colour;
    };
    this.setPlayer1Colour = function(new_colour){
        player_1_colour = new_colour;
    };
    this.setPlayer2Colour = function(new_colour){
        player_2_colour = new_colour;
    };
    
    /*
     * 
     * @returns {new_colour|String}
     * 
     * this returns a string value for the current set dark
     * colour of the board
     * 
     */
    this.getDarkBoardColour = function(){
        return dark_board_colour;
    };
    
    /*
     * 
     * @returns {new_colour|String}
     * 
     * this returns a string value for the current set light
     * colour of the board
     */
    this.getLightBoardColour = function(){
        return light_board_colour;
    };
    
    /*
     * 
     * @param {type} new_colour
     * @returns {undefined}
     * 
     * paramater passed in to set the dark colour of the board
     */
    this.setDarkBoardColour = function(new_colour){
        dark_board_colour = new_colour;
    };
    
    /*
     * 
     * @param {type} new_colour
     * @returns {undefined}
     * 
     * parameter pased in to set the light colour of the board 
     */
    this.setLightBoardColour = function(new_colour){
        light_board_colour = new_colour;
    };
    
    
    /*
     * 
     * @returns {Array|Model.pieces_in_goal}
     * 
     * this returns a list of the pieces that the AI player has
     * successfully manage to put in a goal location. This list is
     * used to make sure that the AI does not move pieces that have 
     * found their goal
     */
    this.getAIPiecesInGoalLocation = function(){
        return pieces_in_goal;
    };
    
    /*
     * 
     * @param {type} piece
     * @returns {undefined}
     * 
     * a game piece is passed in which is then added to the list of
     * piece in the goal
     */
    this.addPieceToGoalLocationList = function(piece){
        pieces_in_goal.push(piece);
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * resets the piece in goal list, so that if new game is pressed
     * the list of pieces in the goal is cleared. 
     */
    this.clearPiecesInGoalList = function(){
        pieces_in_goal = [];
    };
    
    /*
     * 
     * @param {type} alteration
     * @returns {undefined}
     * 
     * this function is used to alter the AI's piece colour
     * so that it can play with either white or black peices
     */
    this.alterAISettings = function(alteration){
        if(alteration === "AI v human"){
            // then we want to correct the so that AI is player 1
            AI.setAIColour("white");
            AI.setTargetForWhiteAIPlayer();
        }
        else if(alteration === "human v AI"){
            //console.log("setting colour to black");
            AI.setAIColour("black");
            AI.setTargetForBlackAIPlayer();
            //console.log("AI-colour in altersettings: " + AI.getAIColour());
        }
    };
    
    
    /*
     * 
     * @returns {colour|String}
     * 
     * returns the AI players colour
     */
    this.getAIColour = function(){
        return AI.getAIColour();
    };
    
    
    /*
     * 
     * @returns {undefined}
     * set the AI colour
     */
    this.setAIColour = function(){
        AI.setAIColour();
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * function is used so the controller can call
     * the method to set the AI back to the beginning of the game
     * without directly communicating with the AI
     */
    this.setnewGameAI = function(){
        AI.setNewGameAI();
    };
    
    /*
     * 
     * @param {type} AI_player
     * @returns {Array|Model.getPieces.pieces}
     * 
     * this is used by the AI to get all of the available pieces for moving, excluding
     * those that have made it to a goal location. This method returns an array of
     * pieces
     */
    this.getPieces = function(AI_player){
        var pieces = new Array();
        var reached_goal = false;
        if(AI_player.getAIColour() === "black"){
            for(var i = board.length-1; i >= 0; i--){
                for(var j = 0; j < board.length; j++){
                    //console.log("the coords: " + i + "," + j);
                     if(board[i][j] !== 0){
                         // resetting this just in case
                         reached_goal = false;
                         // currently only works if the Ai is player 2
                         if(board[i][j].getPieceColour() === "black"){
                             for(var k = 0; k < pieces_in_goal.length; k++){                                 
                                 if(board[i][j].getPieceId() === pieces_in_goal[k].getPieceId()){
//                                     console.log(board[i][j].getPieceId() + " is the same as " +
//                                             pieces_in_goal[k].getPieceId());
                                     reached_goal = true;
                                 }
                             }
                             if(!reached_goal){
//                                 console.log("adding piece in coords: " + board[i][j].getXCoord() + "," 
//                                         + board[i][j].getYCoord());
                                 pieces.push(board[i][j]);
                             }

                         }                         
                      }
                  }
              }
          }
        // need to do the same as above but for white pieces rather than black
        else{
            for(var i = 0; i < board.length; i++){
                for(var j = board.length -1; j >= 0; j--){
                     if(board[i][j] !== 0){
                         // currently only works if the Ai is player 2
                         if(board[i][j].getPieceColour() === "white"){
                             var reached_goal = false;
                             //console.log("pieces in their goal location: " + pieces_in_goal.length);
                             for(var k = 0; k < pieces_in_goal.length; k++){
                                 if(board[i][j].getPieceId() === pieces_in_goal[k].getPieceId()){
                                     reached_goal = true;
                                 }
                             }
                             if(!reached_goal){
                                //console.log("pushing piece in coords: " + i + "," + j + "with id: " + board[i][j].getPieceId());
                                pieces.push(board[i][j]);
                             }
//                             else{
//                                 console.log("piece in goal location: " + i + "," + j + " is piece: " + board[i][j].getPieceId() +
//                                         "has the current coords " + board[i][j].getXCoord() + "," +
//                                         board[i][j].getYCoord());
//                             }

                         }
                     }
                }
            }             
        }
        return pieces;
    };
    /*
     * The below function is responsible for making the AI players play against each other
     * and for reporting the information back to the controller. 
     * 
     * To reintrocude the feature of AI v AI games, the below code must be uncommented.  
     * 
     */
    /*
    this.AIGame = function(model){
        //console.log(model);
        var AI_1 = new generalAI();
        var AI_2 = new generalAI();
        AI_1.setAIColour("white");
        AI_1.setTargetForWhiteAIPlayer();
        var AI_player_1 = new simpleAI2();
        var AI_player_2 = new mediumAI3();
        var whose_turn = 1;
        var count = 0;
        
        //console.log("AI player 1: " + AI_1.getAIColour());
        //console.log("AI player 2: " + AI_2.getAIColour());
        
        while(this.hasPlayerWon() === "no winner"){
            //console.log("looped round: " + count + " time(s)");
            count++;
            if(whose_turn === 1){
                current_AI_player = AI_player_1;
                current_AI_player.simpleAI2(board, model, AI_1);
                
            }
            else{
                current_AI_player = AI_player_2;
                current_AI_player.mediumAI3(board, model, AI_2);
            }
            if(whose_turn === 1){
                whose_turn = 2;
            }
            else{
                whose_turn = 1;
            }
            if(count > 79){
                break;
            }
            this.updateModelWithAIMove();           
            this.resetForNextMove();
        }
        //console.log(this.hasPlayerWon() + " is the winner");
        this.clearPiecesInGoalList();
        var winner = this.findWinnerAfterStalemate();
        return winner;
    };
    */
    
    /*
     * 
     * @returns {undefined}
     * resets the turn count to 0. This value is used to check when stalemate
     * has occured after the given number of moves for the game. 
     */
    this.resetTurnCount = function(){
        turn_count = 0;
    };
    
    /*
     * 
     * @returns {Number}
     * 
     * this function returns the current turn count
     */
    this.getTurnCount = function(){
        return turn_count;
    };
    
    /*
     * 
     * @returns {undefined}
     * 
     * this method is used only to increment the turn count
     */
    this.incrementTurnCount = function(){
        //console.log("incrementing turn count");
        turn_count++;
        //console.log("turn count: " + turn_count);
    };
    
    /*
     * 
     * @returns {String}
     * 
     * this function uses for loops to count the numebr of pieces in the goal location
     * for each player and then compare these values to see who has won. This is used to
     * check who has won when stalemate due to 80 moves being made has occured. 
     */
    this.findWinnerAfterStalemate = function(){
        var p1_pieces_in_goal = 0;
        var p2_pieces_in_goal = 0;
        var winner;
        // need to count the number of pieces in the top right hand corner
        for(var i = 7; i > 3; i--){
            for(var j = 0; j < 4; j++){
                if(board[i][j] !== 0){
                    if(board[i][j].getPieceColour() === "white"){
                        p1_pieces_in_goal++;
                    }
                }
            }
        }       
        
        // need to count the number of pieces in the bottom left hand corner
        for(var i = 0; i < 4; i++){
            for(var j = 7; j > 3; j--){
                if(board[i][j] !== 0){
                    if(board[i][j].getPieceColour() === "black"){
                        p2_pieces_in_goal++;
                    }
                }
            }
        }
        
        // if bottom left is less than top right, player 1 wins
        if(p1_pieces_in_goal > p2_pieces_in_goal){
            //console.log("player 1 wins");
            // set the global variable
            this.setWinner("player 1");
            // set the local variable
            winner = "player 1";            
        }
        
        // if bottom left is greater than top right, player 2 wins
        if(p1_pieces_in_goal < p2_pieces_in_goal){
            //console.log("player 2 wins");
            // set the global variable
            this.setWinner("player 2");
            // set the local variable
            winner = "player 2";
        }
        
        // if they are the same, the players draw
        if(p1_pieces_in_goal === p2_pieces_in_goal){
            //console.log("the game is a draw");
            this.setWinner("draw");
            winner = "draw";
        }        
        var user_details = [this.getLoggedInPlayer(), "null", winner, this.getHumanPlayer()];
        this.validation(user_details, "stats");
        return winner;
    };
    
    /*
     * @returns {undefined}
     * 
     * this function is used to reset the AI players goal location 
     * when the new game button has been pressed. 
     */
    this.resetAIPlayersGoalLocation = function(){
        // set the values to default for black peices
        if(AI.getAIColour() === "black"){
            AI.setTargetX(0);
            AI.setTargetY(7);
        }
        // set the values to default for the white peices
        else if(AI.getTargetColour === "white"){
            AI.setTargetX(7);
            AI.setTargetY(0);
        }
    };
}
