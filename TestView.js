/*jslint node: true, browser: true */

"use strict";

function testView(){
    // move the squares and circles into the event listeners, to remove global variables
    var square_1 = document.getElementById("test_square_1"),
        square_2 = document.getElementById("test_square_2"),
        square_3 = document.getElementById("test_square_3"),
        square_4 = document.getElementById("test_square_4"),
        square_5 = document.getElementById("test_square_5"),
        square_6 = document.getElementById("test_square_6"),
        square_7 = document.getElementById("test_square_7"),
        square_8 = document.getElementById("test_square_8"),
        square_9 = document.getElementById("test_square_9"),
        square_10 = document.getElementById("test_square_10"),
        square_11 = document.getElementById("test_square_11"),
        square_12 = document.getElementById("test_square_12"),
        square_13 = document.getElementById("test_square_13"),
        square_14 = document.getElementById("test_square_14"),
        square_15 = document.getElementById("test_square_15"),
        square_16 = document.getElementById("test_square_16"),
        square_17 = document.getElementById("test_square_17"),
        square_18 = document.getElementById("test_square_18"),
        square_19 = document.getElementById("test_square_19"),
        square_20 = document.getElementById("test_square_20"),
        square_21 = document.getElementById("test_square_21"),
        square_22 = document.getElementById("test_square_22"),
        square_23 = document.getElementById("test_square_23"),
        square_24 = document.getElementById("test_square_24"),
        square_25 = document.getElementById("test_square_25"),
        square_26 = document.getElementById("test_square_26"),
        square_27 = document.getElementById("test_square_27"),
        square_28 = document.getElementById("test_square_28"),
        square_29 = document.getElementById("test_square_29"),
        square_30 = document.getElementById("test_square_30"),
        square_31 = document.getElementById("test_square_31"),
        square_32 = document.getElementById("test_square_32"),
        square_33 = document.getElementById("test_square_33"),
        square_34 = document.getElementById("test_square_34"),
        square_35 = document.getElementById("test_square_35"),
        square_36 = document.getElementById("test_square_36"),
        square_37 = document.getElementById("test_square_37"),
        square_38 = document.getElementById("test_square_38"),
        square_39 = document.getElementById("test_square_39"),
        square_40 = document.getElementById("test_square_40"),
        square_41 = document.getElementById("test_square_41"),
        square_42 = document.getElementById("test_square_42"),
        square_43 = document.getElementById("test_square_43"),
        square_44 = document.getElementById("test_square_44"),
        square_45 = document.getElementById("test_square_45"),
        square_46 = document.getElementById("test_square_46"),
        square_47 = document.getElementById("test_square_47"),
        square_48 = document.getElementById("test_square_48"),
        square_49 = document.getElementById("test_square_49"),
        square_50 = document.getElementById("test_square_50"),
        square_51 = document.getElementById("test_square_51"),
        square_52 = document.getElementById("test_square_52"),
        square_53 = document.getElementById("test_square_53"),
        square_54 = document.getElementById("test_square_54"),
        square_55 = document.getElementById("test_square_55"),
        square_56 = document.getElementById("test_square_56"),
        square_57 = document.getElementById("test_square_57"),
        square_58 = document.getElementById("test_square_58"),
        square_59 = document.getElementById("test_square_59"),
        square_60 = document.getElementById("test_square_60"),
        square_61 = document.getElementById("test_square_61"),
        square_62 = document.getElementById("test_square_62"),
        square_63 = document.getElementById("test_square_63"),
        square_64 = document.getElementById("test_square_64"),
        //need to get the other squares & rename them

        
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
        //left_offset,
        top_offset,
        scale_size,
        move_successful;

    // keeping this separate because i don't like it
    var selected_piece,
        selected_square; // dont know where i'll use selected square
    
    // event listeners being added to the squares
    this.square1ClickCallback = function (callback) {
        square_1.addEventListener("click", callback);
    };
    this.square2ClickCallback = function (callback) {
        square_2.addEventListener("click", callback);
    };
    this.square3ClickCallback = function (callback) {
        square_3.addEventListener("click", callback);
    };
    this.square4ClickCallback = function (callback) {
        square_4.addEventListener("click", callback);
    };
    this.square5ClickCallback = function (callback) {
        square_5.addEventListener("click", callback);
    };
    this.square6ClickCallback = function (callback) {
        square_6.addEventListener("click", callback);
    };
    this.square7ClickCallback = function (callback) {
        square_7.addEventListener("click", callback);
    };
    this.square8ClickCallback = function (callback) {
        square_8.addEventListener("click", callback);
    };
    this.square9ClickCallback = function (callback) {
        square_9.addEventListener("click", callback);
    };
    this.square10ClickCallback = function (callback) {
        square_10.addEventListener("click", callback);
    };
    this.square11ClickCallback = function (callback) {
        square_11.addEventListener("click", callback);
    };
    this.square12ClickCallback = function (callback) {
        square_12.addEventListener("click", callback);
    };
    this.square13ClickCallback = function (callback) {
        square_13.addEventListener("click", callback);
    };
    this.square14ClickCallback = function (callback) {
        square_14.addEventListener("click", callback);
    };
    this.square15ClickCallback = function (callback) {
        square_15.addEventListener("click", callback);
    };
    this.square16ClickCallback = function (callback) {
        square_16.addEventListener("click", callback);
    };
    this.square17ClickCallback = function (callback) {
        square_17.addEventListener("click", callback);
    };
    this.square18ClickCallback = function (callback) {
        square_18.addEventListener("click", callback);
    };
    this.square19ClickCallback = function (callback) {
        square_19.addEventListener("click", callback);
    };
    this.square20ClickCallback = function (callback) {
        square_20.addEventListener("click", callback);
    };
    this.square21ClickCallback = function (callback) {
        square_21.addEventListener("click", callback);
    };
    this.square22ClickCallback = function (callback) {
        square_22.addEventListener("click", callback);
    };
    this.square23ClickCallback = function (callback) {
        square_23.addEventListener("click", callback);
    };
    this.square24ClickCallback = function (callback) {
        square_24.addEventListener("click", callback);
    };
    this.square25ClickCallback = function (callback) {
        square_25.addEventListener("click", callback);
    };
    this.square26ClickCallback = function (callback) {
        square_26.addEventListener("click", callback);
    };
    this.square27ClickCallback = function (callback) {
        square_27.addEventListener("click", callback);
    };    
    this.square28ClickCallback = function (callback) {
        square_28.addEventListener("click", callback);
    };
    this.square29ClickCallback = function (callback) {
        square_29.addEventListener("click", callback);
    };
    this.square30ClickCallback = function (callback) {
        square_30.addEventListener("click", callback);
    };
    this.square31ClickCallback = function (callback) {
        square_31.addEventListener("click", callback);
    };
    this.square32ClickCallback = function (callback) {
        square_32.addEventListener("click", callback);
    };
    this.square33ClickCallback = function (callback) {
        square_33.addEventListener("click", callback);
    };
    this.square34ClickCallback = function (callback) {
        square_34.addEventListener("click", callback);
    };
    this.square35ClickCallback = function (callback) {
        square_35.addEventListener("click", callback);
    };
    this.square36ClickCallback = function (callback) {
        square_36.addEventListener("click", callback);
    };
    this.square37ClickCallback = function (callback) {
        square_37.addEventListener("click", callback);
    };
    this.square38ClickCallback = function (callback) {
        square_38.addEventListener("click", callback);
    };
    this.square39ClickCallback = function (callback) {
        square_39.addEventListener("click", callback);
    };
    this.square40ClickCallback = function (callback) {
        square_40.addEventListener("click", callback);
    };
    this.square41ClickCallback = function (callback) {
        square_41.addEventListener("click", callback);
    };
    this.square42ClickCallback = function (callback) {
        square_42.addEventListener("click", callback);
    };
    this.square43ClickCallback = function (callback) {
        square_43.addEventListener("click", callback);
    };
    this.square44ClickCallback = function (callback) {
        square_44.addEventListener("click", callback);
    };
    this.square45ClickCallback = function (callback) {
        square_45.addEventListener("click", callback);
    };
    this.square46ClickCallback = function (callback) {
        square_46.addEventListener("click", callback);
    };
    this.square47ClickCallback = function (callback) {
        square_47.addEventListener("click", callback);
    };
    this.square48ClickCallback = function (callback) {
        square_48.addEventListener("click", callback);
    };
    this.square49ClickCallback = function (callback) {
        square_49.addEventListener("click", callback);
    };
    this.square50ClickCallback = function (callback) {
        square_50.addEventListener("click", callback);
    };
    this.square51ClickCallback = function (callback) {
        square_51.addEventListener("click", callback);
    };
    this.square52ClickCallback = function (callback) {
        square_52.addEventListener("click", callback);
    };
    this.square53ClickCallback = function (callback) {
        square_53.addEventListener("click", callback);
    };
    this.square54ClickCallback = function (callback) {
        square_54.addEventListener("click", callback);
    };
    this.square55ClickCallback = function (callback) {
        square_55.addEventListener("click", callback);
    };
    this.square56ClickCallback = function (callback) {
        square_56.addEventListener("click", callback);
    };
    this.square57ClickCallback = function (callback) {
        square_57.addEventListener("click", callback);
    };
    this.square58ClickCallback = function (callback) {
        square_58.addEventListener("click", callback);
    };
    this.square59ClickCallback = function (callback) {
        square_59.addEventListener("click", callback);
    };
    this.square60ClickCallback = function (callback) {
        square_60.addEventListener("click", callback);
    };
    this.square61ClickCallback = function (callback) {
        square_61.addEventListener("click", callback);
    };
    this.square62ClickCallback = function (callback) {
        square_62.addEventListener("click", callback);
    };
    this.square63ClickCallback = function (callback) {
        square_63.addEventListener("click", callback);
    };
    this.square64ClickCallback = function (callback) {
        square_64.addEventListener("click", callback);
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
    this.setBrownCircle2ClickCallBack = function (callback){
        brown_circle_2.addEventListener("click", callback);
    };
    this.setBrownCircle3ClickCallBack = function (callback){
        brown_circle_3.addEventListener("click", callback);
    };
    this.setBrownCircle4ClickCallBack = function (callback){
        brown_circle_4.addEventListener("click", callback);
    };
    this.setBrownCircle5ClickCallBack = function (callback){
        brown_circle_5.addEventListener("click", callback);
    };
    this.setBrownCircle6ClickCallBack = function (callback){
        brown_circle_6.addEventListener("click", callback);
    };
    this.setBrownCircle7ClickCallBack = function (callback){
        brown_circle_7.addEventListener("click", callback);
    };
    this.setBrownCircle8ClickCallBack = function (callback){
        brown_circle_8.addEventListener("click", callback);
    };
    this.setBrownCircle9ClickCallBack = function (callback){
        brown_circle_9.addEventListener("click", callback);
    };
    this.setBrownCircle10ClickCallBack = function (callback){
        brown_circle_10.addEventListener("click", callback);
    };
    this.setBrownCircle11ClickCallBack = function (callback){
        brown_circle_11.addEventListener("click", callback);
    };
    this.setBrownCircle12ClickCallBack = function (callback){
        brown_circle_12.addEventListener("click", callback);
    };
    this.setBrownCircle13ClickCallBack = function (callback){
        brown_circle_13.addEventListener("click", callback);
    };
    this.setBrownCircle14ClickCallBack = function (callback){
        brown_circle_14.addEventListener("click", callback);
    };
    this.setBrownCircle15ClickCallBack = function (callback){
        brown_circle_15.addEventListener("click", callback);
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

         
         console.log("New x and y coords (view movePiece2): " + new_x + "   " + new_y);
         if(new_x >= 0 && new_y >=0){
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
                          
                          // reposition the players choosen piece
                          screen_to_board_map[i][j][0].setAttribute("cx", ((scale_size) * new_x) + (0.5 * scale_size));
                          screen_to_board_map[i][j][0].setAttribute("cy", (new_y * ((scale_size)) + top_offset) + (0.5 * scale_size));
                          // get the necesssary info that had to be moved
                          var piece_to_move = screen_to_board_map[i][j][0];
                          var piece_colour = screen_to_board_map[i][j][1];
                          //set the old index to be undefined
                          screen_to_board_map[i][j] = undefined;
                          // set the new index to contain the moved piece
                          screen_to_board_map[new_x][new_y] = new Array(piece_to_move, piece_colour);
                          move_successful = true;
                     }
                 }
             }
         }
     }
     else{
         //console.log("movePiece2 (view): don't move the piece");
         move_successful = false;
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
        //left_offset = 0.1* screen_width;
        top_offset = 0.1 * screen_height;
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
                white_circles[i].setAttribute("cx", (count * (scale_size)) + (0.5 * scale_size));
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
                white_circles[i].setAttribute("cx", (count * (scale_size)) + (0.5 * scale_size));
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
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset][count] = new Array(brown_circles[i], "black");
               count++;               
           }
           else{
               count = 0;
               brown_circle_offset--;
               //console.log("brown_circle_" + (i+1) + " in location: " + brown_circle_offset + "," + count);
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset) + (0.5 * scale_size));
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
                all_squares[i].style.x = (col_count * scale_size);
                all_squares[i].style.y = (row_count) * scale_size + top_offset;
                squares_array[col_count][row_count] = all_squares[i];
                col_count ++;
                //console.log(col_count * scale_size + " , " + (row_count) * scale_size);
            }
            else {
                col_count = 0;
                row_count++;
                all_squares[i].style.x = (col_count * scale_size);
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
        return brown_circle_1;
    };
    this.getBrownCircle2 = function() {
        return brown_circle_2;
    };
    this.getBrownCircle3 = function() {
        return brown_circle_3;
    };
    this.getBrownCircle4 = function() {
        return brown_circle_4;
    };
    this.getBrownCircle5 = function() {
        return brown_circle_5;
    };
    this.getBrownCircle6 = function() {
        return brown_circle_6;
    };
    this.getBrownCircle7 = function() {
        return brown_circle_7;
    };
    this.getBrownCircle8 = function() {
        return brown_circle_8;
    };
    this.getBrownCircle9 = function() {
        return brown_circle_9;
    };
    this.getBrownCircle10 = function() {
        return brown_circle_10;
    };
    this.getBrownCircle11 = function() {
        return brown_circle_11;
    };
    this.getBrownCircle12 = function() {
        return brown_circle_12;
    };
    this.getBrownCircle13 = function() {
        return brown_circle_13;
    };
    this.getBrownCircle14 = function() {
        return brown_circle_14;
    };
    this.getBrownCircle15 = function() {
        return brown_circle_15;
    };
    this.getBrownCircle16 = function(){
        return brown_circle_16;
    };
    
