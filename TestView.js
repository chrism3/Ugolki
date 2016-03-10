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


        menu_img = document.getElementById("menu_img"),
        
        /*
         * global varibales to be used throughout the code... only used in test_view
         * try to find some way to remove these globals and have them passed between function?
         */
        screen_to_board_map = new Array(8),
        squares_array = new Array(8),
        //left_offset,
        current_settings_panel = "none",
        settings_pane = "none",
        top_offset,
        scale_size,
        move_successful,
        screen,
        alternate_page = "none";

    // keeping this separate because i don't like it
    var selected_piece = "none",
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
    
    this.setMenuImgClickCallback = function (callback) {
        menu_img.addEventListener("click", callback);
    };
    
//    this.setPlayerImgClickCallback = function (callback) {
//        var player_img = document.getElementById("players_img");
//    };
    this.setPlayerImgClickCallback = function (callback){
        var player_img = document.getElementById("players_img");
        player_img.addEventListener("click", callback);
    };
    this.setColoursImgClickCallback = function (callback){
        var colours_img = document.getElementById("change_colour_img");
        colours_img.addEventListener("click", callback);
    };
    this.setSoundImgClickCallback = function (callback){
        var sounds_img = document.getElementById("sound_img");
        sounds_img.addEventListener("click", callback);
    };
    this.setHelpImgClickCallback = function (callback){
        var help_img = document.getElementById("help_img");
        help_img.addEventListener("click", callback);
    };
    
    // need to put Ugolki Variations listener here
    this.setViewStatsClickCallback = function(callback){
        var ugolki_stats = document.getElementById("statistics_button");
        ugolki_stats.addEventListener("click", callback);
    };
    
    this.setNewGameClickCallback = function(callback){
        var new_game = document.getElementById("new_game");
        new_game.addEventListener("click", callback);
    };
    
    // need to put View Statistics listener here
    
