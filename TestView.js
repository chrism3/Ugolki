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
        //need to get the other squares & rename them
        square_27 = document.getElementById("test_square_27"),
        square_28 = document.getElementById("test_square_28"),
        
        //varibales to hold the white circle elements from the html
        white_circle_1 = document.getElementById("white_circle_1"),
        white_circle_2 = document.getElementById("white_circle_2"),
        white_circle_3 = document.getElementById("white_circle_3"),
        white_circle_4 = document.getElementById("white_circle_4"),
        white_circle_5 = document.getElementById("white_circle_5"),
        white_circle_6 = document.getElementById("white_circle_6"),
        white_circle_7 = document.getElementById("white_circle_7"),
        white_circle_8 = document.getElementById("white_circle_8"),
        white_circle_9 = document.getElementById("white_circle_9"),
        white_circle_10 = document.getElementById("white_circle_10"),
        white_circle_11 = document.getElementById("white_circle_11"),
        white_circle_12 = document.getElementById("white_circle_12"),
        white_circle_13 = document.getElementById("white_circle_13"),
        white_circle_14 = document.getElementById("white_circle_14"),
        white_circle_15 = document.getElementById("white_circle_15"),
        white_circle_16 = document.getElementById("white_circle_16"),        
        
        //variables to hold the brown circle elements from the html
        brown_circle_1 = document.getElementById("brown_circle_1"),
        brown_circle_2 = document.getElementById("brown_circle_2"),
        brown_circle_3 = document.getElementById("brown_circle_3"),
        brown_circle_4 = document.getElementById("brown_circle_4"),
        brown_circle_5 = document.getElementById("brown_circle_5"),
        brown_circle_6 = document.getElementById("brown_circle_6"),
        brown_circle_7 = document.getElementById("brown_circle_7"),
        brown_circle_8 = document.getElementById("brown_circle_8"),
        brown_circle_9 = document.getElementById("brown_circle_9"),
        brown_circle_10 = document.getElementById("brown_circle_10"),
        brown_circle_11 = document.getElementById("brown_circle_11"),
        brown_circle_12 = document.getElementById("brown_circle_12"),
        brown_circle_13 = document.getElementById("brown_circle_13"),
        brown_circle_14 = document.getElementById("brown_circle_14"),
        brown_circle_15 = document.getElementById("brown_circle_15"),
        brown_circle_16 = document.getElementById("brown_circle_16"),      

        /*
         * global varibales to be used throughout the code... only used in test_view
         * try to find some way to remove these globals and have them passed between function?
         */
        screen_to_board_map = new Array(8),
        squares_array = new Array(8),
        left_offset,
        top_offset,
        scale_size;

    // keeping this separate because i don't like it
    var selected_piece,
        selected_square; // dont know where i'll use selected square
    
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
    
    this.square27ClickCallback = function (callback) {
        square_27.addEventListener("click", callback);
    };
    
    this.square28ClickCallback = function (callback) {
        square_28.addEventListener("click", callback);
    };

    // this is the listeners for all of the white circles, for the player with white pieces
    this.setWhiteCircle1ClickCallback = function (callback) {
        white_circle_1.addEventListener("click", callback);
    };
    this.setWhiteCircle2ClickCallback = function (callback) {
        white_circle_2.addEventListener("click", callback);
    };
    this.setWhiteCircle3ClickCallback = function (callback) {
        white_circle_3.addEventListener("click", callback);
    };
    this.setWhiteCircle4ClickCallback = function (callback) {
        white_circle_4.addEventListener("click", callback);
    };
    this.setWhiteCircle5ClickCallback = function (callback) {
        white_circle_5.addEventListener("click", callback);
    };
    this.setWhiteCircle6ClickCallback = function (callback) {
        white_circle_6.addEventListener("click", callback);
    };
    this.setWhiteCircle7ClickCallback = function (callback) {
        white_circle_7.addEventListener("click", callback);
    };
    this.setWhiteCircle8ClickCallback = function (callback) {
        white_circle_8.addEventListener("click", callback);
    };
    this.setWhiteCircle9ClickCallback = function (callback) {
        white_circle_9.addEventListener("click", callback);
    };
    this.setWhiteCircle10ClickCallback = function (callback) {
        white_circle_10.addEventListener("click", callback);
    };
    this.setWhiteCircle11ClickCallback = function (callback) {
        white_circle_11.addEventListener("click", callback);
    };
    this.setWhiteCircle12ClickCallback = function(callback){
        white_circle_12.addEventListener("click", callback);
    };
    this.setWhiteCircle13ClickCallback = function (callback) {
        white_circle_13.addEventListener("click", callback);
    };
    this.setWhiteCircle14ClickCallback = function (callback) {
        white_circle_14.addEventListener("click", callback);
    };
    this.setWhiteCircle15ClickCallback = function (callback) {
        white_circle_15.addEventListener("click", callback);
    };
    this.setWhiteCircle16ClickCallback = function(callback){
        white_circle_16.addEventListener("click", callback);
    };
    
    this.setBrownCircle1ClickCallBack = function (callback){
        brown_circle_1.addEventListener("click", callback);
    };
    
    this.setBrownCircle16ClickCallback = function (callback) {
        brown_circle_16.addEventListener("click", callback);
    };    
    
    this.highlightSelectedPiece = function(){
        if(selected_piece.attributes.class.value === "white_circles"){
            selected_piece.style.stroke = "rgb(210, 33, 33)";
        }
        else{
            selected_piece.style.stroke = "rgb(8, 146, 208)";
        }
    };
    
    this.updateBoardWithMoves2 = function(x_coord, y_coord){
       // console.log(x_coord + "    " + y_coord);
       if(selected_piece.attributes.class.value === "white_circles"){
           squares_array[x_coord][y_coord].style.fill = "rgb(76, 240, 25)";
       }
       else{
           squares_array[x_coord][y_coord].style.fill = "rgb(250, 131, 0)";
       }
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
    
    this.movePiece2 = function(new_x, new_y){
        // might not need to recall the resetDefaultBoardColours
          //selected_piece.style.stroke = "rgb(0,0,0)";

         
         console.log(new_x + "   " + new_y);
         
         for(var i = 0; i < screen_to_board_map.length; i++ ){
             for(var j = 0; j < screen_to_board_map.length; j++){
                 if(screen_to_board_map[i][j] !== undefined){
                     if(screen_to_board_map[i][j][0].attributes.id.value ===
                            selected_piece.attributes.id.value){
//                        if(screen_to_board_map[i][j][0].attributes.class.value ===
//                                "white_circles"){                           
//                            screen_to_board_map[i][j][0].setAttribute("cx", (new_x * ((scale_size)) + left_offset) + (0.5 * scale_size));
//                            screen_to_board_map[i][j][0].setAttribute("cy", ((scale_size) * new_y + (top_offset)) + (0.5 * scale_size));
//                        }
//                        else {
//                            screen_to_board_map[i][j][0].setAttribute("cx", ((scale_size) * new_x + (left_offset)) + (0.5 * scale_size));
//                            screen_to_board_map[i][j][0].setAttribute("cy", (new_y * ((scale_size)) + top_offset) + (0.5 * scale_size));
//                        }
                          screen_to_board_map[i][j][0].setAttribute("cx", ((scale_size) * new_x + (left_offset)) + (0.5 * scale_size));
                          screen_to_board_map[i][j][0].setAttribute("cy", (new_y * ((scale_size)) + top_offset) + (0.5 * scale_size));
                     }
                 }
             }
         }

    };
    
    
     // this is a method to scale the board to the correct size
    this.scaleBoardToScreen = function(screen_height, screen_width, squares_per_row){
        //console.log("got this far");
        //console.log("screen height: " + screen_height);       
        
        // currently hard coded, will need to change this at some point
        squares_per_row = 8;
        
        for(var i = 0; i < screen_to_board_map.length; i++){
            screen_to_board_map[i] = new Array(8);
        }
        
        // to move the square off the corner of the screen
        left_offset = 0.1* screen_width;
        top_offset = 0.15 * screen_height;
        // these if statements mean that the app may be able to rescale on rotation
        // might not be needed
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
               //console.log("brown_circle_" + (i+1) + " in location: " + brown_circle_offset + "," + count);
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset + (left_offset)) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset][count] = new Array(brown_circles[i], "black");
               count++;               
           }
           else{
               count = 0;
               brown_circle_offset--;
               //console.log("brown_circle_" + (i+1) + " in location: " + brown_circle_offset + "," + count);
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset +(left_offset)) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset][count] = new Array(brown_circles[i], "black");
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
//       for(var i = 0; i < 8; i++){
//           for(var j = 0; j < 8; j++){
//               if(screen_to_board_map[i][j] !== undefined){
//                   console.log("[" + i + "][" + j + "] = " + screen_to_board_map[i][j][0].attributes.id.value);
//               }
//               else{
//                   console.log("[" + i + "][" + j + "] = undefined");
//               }
//           }
//       }
//       
//       console.log("7, 0   " + screen_to_board_map[7][0][0].attributes.id.value);
//
//    
    };   
    
    /*
     * might be better to have each piece with a getter method
     * and find another way to get it's coordinates
     */
    // getters for the circles
    this.getWhiteCircle1 = function() {
        return white_circle_1;
    };
    this.getWhiteCircle2 = function() {
        return white_circle_2;
    };
    this.getWhiteCircle3 = function() {
        return white_circle_3;
    };
    this.getWhiteCircle4 = function() {
        return white_circle_4;
    };
    this.getWhiteCircle5 = function() {
        return white_circle_5;
    };
    this.getWhiteCircle6 = function() {
        return white_circle_6;
    };
    this.getWhiteCircle7 = function() {
        return white_circle_7;
    };
    this.getWhiteCircle8 = function() {
        return white_circle_8;
    };
    this.getWhiteCircle9 = function() {
        return white_circle_9;
    };
    this.getWhiteCircle10 = function() {
        return white_circle_10;
    };
    this.getWhiteCircle11 = function() {
        return white_circle_11;
    };
    this.getWhiteCircle12 = function (){
        return white_circle_12;
    };
    this.getWhiteCircle13 = function() {
        return white_circle_13;
    };
    this.getWhiteCircle14 = function() {
        return white_circle_14;
    };
    this.getWhiteCircle15 = function() {
        return white_circle_15;
    };
    this.getWhiteCircle16 = function () {
        return white_circle_16;
    };
    
    this.getBrownCircle1 = function() {
        //console.log(brown_circle_1);
        return brown_circle_1;
    };
    
    this.getBrownCircle16 = function(){
        return brown_circle_16;
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
   
    // this method is just a test just now, if it works it will improve efficieny
    this.getSquareCoordinates = function(id_number){
        var coordinates = new Array();
        var square_id = "test_square_" + id_number;
        for(var i = 0; i < 8; i++){
            for(var j = 0; j < 8; j++){
                if(squares_array[i][j].attributes.id.value === square_id){
                    coordinates[0] = i;
                    coordinates[1] = j;                    
                }
            }
        }
        console.log(coordinates[0] + "       " + coordinates[1]);
        return coordinates;
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

    this.resetDefaultBoardColours = function (){
        var white_squares = document.getElementsByClassName("white_square");
        var brown_squares = document.getElementsByClassName("brown_square"); 
        var all_circles = document.getElementsByTagName("circle");
        for(var i = 0; i < white_squares.length; i++){
            white_squares[i].style.fill = "rgb(255, 255, 255)";
            brown_squares[i].style.fill = "rgb(101, 67, 33)";
        }
        
        // not sure why this would be needed, might change it. 
        for(var i = 0; i < all_circles.length; i++){
            if(all_circles[i].attributes.class.value === "white_circles"){
               // console.log("this circle is white");
                all_circles[i].style.fill = "rgb(255, 235, 205);";
            }
            else{
                all_circles[i].style.fill = "rgb(205,92,92)";
            }
            all_circles[i].style.stroke = "rgb(0,0,0)";
        }
    };
}


