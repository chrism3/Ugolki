/*jslint node: true, browser: true */

"use strict";

/*
 * not entirely sure if this will be needed, but will include for now.
 * Final implementation may come up with better way of doing this most likely
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
    }
    
}
