/*jslint node: true, browser: true */

"use strict";

function UgolkiView(){
    var circle = document.getElementById("white_circle"),
        square = document.getElementById("square"),
        test_button = document.getElementById("test_button"),
        test_button_2 = document.getElementById("test_button_2"),
        new_game_button = document.getElementById("new_game_button"),
        two_by_two_button = document.getElementById("two_by_two"),
        game_menu = document.getElementById("game_menu"),
        test_page = document.getElementById("test_page"),
        test_board = document.getElementById("test_board"),
        new_game_page = document.getElementById("new_game_page"),
        game_board_page = document.getElementById("game_board");

    //defining this here, want to keep it seperate
    var current_page = game_menu;
        
    
   this.setCircleClickCallback = function (callback) {
//        circle.addEventListener("click", callback);
    };
    
    this.setSquareClickCallback = function (callback) {
        //square.addEventListener("click", callback);
    };
    
    this.setTestButtonCallback = function (callback) {
        test_button.addEventListener("click", callback);
    };
    
    this.setTestButtonTwoCallBack = function (callback) {
        test_button_2.addEventListener("click", callback);
    };
    
    this.setNewGameButtonCallback =function (callback) {
        new_game_button.addEventListener("click", callback);
    };
    
    this.setTwoByTwoButtonCallback = function (callback){
        two_by_two_button.addEventListener("click", callback);
    };
    
   
    this.setPage = function(page){
        //console.log("Page = " + page);
        if(page === 'Test Page'){
            current_page.style.display = "none";
            test_page.style.display = "block";
            current_page = test_page;
        }
        else if(page === 'Test Page 2'){
            current_page.style.display = "none";
            test_board.style.display = "block";
            current_page = test_board;
        }
        else if(page === 'New Game'){
            current_page.style.display = "none";
            new_game_page.style.display = "block";
            current_page = new_game_page;
        }
        else if(page === 'Game Board'){
            current_page.style.display = "none";
            game_board_page.style.display = "block";
            current_page = game_board_page;
        }        
    };
    
    this.repositionCircle = function(new_x, new_y) {
        circle.setAttribute("cx", new_x);
        circle.setAttribute("cy", new_y);
    };
    this.drawBasicBoard = function(no_of_squares){
        console.log(no_of_squares);
        var svg = document.getElementById("draw_board");
            //svgNS = svg.namespaceURI;
        for(var i = 0; i < no_of_squares; i++){
            var x = parseInt(50 * (i+1)),
                y = parseInt(50 * (i+1)),
                id = 'rect' + i;
                // need to figure out how to add a new element to svg
        }
    };
    
    
    
    this.getCircleXValue = function(){
        var x_coord = circle.attributes.cx.value;
        return x_coord;
    };
    this.getCircleYValue = function() {
        var y_coord = circle.attributes.cy.value;
        return y_coord;
    };
    this.getSquare = function() {        
        return square;
    };
    this.getNewCircleY = function() {
        var new_y = square.attributes.y.value + ((square.attributes.width.value)/2);
        return new_y;
    };   
    
    
    

}