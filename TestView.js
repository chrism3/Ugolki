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
        white_circle = document.getElementById("white_circle_1"),
        circle_two = document.getElementById("test_circle_2"),
        white_circle_12 = document.getElementById("white_circle_12"),
        white_circle_16 = document.getElementById("white_circle_16"),
        

        screen_to_board_map = new Array(8),
        squares_array = new Array(8);

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

    
    this.setWhiteCircleOneClickCallback = function (callback) {
        white_circle.addEventListener("click", callback);
    };
    // add in the other white circles here
    this.setWhiteCircle12ClickCallback = function(callback){
        white_circle_12.addEventListener("click", callback);
    };
    this.setWhiteCircle16ClickCallback = function(callback){
        white_circle_16.addEventListener("click", callback);
    };
    
    this.setCircleTwoClickCallBack = function (callback){
        circle_two.addEventListener("click", callback);
    };
    
    
    this.highlightSelectedPiece = function(){
        selected_piece.style.stroke = "rgb(210, 33, 33)";
    };
    
    this.updateBoardWithMoves2 = function(x_coord, y_coord){
        console.log(x_coord + "    " + y_coord);
        squares_array[x_coord][y_coord].style.fill = "rgb(76, 240, 25)";
        

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
        squares_per_row = 8;
        
        for(var i = 0; i < screen_to_board_map.length; i++){
            screen_to_board_map[i] = new Array(8);
        }
        
        // to move the square off the corner of the screen
        var left_offset = 0.1* screen_width;
        var top_offset = 0.15 * screen_height;
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
       var count = 0;
       /* 
        *  the white circles need an offset to place them at the bottom 
        *  left hand corner of the screen
        */
       
       
       /*
        * 
        * delete this christopher
        */
      
       var white_circle_offset = 7; // this number relates to the number of rows, will need to amend later
       for(var i = 0; i < white_circles.length; i++){
           white_circles[i].setAttribute("r", 0.4 * (scale_size));
        // this shouldn't use a hard coded value, should use number of pieces   
            if (count < 4) {
                white_circles[i].setAttribute("cx", (count * ((scale_size)) + left_offset) + (0.5 * scale_size));
                white_circles[i].setAttribute("cy", ((scale_size) * white_circle_offset + (top_offset)) + (0.5 * scale_size));
                
                // add the value to the map
                screen_to_board_map[count][white_circle_offset] = new Array(white_circles[i], "white");
               // console.log(screen_to_board_map[count][white_circle_offset+1]);
               //console.log(count + "    " + white_circle_offset);
               //console.log(screen_to_board_map[count][white_circle_offset][0].attributes.id.value);
                count++;
            }
            else {
                count = 0;
                white_circle_offset--;
                white_circles[i].setAttribute("cx", (count * ((scale_size)) + left_offset) + (0.5 * scale_size));
                white_circles[i].setAttribute("cy", ((scale_size) * white_circle_offset + (top_offset)) + (0.5 * scale_size));
                //add the circle to the map
                screen_to_board_map[count][white_circle_offset] = new Array(white_circles[i], "white");
                //console.log(count + "    " + white_circle_offset);
                //console.log(screen_to_board_map[count][white_circle_offset][0].attributes.id.value);
                count++;
            }            
       }
       
       // reset the value of count to be used again for the brown circles
       count = 0;
       /*
        * brown circles need an offset to place them at the top right
        * hand corner of the board
        */
       var brown_circle_offset = 7;  // this number relates to the number of collumns, hopefully change
                                     // this from being hardcoded
       // this for loop sets the size of all the brown circles on the baord
       for(var i = 0; i < brown_circles.length; i++){
           brown_circles[i].setAttribute ("r", 0.4 * (scale_size));
           
           if(count < 4){ // value 1 needs to be changed to 0.5 * no_of_cols
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset + (left_offset)) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset][count] = new Array(brown_circles[i], "black");
               count++;
           }
           else{
               count = 0;
               brown_circle_offset--;
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset +(left_offset)) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset+1][count] = new Array(brown_circles[i], "black");
               count++;
           }
           
       }
       
       // initialise the array that holds the squares, will be needed when moving pieces
       for(var i = 0; i < squares_array.length; i++){
           squares_array[i] = new Array(8);
       }
       
       // for loops positions the sqaures on the board
       var col_count = 0;
       var row_count = 0;
       for(var i = 0; i < all_squares.length; i++){
            if(col_count < squares_per_row){
                all_squares[i].style.x = (col_count * scale_size) + left_offset;
                all_squares[i].style.y = (row_count) * scale_size + top_offset;
                squares_array[col_count][row_count] = all_squares[i];
                col_count ++;
                //console.log(col_count * scale_size + " , " + (row_count) * scale_size);
            }
            else {
                col_count = 0;
                row_count++;
                all_squares[i].style.x = (col_count * scale_size) + left_offset;
                all_squares[i].style.y = (row_count) * scale_size + top_offset;
                squares_array[col_count][row_count] = all_squares[i];
                col_count++;
            }
       }  
       for(var i = 0; i < 8; i++){
           for(var j = 0; j < 8; j++){
               if(squares_array[i][j] !== undefined){
                   console.log("[" + i + "][" + j + "] = " + squares_array[i][j].attributes.id.value);
               }
               else{
                   console.log("[" + i + "][" + j + "] = undefined");
               }
           }
       }
    };
    
    
    /*
     * Try to think of better way to do these functions
     */
    this.getCircleOneXCoord = function(){
        return white_circle.attributes.cx.value;
    };
    this.getCircleOneYCoord = function() {
        return white_circle.attributes.cy.value;
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
        return white_circle;
    };
    this.getWhiteCircle12 = function (){
        return white_circle_12;
    };
    this.getWhiteCircle16 = function () {
        return white_circle_16;
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
    
    this.getSelectedPiece = function(){
        return selected_piece;
    };
    
    this.getSelectedPieceX = function(){
        return selected_piece.attributes.cx.value;
    };
    
    this.getScreenToBoardMap = function(){
        return screen_to_board_map;
    };
}


