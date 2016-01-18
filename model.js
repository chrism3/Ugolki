/*jslint node: true, browser: true */

"use strict";

function UgolkiModel(){
    var circle_x_coord = -0,
        circle_y_coord = -0,
        new_x_coord = -0,
        new_y_coord = 0,
        //might not actually need current page
        current_page = "game menu",
        board_representation = [];

    /*
     * These are the set methods
     */
    this.setCircle = function (x_coord, y_coord){
        console.log("setCircle in model");
        circle_x_coord = x_coord;
        circle_y_coord = y_coord;
    };  
    this.setCurrentPage = function(page){
        current_page = page;
    }
    
    /*
     * These are the get methods
     */
    this.getNewX = function (square) {
        new_x_coord = parseInt(square.attributes.x.value) + parseInt((square.attributes.height.value)/2);
        return new_x_coord;
    };
    this.getNewY = function (square) {
        new_y_coord = parseInt(square.attributes.y.value) + parseInt((square.attributes.width.value)/2);
        return new_y_coord;
    };
    this.getCurrentXCoord = function(){
        return circle_x_coord;
    };  
    this.makeGameBoard = function(size){
        /*
         * This method will need heavily changed, doesn't do anything useful at all
         */
        
        // need to figure out a clever way of counting the number of pieces needed
        console.log("need to make the game board now");
        board_representation = new Array(size);
        for(var i = 0; i < board_representation.length; i++){
            // is this where i want to add in new pieces to the game board?
            
        }
        
    };
    this.getBoardRepresentation = function (){
        return board_representation;
    };
}