//    
//    Check these and change the variable names and the ID's so that they
//    work for the new code. 
//    
//    this.setHumanPlayerClickCallback = function (callback) {
//        var player_1_settings = document.getElementById("player_1_settings");
//        player_1_settings.addEventListener("click", callback);
//    };
//    this.setAIPlayerClickCallback = function (callback) {
//        var player_2_settings = document.getElementById("player_2_settings");
//        player_2_settings.addEventListener("click", callback);
//    };

    this.setAISettingsClickCallback = function (callback) {
        var ai_settings = document.getElementById("AI_settings_button");
        ai_settings.addEventListener("click", callback);
    };
    
    this.setSimpleAIClickCalback = function (callback) {
        var simple_AI = document.getElementById("simple_AI");
        simple_AI.addEventListener("click", callback);
    };
    this.setMediumAIClickCallback = function (callback){
        var medium_AI = document.getElementById("medium_AI");
        medium_AI.addEventListener("click", callback);
    };
    this.setSignUpClickCallback = function (callback){
        var sign_up = document.getElementById("sign_up");
        sign_up.addEventListener("click", callback);
    };
    
    this.setMoveOptionsClickCallback = function (callback){
        var move_options = document.getElementById("multi_jump_options");
        move_options.addEventListener("click", callback);
    };
    
    this.setPersonalStatsClickCallback = function (callback){
        var personal_stats = document.getElementById("personal_stats_button");
        personal_stats.addEventListener("click", callback);
    };
    
    this.setHumanAIClickCallback = function (callback){
        var human_v_AI = document.getElementById("Human_v_AI");
        human_v_AI.addEventListener("click", callback);
    };
    this.setAIHumanClickCallback = function (callback){
        var AI_v_human = document.getElementById("AI_v_Human");
        AI_v_human.addEventListener("click", callback);
    };
    this.setHumanHumanClickcallback = function(callback){
        var human_v_human = document.getElementById("human_v_human");
        human_v_human.addEventListener("click", callback);
    };
    this.setAIAIClickCallback = function(callback){
        var ai_v_ai = document.getElementById("AI_v_AI");
        ai_v_ai.addEventListener("click", callback);
    };
    
    // this is the callback for the actual sign up button in the sign in page
    this.setSignUpButtonClickCallback = function (callback){
        var sign_up_button = document.getElementById("sign_up_button");
        sign_up_button.addEventListener("click", callback);
    };
    this.setLoginButtonClickCallback = function (callback){
        var login_button = document.getElementById("login_button");
        login_button.addEventListener("click", callback);
    };
    
    this.setStatsBackButtonClickCallback = function(callback){
        var back = document.getElementById("stats_back_button");
        back.addEventListener("click", callback);
    };
    
    this.setHelpBackButtonClickCallback = function(callback){
        var back = document.getElementById("help_back_button");
        back.addEventListener("click", callback);
    };
    
    this.setSignUpBackButtonClickCallback = function(callback){
        var back = document.getElementById("sign_up_back_button");
        back.addEventListener("click", callback);
    };
    
    // listeners for the colour options
    this.setCreamAndBrownButtonClickCallback = function(callback){
        var cream_and_brown = document.getElementById("cream_and_brown");
        cream_and_brown.addEventListener("click", callback);
    };
    this.setRedAndBlackButtonClickCallback = function(callback) {
        var red_and_black = document.getElementById("red_and_black");
        red_and_black.addEventListener("click", callback);
    };
    this.setYellowAndPurpleButtonClickCallback = function(callback){
        var yellow_and_purple = document.getElementById("yellow_and_purple");
        yellow_and_purple.addEventListener("click", callback);
    };
    this.setWhiteAndBlueButtonClickCallback = function(callback){
        var white_and_blue = document.getElementById("white_and_blue");
        white_and_blue.addEventListener("click", callback);
    };        
    
    this.highlightSelectedPiece = function(){
        //console.log(selected_piece);
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
    
    this.movePiece2 = function(new_x, new_y){
         if(new_x >= 0 && new_y >=0){
         for(var i = 0; i < screen_to_board_map.length; i++ ){
             for(var j = 0; j < screen_to_board_map.length; j++){
                 if(screen_to_board_map[i][j] !== undefined){
                     if(screen_to_board_map[i][j][0].attributes.id.value ===
                            selected_piece.attributes.id.value){
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
         move_successful = false;
     }

    };
    
    
     // this is a method to scale the board to the correct size
    this.scaleBoardToScreen = function(screen_height, screen_width, squares_per_row){
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
                count++;
            }
            else {
                count = 0;
                white_circle_offset--;
                white_circles[i].setAttribute("cx", (count * (scale_size)) + (0.5 * scale_size));
                white_circles[i].setAttribute("cy", ((scale_size) * white_circle_offset + (top_offset)) + (0.5 * scale_size));
                //add the circle to the map
                screen_to_board_map[count][white_circle_offset] = new Array(white_circles[i], "white");
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
               brown_circles[i].setAttribute("cx", ((scale_size) * brown_circle_offset) + (0.5 * scale_size));
               brown_circles[i].setAttribute("cy", (count * ((scale_size)) + top_offset) + (0.5 * scale_size));
               screen_to_board_map[brown_circle_offset][count] = new Array(brown_circles[i], "black");
               count++;               
           }
           else{
               count = 0;
               brown_circle_offset--;
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
        return coordinates;
    };
    
    
    // not sure yet where to use this method
    this.setSelectedSquare = function(square) {
        selected_square = square;
    };
    this.setSelectedPiece = function(piece, current_player_colour) {
        //this.resetDefaultBoardColours();
      //console.log(piece);
      var colour_to_move;
       console.log(current_player_colour);
       //console.log("selected piece is: " + piece.attributes.id.value);
        if(current_player_colour === "white"){
            colour_to_move = "white_circles";
        }
        else{
            colour_to_move = "brown_circles";
        }
        console.log("colour_to_move: " + colour_to_move);

        if (selected_piece === "none" && 
                piece.attributes.class.value === colour_to_move){
            console.log("setting the current piece to: " + piece.attributes.id.value);
            selected_piece = piece;
        }
        else if(selected_piece === "none" &&
                piece.attributes.class.value !== colour_to_move){
            this.reportErrorToUser("It is " + current_player_colour + "'s turn to move", "game");
            
        }        
        else if(selected_piece === piece){
             selected_piece = "none";
        }
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

// may want to change how this works so that the user can alter the board colours
// maybe pass in values from the model
    this.resetDefaultBoardColours = function (player_1_colour, player_2_colour, 
                                    dark_square_colour, light_square_colour){
        //console.log("resetting");
        var white_squares = document.getElementsByClassName("white_square");
        var brown_squares = document.getElementsByClassName("brown_square"); 
        var all_circles = document.getElementsByTagName("circle");
        for(var i = 0; i < white_squares.length; i++){   
            white_squares[i].style.fill = light_square_colour;
            brown_squares[i].style.fill = dark_square_colour;
        }
        
        // not sure why this would be needed, might change it. 
        for(var i = 0; i < all_circles.length; i++){
            if(all_circles[i].attributes.class.value === "white_circles"){
                all_circles[i].style.fill = player_1_colour;
            }
            else{
                all_circles[i].style.fill = player_2_colour;
            }
            all_circles[i].style.stroke = "rgb(0,0,0)";
        }
        // this shouldn't be done here... will move this later. 
        selected_piece = "none";
    };
    
    this.getWhiteCircleCoordinates = function(circle_id){
        var white_circles = document.getElementsByClassName("white_circles");
        var circle;
        for(var i = 0; i < white_circles.length; i++){
            if(white_circles[i].attributes.id.value === circle_id){
                circle = white_circles[i];
            }
        }
        return circle;
    };
    
    this.getBrownCircleCoordinates = function(circle_id) {
        //var circle_id = "brown_circle_" + id_number;
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
    this.reportErrorToUser = function(message_to_display, screen_condition) {
        if(screen_condition === "game"){
            var text_area = document.getElementById("inform_user");
            var text_area_div = document.getElementById("info_div");
            text_area.value = message_to_display;
            // reset opacity so that it is visible on callings after the first
            text_area_div.style.opacity = 0.9;
            text_area_div.style.display = "block";
            this.fadeInfoBox(text_area_div);
        }
        else if(screen_condition === "login"){
            var text_area = document.getElementById("login_error_textarea");
            var text_area_div = document.getElementById("login_error");
            text_area.value = message_to_display;
            // reset opacity so that it is visible on callings after the first
            text_area_div.style.opacity = 0.9;
            text_area_div.style.display = "block";
            this.fadeInfoBox(text_area_div);
        }
        
    };
    
    this.fadeInfoBox = function(text_area_div){
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
    };
    
    /*
     * this method could be used to remove the text area if the user perfoms
     * a correct function afterwards. May fix the problem of the textbox getting 
     * a bit confused, but it would have to be added in on every button click... maybe inefficient
     */
    this.removeInfoBox = function() {
        document.getElementById("info_div").style.display = "none";
    };
    
    this.highlightMovedAIPiece = function(){
        // this is the default colour i need to use
        selected_piece.style.stroke = "rgb(8, 146, 208)";
        if(selected_piece.attributes.class.value === "brown_circles"){
            var interval_count = 0;
            var highlight_moved_piece = setInterval(function () {
                interval_count++;
                if(selected_piece.style.stroke === "rgb(8, 146, 208)"){
                    selected_piece.style.stroke = "rgb(0,0,0)";
                }
                else{
                   selected_piece.style.stroke = "rgb(8, 146, 208)"; 
                }
                if(interval_count >= 11){
                    clearInterval(highlight_moved_piece);
                }
            }, 250);
        };
    };
    
    this.highlightAIMove = function(move_square_x, move_square_y){
        selected_piece.style.stroke = "rgb(8, 146, 208)";

    };
    
    
     this.toggleSettings = function(settings_screen){
        var new_panel;
        // incase the user has opened a pane before moving menu
        if(settings_pane !== "none"){
            settings_pane.style.display = "none";
        }
        if(settings_screen === "general"){
            new_panel = document.getElementById("general_settings");
        }
        else if(settings_screen === "player"){
            new_panel = document.getElementById("player_settings");
        }
        else if(settings_screen === "colour"){
            new_panel = document.getElementById("colour_settings");
        }
        else if(settings_screen === "sound"){
            new_panel = document.getElementById("sound_settings");
        }
        if(current_settings_panel !== "none" && current_settings_panel !== new_panel){
            current_settings_panel.style.display = "none";
            this.setCurrentSettingsPanel(new_panel);
            new_panel.style.display = "block";
        }
        else if(current_settings_panel === "none"){
            this.setCurrentSettingsPanel(new_panel);
            new_panel.style.display = "block";
        }
        else if(current_settings_panel === new_panel){
            this.setCurrentSettingsPanel("none");
            new_panel.style.display = "none";
        }
     };
     
     /*
      * method to handle toggling the panes inside the open settings menu. For example, 
      * if in general settings, this is the method responisble for opening the Move Options
      * panel
      */
     this.togglePane = function(pane_to_show){
         // this will have a lot of else if statements, wont be pretty
         var pane;
         if(pane_to_show === "move options"){
             pane = document.getElementById("move_options_panel");
         }
         else if(pane_to_show === "AI settings"){
             pane = document.getElementById("AI_settings");
         }
         else if(pane_to_show === "stats"){
             pane = document.getElementById("statistics_options");
         }
         current_settings_panel.style.display = "none";
         settings_pane = pane;
         settings_pane.style.display = "block";
     };
     
     this.closeSettings = function(){
         //console.log("closing the settings menus");
         var panel = this.getCurrentSettingsPanel();
         var pane = this.getSettingsPane();
         //console.log(panel);
         if(panel !== "none"){
            panel.style.display = "none";
            this.setCurrentSettingsPanel("none");
         }
         if(pane !== "none"){     
            pane.style.display = "none";
            this.setSettingsPane("none");
         }
     };
    // this method shows the user the help page
    this.showHelp = function(){
        var help_page = document.getElementById("help_div");
        var game_board = document.getElementById("test_board");
        game_board.style.display = "none";
        help_page.style.display = "block";
        // set the alternatepage so returning from it is easier
        this.setAlternatePage(help_page);
    };
    // this method hides the game board and displays the stats screen
    this.displayPersonalStats = function(){
        var personal_stats_page = document.getElementById("personal_stats_page");
        var game_board = document.getElementById("test_board");
        game_board.style.display = "none";
        personal_stats_page.style.display = "block";
        //alternate_page = personal_stats_page;
        this.setAlternatePage(personal_stats_page);
    };
    this.setStatsTextAreas = function(player_stats){
        var name = document.getElementById("player_name_stats");
        var games = document.getElementById("games_played");
        var wins = document.getElementById("no_of_wins");
        var losses = document.getElementById("no_of_losses");
        var percent = document.getElementById("percent_value");
        var win_percent; 
        //console.log("no of wins: " + player_stats[2]);
        if(player_stats[2] == 0){
            win_percent = 0;
        }
        else{
            win_percent = (player_stats[2]/player_stats[1]) * 100;
        }
        
        name.value = player_stats[0];
        games.value = player_stats[1];
        wins.value = player_stats[2];
        losses.value = player_stats[3];       
        percent.value = win_percent + "%";
    };

    this.displaySignUpPage = function(){
        // all this method needs to do is hide the game board and display the sign up page
        var game_board = document.getElementById("test_board");
        var sign_up_page = document.getElementById("sign_up_page");
        game_board.style.display = "none";
        sign_up_page.style.display = "block";  
        //alternate_page = sign_up_page;
        this.setAlternatePage(sign_up_page);
    };
    // this method is used to retrun to the board page if the user has navigated to the login page
    this.returnToBoard = function(from_page){
        //console.log("LOOK AT THIS: " + from_page);
        var game_board = document.getElementById("test_board");
        //var sign_up_page = document.getElementById("sign_up_page");
        game_board.style.display = "block";
        //sign_up_page.style.display = "none";
        var page = this.getAlternatePage();
        page.style.display = "none";
        this.closeSettings();
//        this.setCurrentSettingsPanel("none");
        // set player_name textarea to the player who logged in
        var login_name = document.getElementById("login_username").value;
        var sign_up_name = document.getElementById("sign_up_username").value;
        var player_name = document.getElementById("player_1_type");
//        console.log(login_name + " is the current logged in name");
//        console.log(sign_up_name + " is the current signed in name");
        if(from_page === "sign_up"){
            //console.log("doing this");
            if(login_name !== ""){
                //console.log("settings player name to login name");
                player_name.value = login_name;
            }
            else if(sign_up_name !== ""){
                //console.log("settings player name to signup name");
                player_name.value = sign_up_name;
            }
            else{
                player_name.value = "Human";
            }
        }
    };
    
    this.resetLoginFeilds = function(){
        document.getElementById("login_username").value = "";
        document.getElementById("login_password").value = "";
    };
    
    this.resetSignUpFields = function(){
        document.getElementById("sign_up_username").value = "";
        document.getElementById("sign_up_password").value = "";
        document.getElementById("confirm_password").value = "";
    };
    
    this.setCurrentSettingsPanel = function(viewable_panel){
        //console.log("settings the panel to: " + viewable_panel);
        current_settings_panel = viewable_panel;
    };
    
    this.getCurrentSettingsPanel = function(){
        return current_settings_panel;
    };
    
    this.setSettingsPane = function(viewable_pane){
        settings_pane = viewable_pane;
    };
    
    this.getSettingsPane = function(){
        return settings_pane;
    };
    
    this.setAlternatePage = function(page){
        alternate_page = page;
    };
    
    this.getAlternatePage = function(){
        return alternate_page;
    };
    
    
    // this method is used to get the sign up details, when the user signs up to the app
    this.getSignUpDetails = function(){
        var username = document.getElementById("sign_up_username").value;
        var password = document.getElementById("sign_up_password").value;
        var confirm_password = document.getElementById("confirm_password").value;        
        var sign_up_details = [username, password, confirm_password];
        //method returns sign up details so they can be validated and ultimately used to sign up
        return sign_up_details;
    };
    
    // this method is used to get the login details when the user logs in to the app
    this.getLoginDetails = function(){
        //console.log("doing this");
        var username = document.getElementById("login_username").value;
        var password = document.getElementById("login_password").value;
        //console.log("username: " + username);
        var login_details = [username, password];
        //console.log(login_details[0]);
        return login_details;
    };
    
    // gets the name of the player who has been logged in
    this.getLoggedInPlayerName = function(){
        return document.getElementById("player_1_type").value;
    };
    
    // puts the blank screen over the top of the screen so that the user can't move the game pieces
    this.endGame = function(){
        document.getElementById("game_over").style.display = "block";
    };
    this.alterEndGame = function(){
        document.getElementById("game_over").style.left = "40%";
        document.getElementById("game_over").style.width = "60%";
    };
    // unimplemented... will be used to start a new game
    this.newGame = function(){
        document.getElementById("game_over").style.display = "none";
        document.getElementById("game_over").style.left = "0";
        document.getElementById("game_over").style.width = "100%";
    };
    
    // method to get the name displayed as player 1
    this.getPlayerOne = function(){
        return document.getElementById("player_1_type").value;
    };
    this.getPlayerTwo = function(){
        return document.getElementById("player_2_type").value;
    };
    this.setPlayerOne = function(player_1_type){
        document.getElementById("player_1_type").value = player_1_type;
    };
    this.setPlayerTwo = function(player_2_type){
        document.getElementById("player_2_type").value = player_2_type;
    };
    this.setInfoBoxThree = function(type){
        document.getElementById("player_3_type").value = type;
    };
    
    
    // method to set which screen should be displayed
    this.setScreenToDisplay = function(screen_to_display){
        screen = screen_to_display;
    };
    
    // method to get the current screen that is to be displayed
    this.getScreenToDisplay = function(){
        return screen;
    };
}


