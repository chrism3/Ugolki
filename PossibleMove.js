/*jslint node: true, browser: true */

"use strict";

/*
 * not entirely sure if this will be needed, but will include for now.
 * Final implementation may come up with better way of doing this most likely
 */

function possibleMove(){
    var possible_x,
        possible_y;
    
    this.newMove = function(x_value, y_value){
        possible_x = x_value;
        possible_y = y_value;
    };
    
    //don't know if these get methods will be needed
    this.getX = function() {
        return possible_x;
    };
    
    this.getY = function() {
        return possible_y;
    };
    
}