//    //getters for the board squares
//    this.getSquareOne = function(){
//        return square_one;
//    };
//    this.getSquareTwo = function(){
//        return square_two;
//    };
//    this.getSquareThree = function() {
//        return square_three;
//    };
//    this.getSquareFour = function() {
//        return square_four;
//    };
//    this.getSquareFive = function() {
//        return square_five;
//    };
//    this.getSquareSix = function() {
//        return square_six;
//    };
//    this.getSquareSeven = function() {
//        return square_seven;
//    };
//    this.getSquareEight = function() {
//        return square_eight;
//    };
//    this.getSquareNine = function() {
//        return square_nine;
//    };
   
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
        //console.log(coordinates[0] + "       " + coordinates[1]);
        return coordinates;
    };
    
    
    // not sure yet where to use this method
    this.setSelectedSquare = function(square) {
        selected_square = square;
    };
    this.setSelectedPiece = function(piece) {
        //console.log(piece);
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
    
    this.getWhiteCircleCoordinates = function(id_number){
        var circle_id = "white_circle_" + id_number;
        var white_circles = document.getElementsByClassName("white_circles");
        var circle;
        for(var i = 0; i < white_circles.length; i++){
            if(white_circles[i].attributes.id.value === circle_id){
                circle = white_circles[i];
            }
        }
        return circle;
    };
    
    this.getBrownCircleCoordinates = function(id_number) {
        var circle_id = "brown_circle_" + id_number;
        var brown_circles = document.getElementsByClassName("brown_circles");
        var circle;
        for(var i = 0; i < brown_circles.length; i++){
            if(brown_circles[i].attributes.id.value === circle_id){
                circle = brown_circles[i];
            }
        }
        return circle;
    };
    
    // this method is needed to reset the model fields and change which players turn it is
    this.wasMoveSuccessful = function(){
        return move_successful;
    };
    
    
    
    // put this down here because it's not necessary functionality
    this.reportErrorToUser = function(message_to_display) {
        var text_area = document.getElementById("inform_user");
        var text_area_div = document.getElementById("info_div");
        text_area.value = message_to_display;
        // reset opacity so that it is visible on callings after the first
        text_area_div.style.opacity = 0.9;
        text_area_div.style.display = "block";
    };
    
    this.fadeInfoBox = function(){
        var text_area_div = document.getElementById("info_div");
        var opacity = window.getComputedStyle(text_area_div).getPropertyValue("opacity");
        
        var interval_count = 0;
        var fade_out = setInterval(function () {
            interval_count++;
            opacity -= 0.01;
            if(opacity > 0){
                text_area_div.style.opacity = opacity;
            }
            else{
                text_area_div.style.display = "none";
            }
            if(interval_count >= 100){
                clearInterval(fade_out);
            }
        }, 50);
        
//        opacity -= 0.01;
//        if(opacity > 0){
//            text_area_div.style.opacity = opacity;
//        }
//        else{
//            text_area_div.style.display = "none";
//        }
//         console.log("doing this");
    };
    
    /*
     * this method could be used to remove the text area if the user perfoms
     * a correct function afterwards. May fix the problem of the textbox getting 
     * a bit confused.
     */
    this.removeInfoBox = function() {
        document.getElementById("info_div").style.display = "none";
    };
    
}


