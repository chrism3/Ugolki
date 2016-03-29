/*jslint node: true, browser: true */

"use strict";

/*
 * This is a data structure created to hold the values for every one of the game pieces. This
 * is what is stored at the locations in the board array, when there is actually a piece in the
 * given location. 
 * 
 * This stores:
 *      - the player (player 1 or 2)
 *      - the colour of the peice (not the actual visual colour, black or white instead)
 *      - the id of the piece (white circle 1, brown circle 3...)
 *      - the x coord (numerical value from 0-7)
 *      - the y coord (numberical value for 0-7)
 *      
 * the functions in here are get at set methods for the above values. However, the majority of
 * the sets (other than when a piece is moved) are performed in the newGamePiece() function
 * which works as the constructor for this file. 
 */
function gamePieces(new_player, new_colour, id, x, y){
    var player = new_player,
        colour = new_colour,
        id_no = id,
        x_coord = x,
        y_coord = y;

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
    

