/*jslint node: true, browser: true */

"use strict";

function testView(){
    var square_one = document.getElementById("test_square_1"),
        square_two = document.getElementById("test_square_2"),
        square_three = document.getElementById("test_square_3"),
        square_four = document.getElementById("test_square_4"),
        square_five = document.getElementById("test_square_5"),
        square_six = document.getElementById("test_square_6"),
        square_seven = document.getElementById("test_square_7"),
        square_eight = document.getElementById("test_square_8"),
        square_nine = document.getElementById("test_square_9"),
        //circles, the game pieces
        circle = document.getElementById("test_circle"),
        circle_two = document.getElementById("test_circle_2");

    // keeping this separate because i don't like it
    var selected_piece,
        selected_square;

    this.setMouseCoord = function(e) {
        console.log(e.clientX);
    };
        
    this.squareOneClickCallback = function (callback) {
        square_one.addEventListener("click", callback);
    };
    this.squareTwoClickCallback = function (callback) {
        square_two.addEventListener("click", callback);
    };
    this.squareThreeClickCallback = function (callback) {
        square_three.addEventListener("click", callback);
    };
    this.squareFourClickCallback = function (callback) {
        square_four.addEventListener("click", callback);
    };
    this.squareFiveClickCallback = function (callback) {
        square_five.addEventListener("click", callback);
    };
    this.squareSixClickCallback = function (callback) {
        square_six.addEventListener("click", callback);
    };
    this.squareSevenClickCallback = function (callback) {
        square_seven.addEventListener("click", callback);
    };
    this.squareEightClickCallback = function (callback) {
        square_eight.addEventListener("click", callback);
    };
    this.squareNineClickCallback = function (callback) {
        square_nine.addEventListener("click", callback);
    };

    
    this.setCircleClickCallback = function (callback) {
        circle.addEventListener("click", callback);
    };
    this.setCircleTwoClickCallBack = function (callback){
        circle_two.addEventListener("click", callback);
    };
    
   
    
    this.updateBoardWithMoves = function(toUpdate, colour){
        var stroke, fill;
       if(colour === "white"){
           stroke = "rgb(210, 33, 33)";
           fill = "rgb(76,240,25)";
       }
       else{
            stroke = "rgb(8,146,208)";
            fill = "rgb(250, 131, 0)";
       }
       selected_piece.style.stroke = stroke;
       if(toUpdate === "01"){
           square_three.style.fill = fill;
           square_three.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "11"){
           square_four.style.fill = fill;
           square_four.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "00"){
           square_one.style.fill = fill;
           square_one.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "10"){
           square_two.style.fill = fill;
           square_two.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "02"){
           square_seven.style.fill = fill;
           square_seven.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "12"){
           square_eight.style.fill = fill;
           square_eight.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "22"){
           square_nine.style.fill = fill;
           square_nine.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "20"){
           square_five.style.fill = fill;
           square_five.style.stroke = "rbg(255,255,0)";
       }
       else if(toUpdate === "21"){
           square_six.style.fill = fill;
           square_six.style.stroke = "rbg(255,255,0)";
       }
    }; 
    
    this.movePiece = function(new_x, new_y){
          // moves the piece
          selected_piece.style.stroke = "rgb(0,0,0)";
          selected_piece.setAttribute("cx", new_x);
          selected_piece.setAttribute("cy", new_y);
          
          // resets the board to defualt colours
          square_one.style.fill = "rgb(101,67,33)";
          square_two.style.fill = "rgb(255, 255,255)";
          square_three.style.fill = "rgb(255,255,255)";
          square_four.style.fill = "rgb(101,67,33)";
          square_five.style.fill = "rgb(101,67,33)";
          square_six.style.fill = "rgb(255, 255,255)";
          square_seven.style.fill = "rgb(101,67,33)";
          square_eight.style.fill = "rgb(255, 255,255)";
          square_nine.style.fill = "rgb(101,67,33)";
    };
    
    
     // this is a method to scale the board to the correct size
    this.scaleBoardToScreen = function(screen_height, screen_width, squares_per_row){
        console.log("got this far");
        console.log("screen height: " + screen_height);       
        
        // currently hard coded, will need to change this at some point
        squares_per_row = 3;
        
        // to move the square off the corner of the screen
        var offset = 0.1* screen_width;
        // these if statements mean that the app may be able to rescale on rotation
        // might not be needed
        var scale_size;
        if(screen_height < screen_width){
            scale_size = 0.1 * screen_height;
        }
        else if(screen_width < screen_height){
            scale_size = 0.1* screen_width;
        }
        else{
            scale_size = 0.1 * screen_width;
        }
        
        var white_squares = document.getElementsByClassName("white_square");
        var brown_squares = document.getElementsByClassName("brown_square");
        var white_circles = document.getElementsByClassName("white_circles");
        var brown_circles = document.getElementsByClassName("brown_circles");
        var all_squares = document.getElementsByTagName("rect");
        // this for loop sets the size of all the white squares on the board
        for(var i = 0; i < white_squares.length; i++){
            white_squares[i].setAttribute("width", scale_size);
            white_squares[i].setAttribute("height", scale_size);
        }
       // this for loop sets the size of all the brown squares on the board
       for(var i = 0; i < brown_squares.length; i++){
           brown_squares[i].setAttribute("height", scale_size);
           brown_squares[i].setAttribute("width", scale_size);
       }
       // this for loop sets the size of all the white circles on the board
       for(var i = 0; i < white_circles.length; i++){
           white_circles[i].setAttribute("r", 0.48 * (scale_size));
           white_circles[i].setAttribute("cx", ((0.1 * scale_size) + offset) +
                                        (0.5 * ((0.1 * scale_size) + (0.65 * offset))));
           white_circles[i].setAttribute("cy",  ((0.1 * scale_size) + offset) +
                                        (0.5 * ((0.1 * scale_size) + (0.65 *offset))));
       }
       // this for loop sets the size of all the brown circles on the baord
       for(var i = 0; i < brown_circles.length; i++){
           brown_circles[i].setAttribute ("r", 0.48 * (scale_size));
       }
       
       // for loops positions the sqaures on the board
       var col_count = 0;
       var row_count = 0;
       for(var i = 0; i < all_squares.length; i++){
            if(col_count < squares_per_row){
                all_squares[i].style.x = (col_count * scale_size) + offset;
                all_squares[i].style.y = (row_count) * scale_size + offset;
                col_count ++;
                console.log(col_count * scale_size + " , " + (row_count) * scale_size);
            }
            else {
                col_count = 0;
                row_count++;
                all_squares[i].style.x = (col_count * scale_size) + offset;
                all_squares[i].style.y = (row_count) * scale_size + offset;
                col_count++;
            }
       }
       
        
    };
    
    
    /*
     * Try to think of better way to do these functions
     */
    this.getCircleOneXCoord = function(){
        return circle.attributes.cx.value;
    };
    this.getCircleOneYCoord = function() {
        return circle.attributes.cy.value;
    };
    this.getCircleTwoXCoord = function(){
        return circle_two.attributes.cx.value;
    };
    this.getCircleTwoYCoord = function(){
        return circle_two.attributes.cy.value;
    };
    
    /*
     * might be better to have each piece with a getter method
     * and find another way to get it's coordinates
     */
    // getters for the circles
    this.getCircleOne = function() {
        return circle;
    };
    this.getCircleTwo = function() {
        return circle_two;
    };
    
    //getters for the board squares
    this.getSquareOne = function(){
        return square_one;
    };
    this.getSquareTwo = function(){
        return square_two;
    };
    this.getSquareThree = function() {
        return square_three;
    };
    this.getSquareFour = function() {
        return square_four;
    };
    this.getSquareFive = function() {
        return square_five;
    };
    this.getSquareSix = function() {
        return square_six;
    };
    this.getSquareSeven = function() {
        return square_seven;
    };
    this.getSquareEight = function() {
        return square_eight;
    };
    this.getSquareNine = function() {
        return square_nine;
    };
    
    
    // not sure yet where to use this method
    this.setSelectedSquare = function(square) {
        selected_square = square;
    };
    this.setSelectedPiece = function(piece) {
        selected_piece = piece;
    };
}


