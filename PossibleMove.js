/*jslint node: true, browser: true */

"use strict";

/*
 * This is a data structure created for the possible moves that are found. It stores the x and
 * y coords for the move (where the piece will be move to) as well as the actual piece that is to
 * be moved. 
 * 
 * It contains get methods so all of the values can be collected during the running of the program, 
 * and all information is set during the newMove() function which works as a constructor. 
 */

function possibleMove(){
    var possible_x,
        possible_y,
        piece_to_move;
    
    this.newMove = function(x_value, y_value, piece){
        possible_x = x_value;
        possible_y = y_value;
        piece_to_move = piece;
    };
    
    //don't know if these get methods will be needed
    this.getX = function() {
        return possible_x;
    };
    
    this.getY = function() {
        return possible_y;
    };
    
    this.getPieceToMove = function(){
        return piece_to_move;
    };
    
}
