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
    
    // variables to set the screen sizes
    var screen_width = 0,
    screen_height = 0;
    
    //please rename test_board
   this.setTestBoard = function(screen_to_board_map){
       
       for(var i = 0; i < test_board.length; i++){
           test_board[i] = new Array(8);
           for(var j = 0; j < test_board.length; j++){
               if(screen_to_board_map[i][j] !== undefined){
                   if(screen_to_board_map[i][j][1] === "white"){
                       var piece = new gamePieces("player_one", "white", i, j);
                       test_board[i][j] = piece;
                   }
                   else if(screen_to_board_map[i][j][1] === "black"){
                       var piece = new gamePieces("player_two", "black", i, j);
                       test_board[i][j] = piece;
                   }
               }
               else{
                    test_board[i][j] = 0;
               }
           }
       }
   };
    
   this.init = function () {
        possible_moves = new Array();
        for (var i = 0; i < 3; i++) { // the value 3 here is hard coded
                                      // it should depend on the number of rows/collums
            test_board[i] = new Array(3);
            for (var j = 0; j < 3; j++) {
                test_board[i][j] = 0;
            }
        }
        //console.log("Piece p x-coord: " + p.getXCoord());
        //console.log("Piece p y_coord: " + p.getYCoord());
        test_board[0][0] = p;
        test_board[1][0] = p2;
    };

    this.setScreenSize = function(){
        screen_width = window.innerWidth;
        screen_height = window.innerWidth;
    };

    // will eventaully need piece_x_coord and piece_y_coord, i think?
    this.findMoves = function (piece_x_coord, piece_y_coord) {
        // init possible moves and test_board
        
        // need to set isPieceSelected to true so that we can soon move this piece
        isPieceSelected = true;
        // this loop is used to clear the possible moves array
        for (var i = 0; i < possible_moves.length; i++) {
            // this is not a function, need to do something different here
            //possible_moves[i].pop();
            possible_moves.splice(i, 1);
        }
        //console.log("");
        //console.log("this is the find moves function");
        //console.log(test_board.length);
        for (var i = 0; i < test_board.length; i++) {
            for (var j = 0; j < test_board.length; j++) {
                if (test_board[i][j] !== 0) {
                    //console.log("i = " + i);
                    //console.log("j = " + j);
                    //console.log("found peice with id: " + test_board[i][j].getPieceId());
                    /*
                     * code above works. Now need to find a way to calculate the possible moves
                     * for a given piece. This implementation will probably have to change when the
                     * test board has more than one peice on it. The above code, may work for more than
                     * one piece with some slight tweaking. 
                     */

                    var above = parseInt((test_board[i][j].getYCoord()) - 1);
                    //console.log("above = " + above);
                    var below = parseInt((test_board[i][j].getYCoord()) + 1);
                    //console.log("below = " + below);
                    var left = parseInt((test_board[i][j].getXCoord()) - 1);
                    //console.log("left = " + left);
                    var right = parseInt((test_board[i][j].getXCoord()) + 1);
                    //console.log("right = " + right);

                    /*
                     * might need to change these if statements so that we can check if the next
                     * squares contain pieces, and if so make a way of jumping over them
                     */
                    //console.log("i =" + i + ", above =" +above);

                    if (above >= 0 && test_board[i][above] === 0) {
                        // console.log("Model.findMoves: doing this");
                        var move = new possibleMove;
                        move.newMove(i, above);
                        //console.log("above, adding to possible_moves");
                        possible_moves.push(move);
                        //console.log(possible_moves.length);
                    }
                    if (below < test_board.length && test_board[i][below] === 0) {
                        var move = new possibleMove;
                        move.newMove(i, below);
                        //console.log("below, adding to possible moves with coords " + i + "," + below);
                        possible_moves.push(move);
                    }

                    if (left >= 0 && test_board[left][j] === 0) {
                        var move = new possibleMove;
                        move.newMove(left, j);
                        //console.log("left, adding to possible moves");
                        possible_moves.push(move);
                    }

                    //console.log("right" + right);
                    //console.log("j " + j);

                    if (right < test_board.length && test_board[right][j] === 0) {
                        var move = new possibleMove;
                        move.newMove(right, j);
                        //console.log("right, adding to possible moves with coords: " + right + "," + j);
                        possible_moves.push(move);
                    }
                }
            }
            /*for(var i = 0; i < possible_moves.length; i++){
             console.log();
             console.log(possible_moves[i].getY());
             console.log(possible_moves[i].getX());
             }*/
        }
        return possible_moves;
    };

    // second, hopefully better version of this method
    this.findMoves2 = function (x_coord, y_coord) {
        // set isPieceSelected to true
        isPieceSelected = true;
        // this loop is used to clear the possible moves array
        possible_moves = [];
        

        var find_moves = new findMoves();
        find_moves.init(test_board);
        // check the piece is the right players piece
        //console.log(x_coord);
        //console.log(y_coord);
        find_moves_successful = true;        
        current_piece = test_board[x_coord][y_coord];
        
        
//        console.log("findMoves2 (model): " + x_coord + "," + y_coord);
//        console.log("current piece: " + current_piece);
//        console.log("piece colour from getPieceColour: " + current_piece.getPieceColour());
//        console.log("piece colour from player colour: " + current_player_colour);
        
        
        if (current_piece.getPieceColour() === current_player_colour) {
            var above = parseInt((test_board[x_coord][y_coord].getYCoord()) - 1);
            //console.log("above = " + above);
            var below = parseInt((test_board[x_coord][y_coord].getYCoord()) + 1);
            //console.log("below = " + below);
            var left = parseInt((test_board[x_coord][y_coord].getXCoord()) - 1);
            //console.log("left = " + left);
            var right = parseInt((test_board[x_coord][y_coord].getXCoord()) + 1);
            //console.log("right = " + right);
            
            //console.log("xcoord = " + x_coord + " above = " + above);
            /*if (above >= 0 && test_board[x_coord][above] === 0) {
                //console.log("adding above");
                var move = new possibleMove;
                move.newMove(x_coord, above);
                possible_moves.push(move);
            }
            
            //console.log(above-1);
            if(above-1 >= 0 && test_board[x_coord][above] !== 0){
                if(above-1 >= 0 && test_board[x_coord][above - 1] === 0){
                    //console.log("adding jump above");
                    var move = new possibleMove;
                    move.newMove(x_coord, above-1);
                    possible_moves.push(move);
                }
            }
            if (below < test_board.length && test_board[x_coord][below] === 0) {
                //console.log("adding below");
                var move = new possibleMove;
                move.newMove(x_coord, below);
                possible_moves.push(move);
            }
            
            if(below+1 < test_board.length && test_board[x_coord][below] !== 0){
                if(below+1 < test_board.length && test_board[x_coord][below + 1] === 0){
                    //console.log("adding jump below");
                    var move = new possibleMove;
                    move.newMove(x_coord, below+1);
                    possible_moves.push(move);
                }
            }
            if (left >= 0 && test_board[left][y_coord] === 0) {
                //console.log("adding left");
                var move = new possibleMove;
                move.newMove(left, y_coord);
                possible_moves.push(move);
            }
            var jump_left = parseInt(left -1);
            if(left-1 >= 0 && test_board[left][y_coord] !== 0){                
                if(jump_left >= 0 && test_board[jump_left][y_coord] === 0){
                    //console.log("adding jump left");
                    var move = new possibleMove;
                    move.newMove(jump_left, y_coord);
                    possible_moves.push(move);
                }
            }*/
            /*if (right < test_board.length && test_board[right][y_coord] === 0) {
                //console.log("adding right");
                var move = new possibleMove;
                move.newMove(right, y_coord);
                possible_moves.push(move);
            }*/
            /*
            if(right+1 <= test_board.length && test_board[right][y_coord] !== 0 ){
                if(right+1 < test_board.length && test_board[right+1][y_coord] === 0){
                    //console.log("adding jump right");
                    var move = new possibleMove;
                    move.newMove(right+1, y_coord);
                    possible_moves.push(move);
                }
            }*/
            // better way to find possible moves
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
                    test_board[choosen_square_x][choosen_square_y] = current_piece;
                    //console.log("after resetting (model): " + test_board[current_piece.getXCoord()][current_piece.getYCoord()]);
                    // reset the values for X and Y of the game piece
                    current_piece.setXCoord(choosen_square_x);
                    current_piece.setYCoord(choosen_square_y);

                    new_x_coord = choosen_square_x;
                    new_y_coord = choosen_square_y;
                    move_successful = true;
                    break;
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
    
    
    
    
    // may need to not use these methods, will move them later if they are needed
    this.getPlayerTwoType = function (){
        return player_2_type;
    };    
    this.setPlayerTwoType = function (player_type){
        player_2_type = player_type;
    };
    
    // I am making these methods so at some point i can make the AI play against itself
    this.setPlayerOneType = function (player_type){
        player_1_type = player_type;
    };
    this.getPlayerOneType = function () {
        return player_1_type;
    };
    
    // I'm not sure how the AI should work... maybe like this
    var AI_type = "simpleAI";
    var current_AI_player;
    /*
     * Have a variable called AI_type
     * Use the following method to check which AI we currently have set, simple, hard, good ect...
     * Then call the appropriate AI class
     */
    this.checkAIType = function (){
        // need to get the pieces that the AI can actually move
        var pieces = new Array();
        var count = 0;
        for(var i = test_board.length-1; i > 0; i--){
            for(var j = 0; j < test_board.length; j++){
                 if(test_board[i][j] !== 0){
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
            current_AI_player = new simpleAI();
            current_AI_player.decideMove(pieces, find_moves);
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
    };
    
    this.getAIChoosenMove = function(){
        return current_AI_player.getChoosenMove();
    };
    
    // i don't think i like how this is working
    this.getAIPieceIndex = function () {
        return current_AI_player.getAIPieceIndex();
    };
    
}


