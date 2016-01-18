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


