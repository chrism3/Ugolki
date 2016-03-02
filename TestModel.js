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
        find_moves.init(test_board);
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
           
            find_moves.moveRight(right, y_coord);
            find_moves.moveLeft(left, y_coord);
            find_moves.moveUp(above, x_coord);
            find_moves.moveDown(below, x_coord);
//            find_moves.jumpRight(right, y_coord);
//            find_moves.jumpLeft(left, y_coord);
//            find_moves.jumpUp(above, x_coord);
//            find_moves.jumpDown(below, x_coord);
            
            /*
             * multipe jump is a pretty cool feature, but the way its programmed right now
             * can be pretty slow. will come back to it to try find a faster way to do it
             */
            find_moves.multipleJump3(x_coord, y_coord);
            possible_moves = find_moves.getPossibleMoves();
            console.log("in the model possible moves length: " + possible_moves.length);
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
                    console.log("something has went wrong");
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
        console.log("setting player 2 to: " + player_type);
        player_2_type = player_type;
    };
    
    // set and get methods for signed in
    this.setSignedIn = function(player_signed_in){
        signed_in = player_signed_in;
    };
    this.getSignedIn = function(){
        return signed_in;
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
    
    
    // I'm not sure how the AI should work... maybe like this
    var AI_type = "simpleAI";
    var current_AI_player = new simpleAI();

    
    /*
     * Have a variable called AI_type
     * Use the following method to check which AI we currently have set, simple, hard, good ect...
     * Then call the appropriate AI class
     */
    this.checkAIType = function (){
        // need to get the pieces that the AI can actually move
        
        // call this to make sure the AI board rep is up to date
       //current_AI_player.updateBoard(test_board);
        var pieces = new Array();
        var count = 0;
        for(var i = test_board.length-1; i > 0; i--){
            for(var j = 0; j < test_board.length; j++){
                 if(test_board[i][j] !== 0){
                     // currently only works if the Ai is player 2
                     if(test_board[i][j].getPiecePlayer() === "player_two"){
                         //console.log("index the peice is added to: " + count);
                         //console.log("x and y coords of piece: " + test_board[i][j].getXCoord()+
                         //        "," + test_board[i][j].getYCoord());
                         pieces.push(test_board[i][j]);
                         count++;
                     }
                 }
            }
        }
        var find_moves = new findMoves();
        find_moves.init(test_board);
        if(AI_type === "simpleAI"){            
            //current_AI_player.findAllMoves(pieces, test_board);
            //current_AI_player.findAllMoves2(pieces, test_board);
            current_AI_player.simpleAI(pieces, test_board);
        }
        else if(AI_type === "mediumAI"){
            current_AI_player.mediumAI(pieces, test_board);
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
            current_AI_player = new mediumAI();
        }
    };
    
    this.getAIChoosenMove = function(){
        return current_AI_player.getChoosenMove();
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
        
        console.log("checking if player 2 has won");
        for(var i = 0; i < 4; i++){
            for(var j = 7; j > 3; j--){
//                console.log("");
//                console.log("index + " + i + "," + j);
                if(test_board[i][j] !== 0){                    
                    var piece = test_board[i][j];
                    
//                    console.log("found piece: " + piece.getPieceColour());
                    if(piece.getPieceColour() !== "black"){
                        console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
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
            return "player 2";
        }
        
        console.log("checking if player 1 has won");
        for(var i = 7; i > 3; i--){
            //console.log(test_board[7][0].getPieceColour());
            for(var j = 0; j < 4; j++){
                if(test_board[i][j] !== 0){
                    var piece = test_board[i][j];
                    //console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
                    if(piece.getPieceColour() !== "white"){
                        console.log("piece of colour " + piece.getPieceColour() + " is at location: " + piece.getXCoord() + "," + piece.getYCoord());
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
            console.log(user_details);
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
        console.log("new dark colour: " + new_colour);
        dark_board_colour = new_colour;
    };
    this.setLightBoardColour = function(new_colour){
        console.log("new light colour: " + new_colour);
        light_board_colour = new_colour;
    };
    
    
}
