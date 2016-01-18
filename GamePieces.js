/*jslint node: true, browser: true */

"use strict";

/*
 * Not sure entirely what variables will be needed at this time, will
 * need to exand on this depending on what else I decided is important.
 */
function gamePieces(){
    var player = "default",
        colour = "default",
        id_no = 0,
        x_coord = -0,
        y_coord = -0;

    this.newGamePiece = function(p, c, id, x, y){
        player = p;
        colour = c;
        id_no = id;
        x_coord = x;
        y_coord = y;
    };
    
    //get methods for piece
    this.getPiecePlayer = function() {
        return player;
    };
    this.getPieceColour = function() {
        return colour;
    };
    this.getPieceId = function() {
        return id_no;
    };
    
    this.getXCoord = function() {
        return x_coord;
    };
    
    this.getYCoord = function() {
        return y_coord;
    };
    
    //may need to include set methods, don't think so though
    this.setXCoord = function (new_x){
        x_coord = new_x;
    };
    this.setYCoord = function (new_y) {
        y_coord = new_y;
    };
}
    

