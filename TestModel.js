/*jslint node: true, browser: true */

"use strict";

function testModel() {
    // need to create all of the pieces for the game
    var p = new gamePieces();
    p.newGamePiece("player_one", "white", 1, 0, 0);
    var p2 = new gamePieces();
    p2.newGamePiece("player_two", "black", 2, 1, 0);
    
    var player_1_type = "human"; // this will be needed nearer the end of the project
    var player_2_type = "AI";
    
    var test_board = new Array(8);
    var possible_moves = new Array();
    var new_x_coord = -1;
    var new_y_coord = -1;
    var isPieceSelected = false;
    var current_player_colour = "white";
    var current_piece;
    // don't like this being global but findMoves all ready has a return statement
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
    
    
    // i dont like putting these here, but not sure how else to do this
    var pieces_in_goal = new Array();
    var bad_move_made = false;
    var bad_move_count = 0;
    var bad_pieces_moved = new Array();
    var AI = new generalAI();
    
    // variable to store how many moves have happened
    var turn_count = 0;
    
    // variable to store the current game 
    var game_type = "standard";
    
    //please rename test_board
   this.setTestBoard = function(){
       var white_id = 1;
       var brown_id = 1;
      
       // firstly, initilaise the board
       for(var i = 0; i < test_board.length; i++){
           test_board[i] = new Array(8);
           for(var j = 0; j < test_board.length; j++){
               test_board[i][j] = 0;
           }
       }
       // next we place the white sqaures in the bottom left
       for(var i = 7; i > 3; i--){
           for(var j = 0; j < 4; j++){
             var id_no = "white_circle_" + white_id;
             var white_piece = new gamePieces("player_one", "white", id_no, j, i);
             test_board[j][i] = white_piece;
             white_id++;
             var id_no = "brown_circle_" + brown_id;
             var black_piece = new gamePieces("player_two", "black", id_no, i, j);
             test_board[i][j] = black_piece;
             brown_id++;             
           }
       }
   };
    
   this.setScreenSize = function(){
        screen_width = window.innerWidth;
        screen_height = window.innerWidth;
    };

    // second, hopefully better version of this method
    this.findMoves2 = function (x_coord, y_coord) {
        // set isPieceSelected to true
        isPieceSelected = true;
        // this loop is used to clear the possible moves array
        possible_moves = [];
        
        //console.log("In model (findMoves2) the x and y coords are: " + x_coord + "," + y_coord);

        var find_moves = new findMoves();
        find_moves.init(test_board, game_type);
        // check the piece is the right players piece
        //console.log(x_coord);
        //console.log(y_coord);
        find_moves_successful = true;        
        current_piece = test_board[x_coord][y_coord];
        //console.log("In model (findMoves2) the id of the selected piece is: " + current_piece.getPieceId());
        
        if (current_piece.getPieceColour() === current_player_colour) {
            var above = parseInt((test_board[x_coord][y_coord].getYCoord()) - 1);
            //console.log("above = " + above);
            var below = parseInt((test_board[x_coord][y_coord].getYCoord()) + 1);
            //console.log("below = " + below);
            var left = parseInt((test_board[x_coord][y_coord].getXCoord()) - 1);
            //console.log("left = " + left);
            var right = parseInt((test_board[x_coord][y_coord].getXCoord()) + 1);
            //console.log("right = " + right);            
           
           if(game_type === "standard"){
                find_moves.moveRight(right, y_coord);
                find_moves.moveLeft(left, y_coord);
                find_moves.moveUp(above, x_coord);
                find_moves.moveDown(below, x_coord);
                find_moves.multipleJump3(x_coord, y_coord);
                possible_moves = find_moves.getPossibleMoves();
                //console.log("in the model possible moves length: " + possible_moves.length);
            }
            else if(game_type === "no multi jump"){
                console.log("need to find some different moves");
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
                //console.log("need to find mvoes that go towards the goal");
                //console.log("current player colour : " + current_player_colour);
                if(current_player_colour === "white"){
                    //console.log("finding moves for white pieces");
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
            find_moves_successful = false;
        }
        //console.log("number of possible moves: " + possible_moves.length);
        
        return possible_moves;
    };

    this.movePiece = function (choosen_square_x, choosen_square_y) {
        //console.log(choosen_square);
        //console.log(choosen_square_x + "     " + choosen_square_y);
        var move_successful;
        if (isPieceSelected) {
            //console.log(possible_moves.length);
            
            
            for (var i = 0; i < possible_moves.length; i++) {
                if (choosen_square_x === possible_moves[i].getX() &&
                        choosen_square_y === possible_moves[i].getY()) {
                    //console.log("got into the for loop when i shouldn't have")
                    var x_coord = possible_moves[i].getX();
                    var y_coord = possible_moves[i].getY();

                    // move the piece in the board array
                    //console.log("in move piece (model): " + test_board[current_piece.getXCoord()][current_piece.getYCoord()]);
                    test_board[current_piece.getXCoord()][current_piece.getYCoord()] = 0;
                    current_piece.setXCoord(choosen_square_x);
                    current_piece.setYCoord(choosen_square_y);
                    test_board[choosen_square_x][choosen_square_y] = current_piece;
                    //console.log("after resetting (model): " + test_board[current_piece.getXCoord()][current_piece.getYCoord()]);
                    // reset the values for X and Y of the game piece


                    new_x_coord = choosen_square_x;
                    new_y_coord = choosen_square_y;
                    move_successful = true;
//                    
//       console.log(" ");
//       console.log(" ");
//       console.log(" ");
//       console.log(" ");
//       for(var i = 0; i < test_board.length; i++){
//           for(var j = 0; j < test_board.length; j++){
//               var piece = test_board[i][j];
//               if(piece !== 0){
//               console.log("At index: (" + i + "," + j + ") is the peice with coords: (" +
//                       piece.getXCoord() + "," + piece.getYCoord() + ") - " + piece.getPieceColour() + 
//                       "with id: " + piece.getPieceId());
//                }
//                else{
//                    console.log("At index (" + i + "," + j + ") there is no piece");
//                }
//           }
//       }
                    
                    
                   
                }
                else{
                    //console.log("something has went wrong");
                    // not sure whether or not this should have a return in here or what it should be
                    // if i do use this, will need to alter return statement from being a boolean
                }
            }
        }
        else {
            move_successful = false;
        }
//        isPieceSelected = false;
//        this.setCurrentPlayerColour();    
          return move_successful;
    };

    this.getNewX = function () {
        return new_x_coord;
    };

    this.getNewY = function () {
        return new_y_coord;
    };
    this.setCurrentPlayerColour = function(){
        if(current_player_colour === "white"){
            current_player_colour = "black";
        }
        else current_player_colour = "white";
    };
    this.getCurrentPlayerColour = function (){
        return current_player_colour;
    };
    
    this.getScreenHeight = function(){
        return screen_height;
    };
    
    this.getScreenWidth = function() {
        return screen_width;
    };
    
    this.resetForNextMove = function() {
        new_x_coord = -1;
        new_y_coord = -1;
        isPieceSelected = false;
        this.setCurrentPlayerColour();
    };
    
    this.setGameType = function(new_type){
        console.log("settings game type to: " + new_type);
        game_type = new_type;
    };
    this.getGameType = function (){
        return game_type;
    };
    
    // getter method to get the success of find moves
    this.wasFindMovesSuccessful = function(){
        return find_moves_successful;
    };   
 
    
    // I am making these methods so at some point i can make the AI play against itself
    this.setPlayerOneType = function (player_type){
        player_1_type = player_type;
    };
    this.getPlayerOneType = function () {
        return player_1_type;
    };
    
    // may need to not use these methods, will move them later if they are needed
    this.getPlayerTwoType = function (){
        return player_2_type;
    };    
    this.setPlayerTwoType = function (player_type){
        //console.log("setting player 2 to: " + player_type);
        player_2_type = player_type;
    };
    
    // set and get methods for signed in
    this.setSignedIn = function(player_signed_in){
        signed_in = player_signed_in;
    };
    this.getSignedIn = function(){
        return signed_in;
    };
    // method to get human player... will return 'player 1' or 'player 2'
    this.getHumanPlayer = function(){
        return human_player;
    };
    // method to set human player... paramater passes in will either be 'player 1' or 'player 2'
    this.setHumanPlayer = function(new_player_value){
        human_player = new_player_value;
    };
    // method to get who the winner is... either 'player 1' or 'player 2' or 'no winner'
    this.getWinner = function(){
        return winner;
    };
    // function to return who the winner is... will either be 'player 1' or 'player 2 or 'no winner'
    this.setWinner = function(set_winner){
        winner = set_winner;
    };    
    
    //set and get methods for the current_player
    this.setLoggedInPlayer = function(player_name){
        logged_in_player = player_name;
        this.setIsloggedIn();
    };
    this.getLoggedInPlayer = function(){
        return logged_in_player;
    };
    
    this.setIsloggedIn = function(){
        is_logged_in = true;
    };
    
    this.getLoggedIn = function(){
        return is_logged_in;
    };
    
    
    // change this back to being easy once we are done
    var AI_type = "simpleAI";
    var current_AI_player = new simpleAI2();

    
    /*
     * Have a variable called AI_type
     * Use the following method to check which AI we currently have set, simple, hard, good ect...
     * Then call the appropriate AI class
     */
    this.checkAIType = function (model, condition){
        var pieces = new Array();
        if(condition === "new game"){
            //console.log("is it setting a new game AI");
            AI.setNewGameAI();
        }

        var find_moves = new findMoves();
        find_moves.init(test_board);
        console.log(pieces.length);
        console.log(AI_type);
        if(AI_type === "simpleAI"){            
            current_AI_player.simpleAI2(test_board, model, AI);
        }
        else if(AI_type === "mediumAI"){
            current_AI_player.mediumAI(test_board, model, AI);
        }
        else if(AI_type === "hardAI"){
            current_AI_player.mediumAI3(test_board, model, AI);
        }
    };
    
    /* maybe need a get and set method for the AI, might not.
     * might have to delete these methods later
     */
    this.getAIType = function (){
       return AI_type;
    };
    this.setAIType = function (type) {
        AI_type = type;
        
        if(AI_type === "simpleAI"){
            //console.log("making new simple AI player");
            current_AI_player = new simpleAI();
            //current_AI_player.updateBoard(test_board);
        }
        if(AI_type === "mediumAI"){
            current_AI_player = new mediumAI2();
        }
        if(AI_type === "hardAI"){
            current_AI_player = new mediumAI3();
        }
    };
    
    this.getAIChoosenMove = function(){
        var move = current_AI_player.getChoosenMove();
        return move;
    };
    
    // i don't think i like how this is working
    this.getAIPieceIndex = function () {
        return current_AI_player.getAIPieceIndex();
    };
    
    this.updateModelWithAIMove = function(){
        var moved_piece_x = current_AI_player.getAISelectedPieceXCoord();
        var moved_piece_y = current_AI_player.getAISelectedPieceYCoord();
        var move = this.getAIChoosenMove();
        var new_x = move.getX();
        var new_y = move.getY();
        
       // dont like this for loop, but think i need it
       for(var i = 0; i < test_board.length; i++){
           for(var j = 0; j < test_board.length; j++){
               if(test_board[i][j] !== 0){
                    if(test_board[i][j].getXCoord() === moved_piece_x &&
                            test_board[i][j].getYCoord() === moved_piece_y){
                        var piece_to_move = test_board[i][j];
                        test_board[i][j] = 0;
                        piece_to_move.setXCoord(new_x);
                        piece_to_move.setYCoord(new_y);
                        test_board[new_x][new_y] = piece_to_move;                    
                    }
                }
           }
       }

//       for(var i = 0; i < test_board.length; i++){
//           for(var j = 0; j < test_board.length; j++){
//               var piece = test_board[i][j];
//               if(piece !== 0){
//               console.log("At index: (" + i + "," + j + ") is the peice with coords: (" +
//                       piece.getXCoord() + "," + piece.getYCoord() + ") - " + piece.getPieceColour() + " - id: "
//                       + piece.getPieceId());
//                }
//                else{
//                    console.log("At index (" + i + "," + j + ") there is no piece");
//                }
//           }
//       }
   };
    
    this.hasPlayerWon = function(){
        var player_1_won = true;
        var player_2_won = true;
        
        //console.log("checking if player 2 has won");
        for(var i = 0; i < 4; i++){
            for(var j = 7; j > 3; j--){
//                console.log("");
//                console.log("index + " + i + "," + j);
                if(test_board[i][j] !== 0){                    
                    var piece = test_board[i][j];
                    
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
            return "player 2";
        }
        
        //console.log("checking if player 1 has won");
        for(var i = 7; i > 3; i--){
            //console.log(test_board[7][0].getPieceColour());
            for(var j = 0; j < 4; j++){
                if(test_board[i][j] !== 0){
                    var piece = test_board[i][j];
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
            return "player 1";
        }
        
        else{
            return "no winner";
        }
        
    };
    
    // this method is used to pass the details onto the correct validation method
    this.validation = function(user_details, validation_status){
        var status;
        var validate = new detailsValidation();
        if(validation_status === "sign up"){
            // call the validation for signing up
            //var validate = new detailsValidation();
            validate.signUpValidation(user_details);
            status = validate.getSignInStatus();
        }
        else if(validation_status === "login"){
            //var validate = new detailsValidation();
            validate.loginValidation(user_details);
            status = validate.getLoginStatus();
        }
        else if(validation_status === "stats"){
            // maybe not the best way to do this, stats doesn't really need validation?
            //var validate = new detailsValidation();
            validate.statsUpdateValidation(user_details);
            // not sure what will needed to be returned here... if anything
        }
        else if(validation_status === "retrieve stats"){
            //console.log(user_details);
            var stats = validate.retrieveStatsValidation(user_details);
            //console.log("in model: " +stats.length);
            return stats;
        }
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
    this.getDarkBoardColour = function(){
        return dark_board_colour;
    };
    this.getLightBoardColour = function(){
        return light_board_colour;
    };
    this.setDarkBoardColour = function(new_colour){
        //console.log("new dark colour: " + new_colour);
        dark_board_colour = new_colour;
    };
    this.setLightBoardColour = function(new_colour){
        //console.log("new light colour: " + new_colour);
        light_board_colour = new_colour;
    };
    
    
    // I dont like doing this like this but it might work
    this.getAIPiecesInGoalLocation = function(){
        return pieces_in_goal;
    };
    
    this.addPieceToGoalLocationList = function(piece){
        pieces_in_goal.push(piece);
    };
    this.resetGoalList = function(){
        pieces_in_goal = [];
    };
    
    this.getBadMoveMade = function(){
        return bad_move_made;
    };
    this.setBadMoveMade = function(){
        if(bad_move_made){
            bad_move_made = false;
        }
        else{
            bad_move_made = true;
        }
    };
    this.getBadMoveCount = function(){
        return bad_move_count;
    };
    this.incrementBadMoveCount = function(){
        bad_move_count++;
    };
    this.resetBadMoveCount = function(){
        bad_move_count = 0;
    };
    this.addBadPieceMoved = function(piece){
        bad_pieces_moved.push(piece);
    };
    this.getBadPiecesMoves = function(){
        return bad_pieces_moved;
    };
    this.clearBadPiecesList = function(){
        bad_pieces_moved = [];
    };
    this.clearPiecesInGoalList = function(){
        pieces_in_goal = [];
    };
    
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
    
    this.getAIColour = function(){
        return AI.getAIColour();
    };
    
    this.setAIColour = function(){
        AI.setAIColour();
    };
    this.setnewGameAI = function(){
        AI.setNewGameAI();
    };
    
    this.getPieces = function(AI_player){
//        for(var i = 0; i < pieces_in_goal.length; i++){
//            console.log(pieces_in_goal[i].getPieceId());
//        }
        //console.log("this has been called");
        var pieces = new Array();
        var reached_goal = false;
        if(AI_player.getAIColour() === "black"){
            for(var i = test_board.length-1; i >= 0; i--){
                for(var j = 0; j < test_board.length; j++){
                    //console.log("the coords: " + i + "," + j);
                     if(test_board[i][j] !== 0){
                         // resetting this just in case
                         reached_goal = false;
                         // currently only works if the Ai is player 2
                         if(test_board[i][j].getPieceColour() === "black"){
                             for(var k = 0; k < pieces_in_goal.length; k++){                                 
                                 if(test_board[i][j].getPieceId() === pieces_in_goal[k].getPieceId()){
//                                     console.log(test_board[i][j].getPieceId() + " is the same as " +
//                                             pieces_in_goal[k].getPieceId());
                                     reached_goal = true;
                                 }
                             }
                             if(!reached_goal){
//                                 console.log("adding piece in coords: " + test_board[i][j].getXCoord() + "," 
//                                         + test_board[i][j].getYCoord());
                                 pieces.push(test_board[i][j]);
                             }
//                             else{
//                                 console.log("NOT ADDING: " + test_board[i][j].getXCoord()
//                                         + "," + test_board[i][j].getYCoord());
//                                 console.log("it contains piece " + test_board[i][j].getPieceId() + " which is in\n\
//                                    location: " + test_board[i][j].getXCoord() + "," + test_board[i][j].getYCoord());
//                             }
                         }                         
                      }
                  }
              }
          }
        // need to do the same as above but for white pieces rather than black
        else{
            for(var i = 0; i < test_board.length; i++){
                for(var j = test_board.length -1; j >= 0; j--){
                     if(test_board[i][j] !== 0){
                         // currently only works if the Ai is player 2
                         if(test_board[i][j].getPieceColour() === "white"){
                             var reached_goal = false;
                             //console.log("pieces in their goal location: " + pieces_in_goal.length);
                             for(var k = 0; k < pieces_in_goal.length; k++){
                                 if(test_board[i][j].getPieceId() === pieces_in_goal[k].getPieceId()){
                                     reached_goal = true;
                                 }
                             }
                             if(!reached_goal){
                                //console.log("pushing piece in coords: " + i + "," + j + "with id: " + test_board[i][j].getPieceId());
                                pieces.push(test_board[i][j]);
                             }
//                             else{
//                                 console.log("piece in goal location: " + i + "," + j + " is piece: " + test_board[i][j].getPieceId() +
//                                         "has the current coords " + test_board[i][j].getXCoord() + "," +
//                                         test_board[i][j].getYCoord());
//                             }

                         }
                     }
                }
            }             
        }
        return pieces;
    };
    
    this.AIGame = function(model){
        console.log(model);
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
                current_AI_player.simpleAI2(test_board, model, AI_1);
                
            }
            else{
                current_AI_player = AI_player_2;
                current_AI_player.mediumAI3(test_board, model, AI_2);
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
                
//                console.log("what is happening");
//                
//                for(var i = 0; i < 8; i++){
//                    for(var j = 0; j < 8; j++){
//                        if(test_board[j][i] !== 0){
//                            console.log("at location " + j + "," + i +" is piece: " +
//                                    test_board[j][i].getPieceId());
//                        }
//                        else{
//                            console.log("at location " + j + "," + i +" there is no piece");
//                        }
//                    }
//                }
//                this.findWinnerAfterStalemate();
//                break;
//            }
//            console.log("making move: " + current_AI_player.getChoosenMove().getPieceToMove().getPieceId());
            
            this.updateModelWithAIMove();           
            this.resetForNextMove();
        }
        //console.log(this.hasPlayerWon() + " is the winner");
        this.clearPiecesInGoalList();
        var winner = this.findWinnerAfterStalemate();
        return winner;
    };
    
    this.resetTurnCount = function(){
        turn_count = 0;
    };
    this.getTurnCount = function(){
        return turn_count;
    };
    this.incrementTurnCount = function(){
        //console.log("incrementing turn count");
        turn_count++;
        //console.log("turn count: " + turn_count);
    };
    
    this.findWinnerAfterStalemate = function(){
        var p1_pieces_in_goal = 0;
        var p2_pieces_in_goal = 0;
        var winner;
        // need to count the number of pieces in the top right hand corner
        for(var i = 7; i > 3; i--){
            for(var j = 0; j < 4; j++){
                if(test_board[i][j] !== 0){
                    if(test_board[i][j].getPieceColour() === "white"){
                        p1_pieces_in_goal++;
                    }
                }
            }
        }       
        
        // need to count the number of pieces in the bottom left hand corner
        for(var i = 0; i < 4; i++){
            for(var j = 7; j > 3; j--){
                if(test_board[i][j] !== 0){
                    if(test_board[i][j].getPieceColour() === "black"){
                        p2_pieces_in_goal++;
                    }
                }
            }
        }
        //console.log("number of player 1 pieces in goal: " + p1_pieces_in_goal);
        //console.log("number of player 2 pieces in goal: " + p2_pieces_in_goal);
        // if top right is greater than bottom left, player 1 wins
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
            winner = "draw";
        }        
        var user_details = [this.getLoggedInPlayer(), "null", winner, this.getHumanPlayer()];
        this.validation(user_details, "stats");
        return winner;
    };
    
    /*
     * this function is called when the new game button is pressed. It sets the AI players
     * goal location back to the first target square. Without this function, after pressing
     * new game, the AI would be inable to win
     */
    this.resetAIPlayersGoalLocation = function(){
        if(AI.getAIColour() === "black"){
            AI.setTargetX(0);
            AI.setTargetY(7);
        }
        else if(AI.getTargetColour === "white"){
            AI.setTargetX(7);
            AI.setTargetY(0);
        }
    };
}
