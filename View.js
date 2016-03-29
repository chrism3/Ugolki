/*jslint node: true, browser: true */
"use strict";

/*
 * This is the view for the MVC. 
 * 
 * As with the controller, there are some aspects of this section of the code that
 * have broke the MVC design pattern. There is a small amount of data which is
 * stored in here that really should have been stored in the model. This is the storing 
 * of the selected piece and the current settings panel. 
 * 
 * However, for the most part, this section of the program is just a view
 * 
 */

function View(){       
        
        /*
         * global varibales to be used throughout the code... only used in the view
         */
        var screen_to_board_map = new Array(8),
        squares_array = new Array(8),
        //left_offset,
        current_settings_panel = "none",
        settings_pane = "none",
        top_offset,
        scale_size,
        move_successful,
        screen,
        alternate_page = "none",
        selected_piece = "none";
    
    /* 
     * event listeners being added to the squares, there are 64 of these functions.
     * Other than which square is being given it's event listener these functions
     * are all the same. The take a callback in as argument from the controller when
     * the event listeners are being added. 
     */
    this.square1ClickCallback = function (callback) {
        var square_1 = document.getElementById("square_1");
        square_1.addEventListener("click", callback);
    };
    this.square2ClickCallback = function (callback) {
        var square_2 = document.getElementById("square_2");
        square_2.addEventListener("click", callback);
    };
    this.square3ClickCallback = function (callback) {
        var square_3 = document.getElementById("square_3");
        square_3.addEventListener("click", callback);
    };
    this.square4ClickCallback = function (callback) {
        var square_4 = document.getElementById("square_4");
        square_4.addEventListener("click", callback);
    };
    this.square5ClickCallback = function (callback) {
        var square_5 = document.getElementById("square_5");
        square_5.addEventListener("click", callback);
    };
    this.square6ClickCallback = function (callback) {
        var square_6 = document.getElementById("square_6");
        square_6.addEventListener("click", callback);
    };
    this.square7ClickCallback = function (callback) {
        var square_7 = document.getElementById("square_7");
        square_7.addEventListener("click", callback);
    };
    this.square8ClickCallback = function (callback) {
        var square_8 = document.getElementById("square_8");
        square_8.addEventListener("click", callback);
    };
    this.square9ClickCallback = function (callback) {
        var square_9 = document.getElementById("square_9");
        square_9.addEventListener("click", callback);
    };
    this.square10ClickCallback = function (callback) {
        var square_10 = document.getElementById("square_10");
        square_10.addEventListener("click", callback);
    };
    this.square11ClickCallback = function (callback) {
        var square_11 = document.getElementById("square_11");
        square_11.addEventListener("click", callback);
    };
    this.square12ClickCallback = function (callback) {
        var square_12 = document.getElementById("square_12");
        square_12.addEventListener("click", callback);
    };
    this.square13ClickCallback = function (callback) {
        var square_13 = document.getElementById("square_13");
        square_13.addEventListener("click", callback);
    };
    this.square14ClickCallback = function (callback) {
        var square_14 = document.getElementById("square_14");
        square_14.addEventListener("click", callback);
    };
    this.square15ClickCallback = function (callback) {
        var square_15 = document.getElementById("square_15");
        square_15.addEventListener("click", callback);
    };
    this.square16ClickCallback = function (callback) {
        var square_16 = document.getElementById("square_16");
        square_16.addEventListener("click", callback);
    };
    this.square17ClickCallback = function (callback) {
        var square_17 = document.getElementById("square_17");
        square_17.addEventListener("click", callback);
    };
    this.square18ClickCallback = function (callback) {
        var square_18 = document.getElementById("square_18");
        square_18.addEventListener("click", callback);
    };
    this.square19ClickCallback = function (callback) {
        var square_19 = document.getElementById("square_19");
        square_19.addEventListener("click", callback);
    };
    this.square20ClickCallback = function (callback) {
        var square_20 = document.getElementById("square_20");
        square_20.addEventListener("click", callback);
    };
    this.square21ClickCallback = function (callback) {
        var square_21 = document.getElementById("square_21");
        square_21.addEventListener("click", callback);
    };
    this.square22ClickCallback = function (callback) {
        var square_22 = document.getElementById("square_22");
        square_22.addEventListener("click", callback);
    };
    this.square23ClickCallback = function (callback) {
        var square_23 = document.getElementById("square_23");
        square_23.addEventListener("click", callback);
    };
    this.square24ClickCallback = function (callback) {
        var square_24 = document.getElementById("square_24");
        square_24.addEventListener("click", callback);
    };
    this.square25ClickCallback = function (callback) {
        var square_25 = document.getElementById("square_25");
        square_25.addEventListener("click", callback);
    };
    this.square26ClickCallback = function (callback) {
        var square_26 = document.getElementById("square_26");
        square_26.addEventListener("click", callback);
    };
    this.square27ClickCallback = function (callback) {
        var square_27 = document.getElementById("square_27");
        square_27.addEventListener("click", callback);
    };    
    this.square28ClickCallback = function (callback) {
        var square_28 = document.getElementById("square_28");
        square_28.addEventListener("click", callback);
    };
    this.square29ClickCallback = function (callback) {
        var square_29 = document.getElementById("square_29");
        square_29.addEventListener("click", callback);
    };
    this.square30ClickCallback = function (callback) {
        var square_30 = document.getElementById("square_30");
        square_30.addEventListener("click", callback);
    };
    this.square31ClickCallback = function (callback) {
        var square_31 = document.getElementById("square_31");
        square_31.addEventListener("click", callback);
    };
    this.square32ClickCallback = function (callback) {
        var square_32 = document.getElementById("square_32");
        square_32.addEventListener("click", callback);
    };
    this.square33ClickCallback = function (callback) {
        var square_33 = document.getElementById("square_33");
        square_33.addEventListener("click", callback);
    };
    this.square34ClickCallback = function (callback) {
        var square_34 = document.getElementById("square_34");
        square_34.addEventListener("click", callback);
    };
    this.square35ClickCallback = function (callback) {
        var square_35 = document.getElementById("square_35");
        square_35.addEventListener("click", callback);
    };
    this.square36ClickCallback = function (callback) {
        var square_36 = document.getElementById("square_36");
        square_36.addEventListener("click", callback);
    };
    this.square37ClickCallback = function (callback) {
        var square_37 = document.getElementById("square_37");
        square_37.addEventListener("click", callback);
    };
    this.square38ClickCallback = function (callback) {
        var square_38 = document.getElementById("square_38");
        square_38.addEventListener("click", callback);
    };
    this.square39ClickCallback = function (callback) {
        var square_39 = document.getElementById("square_39");
        square_39.addEventListener("click", callback);
    };
    this.square40ClickCallback = function (callback) {
        var square_40 = document.getElementById("square_40");
        square_40.addEventListener("click", callback);
    };
    this.square41ClickCallback = function (callback) {
        var square_41 = document.getElementById("square_41");
        square_41.addEventListener("click", callback);
    };
    this.square42ClickCallback = function (callback) {
        var square_42 = document.getElementById("square_42");
        square_42.addEventListener("click", callback);
    };
    this.square43ClickCallback = function (callback) {
        var square_43 = document.getElementById("square_43");
        square_43.addEventListener("click", callback);
    };
    this.square44ClickCallback = function (callback) {
        var square_44 = document.getElementById("square_44");
        square_44.addEventListener("click", callback);
    };
    this.square45ClickCallback = function (callback) {
        var square_45 = document.getElementById("square_45");
        square_45.addEventListener("click", callback);
    };
    this.square46ClickCallback = function (callback) {
        var square_46 = document.getElementById("square_46");
        square_46.addEventListener("click", callback);
    };
    this.square47ClickCallback = function (callback) {
        var square_47 = document.getElementById("square_47");
        square_47.addEventListener("click", callback);
    };
    this.square48ClickCallback = function (callback) {
        var square_48 = document.getElementById("square_48");
        square_48.addEventListener("click", callback);
    };
    this.square49ClickCallback = function (callback) {
        var square_49 = document.getElementById("square_49");
        square_49.addEventListener("click", callback);
    };
    this.square50ClickCallback = function (callback) {
        var square_50 = document.getElementById("square_50");
        square_50.addEventListener("click", callback);
    };
    this.square51ClickCallback = function (callback) {
        var square_51 = document.getElementById("square_51");
        square_51.addEventListener("click", callback);
    };
    this.square52ClickCallback = function (callback) {
        var square_52 = document.getElementById("square_52");
        square_52.addEventListener("click", callback);
    };
    this.square53ClickCallback = function (callback) {
        var square_53 = document.getElementById("square_53");
        square_53.addEventListener("click", callback);
    };
    this.square54ClickCallback = function (callback) {
        var square_54 = document.getElementById("square_54");
        square_54.addEventListener("click", callback);
    };
    this.square55ClickCallback = function (callback) {
        var square_55 = document.getElementById("square_55");
        square_55.addEventListener("click", callback);
    };
    this.square56ClickCallback = function (callback) {
        var square_56 = document.getElementById("square_56");
        square_56.addEventListener("click", callback);
    };
    this.square57ClickCallback = function (callback) {
        var square_57 = document.getElementById("square_57");
        square_57.addEventListener("click", callback);
    };
    this.square58ClickCallback = function (callback) {
        var square_58 = document.getElementById("square_58");
        square_58.addEventListener("click", callback);
    };
    this.square59ClickCallback = function (callback) {
        var square_59 = document.getElementById("square_59");
        square_59.addEventListener("click", callback);
    };
    this.square60ClickCallback = function (callback) {
        var square_60 = document.getElementById("square_60");
        square_60.addEventListener("click", callback);
    };
    this.square61ClickCallback = function (callback) {
        var square_61 = document.getElementById("square_61");
        square_61.addEventListener("click", callback);
    };
    this.square62ClickCallback = function (callback) {
        var square_62 = document.getElementById("square_62");
        square_62.addEventListener("click", callback);
    };
    this.square63ClickCallback = function (callback) {
        var square_63 = document.getElementById("square_63");
        square_63.addEventListener("click", callback);
    };
    this.square64ClickCallback = function (callback) {
        var square_64 = document.getElementById("square_64");
        square_64.addEventListener("click", callback);
    };

    // this is the listeners for all of the white circles
    this.setWhiteCircle1ClickCallback = function (callback) {
        var white_circle_1 = document.getElementById("white_circle_1");
        white_circle_1.addEventListener("click", callback);
    };
    this.setWhiteCircle2ClickCallback = function (callback) {
        var white_circle_2 = document.getElementById("white_circle_2");
        white_circle_2.addEventListener("click", callback);
    };
    this.setWhiteCircle3ClickCallback = function (callback) {
        var white_circle_3 = document.getElementById("white_circle_3");
        white_circle_3.addEventListener("click", callback);
    };
    this.setWhiteCircle4ClickCallback = function (callback) {
        var white_circle_4 = document.getElementById("white_circle_4");
        white_circle_4.addEventListener("click", callback);
    };
    this.setWhiteCircle5ClickCallback = function (callback) {
        var white_circle_5 = document.getElementById("white_circle_5");
        white_circle_5.addEventListener("click", callback);
    };
    this.setWhiteCircle6ClickCallback = function (callback) {
        var white_circle_6 = document.getElementById("white_circle_6");
        white_circle_6.addEventListener("click", callback);
    };
    this.setWhiteCircle7ClickCallback = function (callback) {
        var white_circle_7 = document.getElementById("white_circle_7");
        white_circle_7.addEventListener("click", callback);
    };
    this.setWhiteCircle8ClickCallback = function (callback) {
        var white_circle_8 = document.getElementById("white_circle_8");
        white_circle_8.addEventListener("click", callback);
    };
    this.setWhiteCircle9ClickCallback = function (callback) {
        var white_circle_9 = document.getElementById("white_circle_9");
        white_circle_9.addEventListener("click", callback);
    };
    this.setWhiteCircle10ClickCallback = function (callback) {
        var white_circle_10 = document.getElementById("white_circle_10");
        white_circle_10.addEventListener("click", callback);
    };
    this.setWhiteCircle11ClickCallback = function (callback) {
        var white_circle_11 = document.getElementById("white_circle_11");
        white_circle_11.addEventListener("click", callback);
    };
    this.setWhiteCircle12ClickCallback = function(callback){
        var white_circle_12 = document.getElementById("white_circle_12");
        white_circle_12.addEventListener("click", callback);
    };
    this.setWhiteCircle13ClickCallback = function (callback) {
        var white_circle_13 = document.getElementById("white_circle_13");
        white_circle_13.addEventListener("click", callback);
    };
    this.setWhiteCircle14ClickCallback = function (callback) {
        var white_circle_14 = document.getElementById("white_circle_14");
        white_circle_14.addEventListener("click", callback);
    };
    this.setWhiteCircle15ClickCallback = function (callback) {
        var white_circle_15 = document.getElementById("white_circle_15");
        white_circle_15.addEventListener("click", callback);
    };
    this.setWhiteCircle16ClickCallback = function(callback){
        var white_circle_16 = document.getElementById("white_circle_16");
        white_circle_16.addEventListener("click", callback);
    };
    
    // the following 16 functions are the listeners for the brown circles
    this.setBrownCircle1ClickCallBack = function (callback){
        var brown_circle_1 = document.getElementById("brown_circle_1");
        brown_circle_1.addEventListener("click", callback);
    };
    this.setBrownCircle2ClickCallBack = function (callback){
        var brown_circle_2 = document.getElementById("brown_circle_2");
        brown_circle_2.addEventListener("click", callback);
    };
    this.setBrownCircle3ClickCallBack = function (callback){
        var brown_circle_3 = document.getElementById("brown_circle_3");
        brown_circle_3.addEventListener("click", callback);
    };
    this.setBrownCircle4ClickCallBack = function (callback){
        var brown_circle_4 = document.getElementById("brown_circle_4");
        brown_circle_4.addEventListener("click", callback);
    };
    this.setBrownCircle5ClickCallBack = function (callback){
        var brown_circle_5 = document.getElementById("brown_circle_5");
        brown_circle_5.addEventListener("click", callback);
    };
    this.setBrownCircle6ClickCallBack = function (callback){
        var brown_circle_6 = document.getElementById("brown_circle_6");
        brown_circle_6.addEventListener("click", callback);
    };
    this.setBrownCircle7ClickCallBack = function (callback){
        var brown_circle_7 = document.getElementById("brown_circle_7");
        brown_circle_7.addEventListener("click", callback);
    };
    this.setBrownCircle8ClickCallBack = function (callback){
        var brown_circle_8 = document.getElementById("brown_circle_8");
        brown_circle_8.addEventListener("click", callback);
    };
    this.setBrownCircle9ClickCallBack = function (callback){
        var brown_circle_9 = document.getElementById("brown_circle_9");
        brown_circle_9.addEventListener("click", callback);
    };
    this.setBrownCircle10ClickCallBack = function (callback){
        var brown_circle_10 = document.getElementById("brown_circle_10");
        brown_circle_10.addEventListener("click", callback);
    };
    this.setBrownCircle11ClickCallBack = function (callback){
        var brown_circle_11 = document.getElementById("brown_circle_11");
        brown_circle_11.addEventListener("click", callback);
    };
    this.setBrownCircle12ClickCallBack = function (callback){
        var brown_circle_12 = document.getElementById("brown_circle_12");
        brown_circle_12.addEventListener("click", callback);
    };
    this.setBrownCircle13ClickCallBack = function (callback){
        var brown_circle_13 = document.getElementById("brown_circle_13");
        brown_circle_13.addEventListener("click", callback);
    };
    this.setBrownCircle14ClickCallBack = function (callback){
        var brown_circle_14 = document.getElementById("brown_circle_14");
        brown_circle_14.addEventListener("click", callback);
    };
    this.setBrownCircle15ClickCallBack = function (callback){
        var brown_circle_15 = document.getElementById("brown_circle_15");
        brown_circle_15.addEventListener("click", callback);
    };
    this.setBrownCircle16ClickCallback = function (callback) {
        var brown_circle_16 = document.getElementById("brown_circle_16");
        brown_circle_16.addEventListener("click", callback);
    };
    
    /*
     * As with the controler, the following section of functions relate to the features of
     * the game that are not to do with the actual board. These are the lsiteners for the
     * buttons, menu's and icons.
     */
    
    // add event listener to the menu img.
    this.setMenuImgClickCallback = function (callback) {
        var menu_img = document.getElementById("menu_img");
        menu_img.addEventListener("click", callback);
    };
    
    // add event listener to the player settings image
    this.setPlayerImgClickCallback = function (callback){
        var player_img = document.getElementById("players_img");
        player_img.addEventListener("click", callback);
    };
    
    // add event listener to the colour settings image
    this.setColoursImgClickCallback = function (callback){
        var colours_img = document.getElementById("change_colour_img");
        colours_img.addEventListener("click", callback);
    };
    
    // add event listener to the help page image
    this.setHelpImgClickCallback = function (callback){
        var help_img = document.getElementById("help_img");
        help_img.addEventListener("click", callback);
    }; 
    
    // add event listener to the button that takes the user to the stats page
    this.setViewStatsClickCallback = function(callback){
        var ugolki_stats = document.getElementById("statistics_button");
        ugolki_stats.addEventListener("click", callback);
    };
    
    // add event listener to the new game button in the settings menu
    this.setNewGameClickCallback = function(callback){
        var new_game = document.getElementById("new_game");
        new_game.addEventListener("click", callback);
    };
    
    // add event listener to the AI settings button
    this.setAISettingsClickCallback = function (callback) {
        var ai_settings = document.getElementById("AI_settings_button");
        ai_settings.addEventListener("click", callback);
    };
    
    // add event listener to the simple AI button 
    this.setSimpleAIClickCalback = function (callback) {
        var simple_AI = document.getElementById("simple_AI");
        simple_AI.addEventListener("click", callback);
    };
    
    // add event listener to the medium AI button
    this.setMediumAIClickCallback = function (callback){
        var medium_AI = document.getElementById("medium_AI");
        medium_AI.addEventListener("click", callback);
    };
    
    // add event listener to the hard AI button
    this.setHardAIClickCallback = function (callback){
        var hard_AI = document.getElementById("difficult_AI");
        hard_AI.addEventListener("click", callback);
    };
    
    // add event listener to the button that takes the user to the sign up page
    this.setSignUpClickCallback = function (callback){
        var sign_up = document.getElementById("sign_up");
        sign_up.addEventListener("click", callback);
    };
    
    // add event listener to the game types button
    this.setGameTypesClickCallback = function (callback){
        var game_options = document.getElementById("variations_button");
        game_options.addEventListener("click", callback);
    };
    
    // add event listener to the standard game button 
    this.setStandardGameClickCallback = function (callback){
        var standard = document.getElementById("standard_game");
        standard.addEventListener("click", callback);
    };
    
    // add event listener to the no multi jump button
    this.setNoMutliJumpGameClickCallback = function (callback){
        var no_multi_jump = document.getElementById("multi_off");
        no_multi_jump.addEventListener("click", callback);
    };
    
    // add event listener to the toward goal only buton 
    this.setTowardGoalGameClickCallback = function (callback){
        var toward_goal = document.getElementById("toward_goal");
        toward_goal.addEventListener("click", callback);
    };
    
    // add event listener to the button that takes the user to the stats page
    this.setPersonalStatsClickCallback = function (callback){
        var personal_stats = document.getElementById("personal_stats_button");
        personal_stats.addEventListener("click", callback);
    };
    
    // add event listener to the button that sets player 1 to human and player 2 to AI
    this.setHumanAIClickCallback = function (callback){
        var human_v_AI = document.getElementById("Human_v_AI");
        human_v_AI.addEventListener("click", callback);
    };
    
    // add event listener to the button that sets player 1 to AI and player 2 to human
    this.setAIHumanClickCallback = function (callback){
        var AI_v_human = document.getElementById("AI_v_Human");
        AI_v_human.addEventListener("click", callback);
    };
    
    // add event listener to the button that sets both player to human
    this.setHumanHumanClickcallback = function(callback){
        var human_v_human = document.getElementById("human_v_human");
        human_v_human.addEventListener("click", callback);
    };
    
    
    
    /* this was the button used to make the AI players play against one another.
     * 
     * uncommet the below function to reintroduce the functionality.
     * Will also need to uncomment:
     *      - the button in the html
     *      - the test_view.setAIAIClickCallabck(...) in the controller
     *      - the function AIGame in the model. 
     
    this.setAIAIClickCallback = function(callback){
        var ai_v_ai = document.getElementById("AI_v_AI");
        ai_v_ai.addEventListener("click", callback);
    };
    */
   
   
    
    // this is the callback for the actual sign up button in the sign in page
    this.setSignUpButtonClickCallback = function (callback){
        var sign_up_button = document.getElementById("sign_up_button");
        sign_up_button.addEventListener("click", callback);
    };
    // listener for the log in page on the sign up page
    this.setLoginButtonClickCallback = function (callback){
        var login_button = document.getElementById("login_button");
        login_button.addEventListener("click", callback);
    };
    
    // add event listener to the back button on the stats page
    this.setStatsBackButtonClickCallback = function(callback){
        var back = document.getElementById("stats_back_button");
        back.addEventListener("click", callback);
    };
    
    // add event listener to the back button on the help page
    this.setHelpBackButtonClickCallback = function(callback){
        var back = document.getElementById("help_back_button");
        back.addEventListener("click", callback);
    };
    
    // add event listener to the back button on the sign up page
    this.setSignUpBackButtonClickCallback = function(callback){
        var back = document.getElementById("sign_up_back_button");
        back.addEventListener("click", callback);
    };
    
    // listeners for the colour options
    // add event listener to the cream and brown option
    this.setCreamAndBrownButtonClickCallback = function(callback){
        var cream_and_brown = document.getElementById("cream_and_brown");
        cream_and_brown.addEventListener("click", callback);
    };
    
    // add event listener to the red and black option
    this.setRedAndBlackButtonClickCallback = function(callback) {
        var red_and_black = document.getElementById("red_and_black");
        red_and_black.addEventListener("click", callback);
    };
    
    // add event listener to the purple ad yellow option
    this.setYellowAndPurpleButtonClickCallback = function(callback){
        var yellow_and_purple = document.getElementById("yellow_and_purple");
        yellow_and_purple.addEventListener("click", callback);
    };
    
    // add event listener to the white and blue option 
    this.setWhiteAndBlueButtonClickCallback = function(callback){
        var white_and_blue = document.getElementById("white_and_blue");
        white_and_blue.addEventListener("click", callback);
    };  
    
    /*
     * From here to the end of the file, the functions are no longer adding event listeneres to 
     * the buttons. 
     */
    
    /*
     * This function is responsible highlighting the selected piece
     * @returns {undefined}
     */
    this.highlightSelectedPiece = function(){
        //console.log(selected_piece);
        if(selected_piece.attributes.class.value === "white_circles"){
            selected_piece.style.stroke = "rgb(210, 33, 33)";
        }
        else{
            selected_piece.style.stroke = "rgb(8, 146, 208)";
        }
    };
    
    /*
     * 
     * @param {type} x_coord
     * @param {type} y_coord
     * @returns {undefined}
     * 
     * this function updates the board with possible moves. It takes in two paramaters,
     * an x and y coordinate and highlights the square with those coords
     */
    this.updateBoardWithMoves2 = function(x_coord, y_coord){
       // console.log(x_coord + "    " + y_coord);
       if(selected_piece.attributes.class.value === "white_circles"){
           squares_array[x_coord][y_coord].style.fill = "rgb(76, 240, 25)";
       }
       else{
           squares_array[x_coord][y_coord].style.fill = "rgb(250, 131, 0)";
       }
    };
    
    /*
     * 
     * @param {type} new_x
     * @param {type} new_y
     * @returns {undefined}
     * 
     * this function updates the board by actually perfomring the movement of the piece. The
     * paramters taken in are the x and y coordinates that the piece is to be moved to. 
     * 
     * The function is a little move complicated than just using the coordinates passed in however, 
     * as the piece has to be moved to a location that is relative to the screen size. 
     */
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
    
    /*
     * 
     * @param {type} value
     * @returns {undefined}
     * 
     * value is passed it that is the new setting for the AI. This text
     * area and function are poorly named, because this was not their initial
     * intention.  
     */
    this.setPlayerTwo = function(value){
        var player_two = document.getElementById("player_2_type");
        player_two.value = value;
    };
    
    /*
     * 
     * @param {type} screen_height
     * @param {type} screen_width
     * @param {type} squares_per_row
     * @returns {undefined}
     * 
     * this is a long and complicated function that is repsonsible for positioning the elemtns on
     * the board. The value taken in square_per_row is not actually used however. One idea was to have
     * user able to specify the board size (then squares per row would have been needed), however this
     * function was never included. 
     * 
     * This function is as long as it is, because it needs to position the squares and the cirles, but in doing
     * so, there are offsets for the circles to position them in ther center of the squares.  
     */
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
   };  
    
    /*
     * 
     * @param {type} id_number
     * @returns {Array}
     * 
     * This function takes in an idea number for a square, and finds its coordinates using
     * two for loops. These values are stored into and array which is then returned. 
     */
    this.getSquareCoordinates = function(id_number){
        var coordinates = new Array();
        var square_id = "square_" + id_number;
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
    
    /*
     * 
     * @param {type} piece
     * @param {type} current_player_colour
     * @returns {undefined}
     * 
     * this function takes in the piece that has been clicked by the user, and the
     * current colour that is to be moved. This method has been taked about in depth
     * in the report due to issues in making it function as required
     */
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

    /*
     * 
     * @returns {piece|String|View.selected_piece}
     * 
     * This function is used to get the selected piece in the controller
     */
    this.getSelectedPiece = function(){
        return selected_piece;
    };
    
    /*
     * 
     * @returns {Array|View.screen_to_board_map}
     * 
     * This function returns a two dimensional array, that stores all the pieces
     * at the indices that match their coordinate. i.e. if there is a game piece at 
     * coordinate point (0,0) it will be stored at screen_to_board_map[0][0] 
     */
    this.getScreenToBoardMap = function(){
        return screen_to_board_map;
    };

    /*
     * 
     * @param {type} player_1_colour
     * @param {type} player_2_colour
     * @param {type} dark_square_colour
     * @param {type} light_square_colour
     * @returns {undefined}
     * 
     * this function takes in the current set colours for the board, and then
     * reset the board to those colours. This is called after a move has been made, 
     * to ensure that all highlighted moves are no longer shown
     */
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
    
    /*
     * 
     * @param {type} circle_id
     * @returns {NodeList|View.getWhiteCircleCoordinates.white_circles}
     * 
     * This function takes in an id, and finds the coordinates of the circle
     * that matches the id that has been taken in. The for loop is used to loop
     * through every html element with class name "white_circles"
     */
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
    
    /*
     * 
     * @param {type} circle_id
     * @returns {NodeList|View.getBrownCircleCoordinates.brown_circles}
     * 
     * This function performs the same as the function above, only checking for the
     * brown cirles rather than the white ones
     */
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
    
    /*
     * 
     * @returns {Boolean}
     * 
     * returns a boolean value to indicate whether or not a move has been successful or not
     */
    this.wasMoveSuccessful = function(){
        return move_successful;
    };    
    
    /*
     * 
     * @param {type} message_to_display
     * @param {type} screen_condition
     * @returns {undefined}
     * 
     * this function takes in two paramters. One is the message to be displayed, the second is
     * the screen it is to be performed on. There can be error messages shown on either the 
     * game screen or the sign in screen
     */
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
        else if(screen_condition === "stalemate"){
            var text_area = document.getElementById("inform_user");
            var text_area_div = document.getElementById("info_div");
            text_area.value = message_to_display;
            // reset the opacity so that it is visible on callings after the first
            text_area_div.style.opacity = 0.9;
            text_area_div.style.display = "block";
            this.fadeInfoBox(text_area_div);
        }
        
    };
    
    /*
     * 
     * @param {type} text_area_div
     * @returns {undefined}
     * 
     * this function is used to fade the error messages that are shown to the user, so that they 
     * are not present on the screen all the time. This error message fading can cause some issues
     * if the user makes several mistakes in a row (in quick succession) whilst playing Ugolki. 
     */
    this.fadeInfoBox = function(text_area_div){
        var opacity = window.getComputedStyle(text_area_div).getPropertyValue("opacity");        
        var interval_count = 0;
        window.clearInterval();
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
     * 
     * @returns {undefined}
     * 
     * this function is responsible for highlighting the AI's chosen piece
     */
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
    
    /*
     * 
     * @returns {undefined}
     * 
     * This function is responsible for highlighting the selected piece
     */
    this.highlightAIMove = function(){
        selected_piece.style.stroke = "rgb(8, 146, 208)";

    };
    
    /*
     * 
     * @param {type} settings_screen
     * @returns {undefined}
     * 
     * This function takes a parameter from the controller, that is used to open the
     * settings panel to be the panel the user desires to be opened. 
     */
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
      * 
      * @param {type} pane_to_show
      * @returns {undefined}
      * 
      * This function is used to toogle between the different settings pane's
      * that relate to the individual settings menus. I.e. clicking the game types
      * section of the general settings menu, should open up the game time pane. 
      */
     this.togglePane = function(pane_to_show){
         // this will have a lot of else if statements, wont be pretty
        var pane;
        if(pane_to_show === "AI settings"){
             pane = document.getElementById("AI_settings");
         }
         else if(pane_to_show === "stats"){
             pane = document.getElementById("statistics_options");
         }
         else if(pane_to_show === "game types"){
             pane = document.getElementById("variations_panel");
         }
         current_settings_panel.style.display = "none";
         settings_pane = pane;
         settings_pane.style.display = "block";
     };
     
     /*
      * @returns {undefined}
      * 
      * this function is used to close the settings menus when they are no longer
      * required to be open. 
      */
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
    
    /*
     * @returns {undefined}
     * 
     * this function is used to display the help screen to the user
     */
    this.showHelp = function(){
        var help_page = document.getElementById("help_div");
        var game_board = document.getElementById("test_board");
        game_board.style.display = "none";
        help_page.style.display = "block";
        // set the alternatepage so returning from it is easier
        this.setAlternatePage(help_page);
    };
    
    /*
     * @returns {undefined}
     * 
     * this function is used to display the personal stats page of the app
     */
    this.displayPersonalStats = function(){
        var personal_stats_page = document.getElementById("personal_stats_page");
        var game_board = document.getElementById("test_board");
        game_board.style.display = "none";
        personal_stats_page.style.display = "block";
        //alternate_page = personal_stats_page;
        this.setAlternatePage(personal_stats_page);
    };
    
    /*
     * @param {type} player_stats
     * @returns {undefined}
     * 
     * This function sets the stats area's of the stats page. The parameter taken in
     * has came from the database, from the values gathered by the php and passed back
     * through the program. 
     */
    this.setStatsTextAreas = function(player_stats){
        var name = document.getElementById("player_name_stats");
        var games = document.getElementById("games_played");
        var wins = document.getElementById("no_of_wins");
        var draws = document.getElementById("no_of_draws");
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
        draws.value = player_stats[3];
        losses.value = player_stats[4];
        // the percentage values have been rounded to 3 decimal places. 
        percent.value = win_percent.toFixed(3) + "%";
    };

    /*
     * @returns {undefined}
     * 
     * This function is responsible for directing the user to the sign up page
     */
    this.displaySignUpPage = function(){
        // all this method needs to do is hide the game board and display the sign up page
        var game_board = document.getElementById("test_board");
        var sign_up_page = document.getElementById("sign_up_page");
        game_board.style.display = "none";
        sign_up_page.style.display = "block";  
        //alternate_page = sign_up_page;
        this.setAlternatePage(sign_up_page);
    };
    
    /*
     * @param {type} from_page
     * @returns {undefined}
     * 
     * this function is used to return to the game board page from whichever page the
     * user is currently on. the parameter taken in represents one of the possible three
     * pages the user could have navigated to. 
     */
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
    
    /*
     * @returns {undefined}
     * 
     * This function resets the login fields of the sign up and login page
     */
    this.resetLoginFeilds = function(){
        document.getElementById("login_username").value = "";
        document.getElementById("login_password").value = "";
    };
    
    /*
     * @returns {undefined}
     * 
     * this function resets the sign up fields of the sign up and login page
     */
    this.resetSignUpFields = function(){
        document.getElementById("sign_up_username").value = "";
        document.getElementById("sign_up_password").value = "";
        document.getElementById("confirm_password").value = "";
    };
    
    
    /*
     * @param {type} viewable_panel
     * @returns {undefined}
     * 
     * This function sets which panel is the current settings panel
     */
    this.setCurrentSettingsPanel = function(viewable_panel){
        //console.log("settings the panel to: " + viewable_panel);
        current_settings_panel = viewable_panel;
    };
    
    /*
     * @returns {type} current_settings_panel
     * 
     * This function is used to get which is the current settings panel. 
     */
    this.getCurrentSettingsPanel = function(){
        return current_settings_panel;
    };
    
    /*
     * @param {type} viewable_pane
     * @returns {undefined}
     * 
     * this function is used to set the settings pane. This function is used in the
     * toogle pane function of the view
     */
    this.setSettingsPane = function(viewable_pane){
        settings_pane = viewable_pane;
    };
    
    /*
     * @returns {type} settings_pane
     * 
     * This function returns the current setting pane. This was used by the toogle pane function. 
     */
    this.getSettingsPane = function(){
        return settings_pane;
    };
    
    /*
     * @param {type} page
     * @returns {undefined}
     * 
     * This function sets the alternate page to be which ever page has been passed in
     */
    this.setAlternatePage = function(page){
        alternate_page = page;
    };
    
    
    /*
     * @returns {type} alternate_page
     * 
     * this function is used to return the alternate page. This function is used to return to
     * the board from some other page of the application  
     */
    this.getAlternatePage = function(){
        return alternate_page;
    };
    
    
    /*
     * @returns {type} sign_up_details
     * 
     * This function is used to return the values that the user types into the sign up text
     * areas, so that they can be passed on through the program to the php file that
     * will communicate with the database to create the user account
     */
    this.getSignUpDetails = function(){
        var username = document.getElementById("sign_up_username").value;
        var password = document.getElementById("sign_up_password").value;
        var confirm_password = document.getElementById("confirm_password").value;        
        var sign_up_details = [username, password, confirm_password];
        //method returns sign up details so they can be validated and ultimately used to sign up
        return sign_up_details;
    };
    
    /*
     * @ returns {type} login_details
     * 
     * This function perfroms the same functionality as the above method, but this time it 
     * gathers the information from the login text areas. 
     */
    this.getLoginDetails = function(){
        //console.log("doing this");
        var username = document.getElementById("login_username").value;
        var password = document.getElementById("login_password").value;
        //console.log("username: " + username);
        var login_details = [username, password];
        //console.log(login_details[0]);
        return login_details;
    };
    
    /*
     * @ returns {type} undefined
     * 
     * this function returns the name of the player who is logged in, this information is
     * gathered from the html 
     */
    this.getLoggedInPlayerName = function(){
        return document.getElementById("player_1_type").value;
    };
    
    /*
     * @returns {type} undefined
     * 
     * this function ends the game by putting a blank div over the board so that the
     * user cannot interact with pieces.
     */
    this.endGame = function(){
        document.getElementById("game_over").style.display = "block";
    };
    
    /*
     * @returns {type} undefined
     * 
     * this function alters the size of the blank div over the board, so that the user can
     * press some of the menu functinality, such as new game
     */
    this.alterEndGame = function(){
        document.getElementById("game_over").style.left = "40%";
        document.getElementById("game_over").style.width = "60%";
    };
    
    /*
     * @returns {type} undefined
     * 
     * This function is used when starting a new game, to remove the blank div from the screen and
     * to reset it to its defualt size
     */
    this.newGame = function(){
        document.getElementById("game_over").style.display = "none";
        document.getElementById("game_over").style.left = "0";
        document.getElementById("game_over").style.width = "100%";
    };
    
    /*
     * @returns {type} string value from HTML element
     * 
     * This function is used to return the value from the html of player 1
     */
    this.getPlayerOne = function(){
        return document.getElementById("player_1_type").value;
    };
    
    /*
     * @returns {type} string value from HTML element
     * 
     *  this function is used to return the value from the html of player 2 
     */
    this.getPlayerTwo = function(){
        return document.getElementById("player_2_type").value;
    };
    
    /*
     * @param {type} type
     * @returns {undefined}
     * 
     * This function is used to set the value in the third info box for the user. This
     * is where the values the player types are shown (i.e. Human v AI)
     */
    this.setInfoBoxThree = function(type){
        document.getElementById("player_3_type").value = type;
    };
    
    /*
     * @param {type} screen_to_display
     * @returns {undefined}
     * 
     * This function is used to set which screen should be displayed, for the settings menus
     */
    this.setScreenToDisplay = function(screen_to_display){
        screen = screen_to_display;
    };
    
    /*
     * @returns {type} screen
     * 
     * this function is used to get the set screen. 
     */
    this.getScreenToDisplay = function(){
        return screen;
    };
    
    /*
     * @returns {undefined}
     * 
     * this function is used to decrement the remaining moves shown to the user.
     * The value being decremented is in the HTML
     */
    this.decrementMovesLeft = function(){
        var moves = document.getElementById("moves_left").value;
        moves--;
        document.getElementById("moves_left").value = moves;
    };
    
    /*
     * @returns {undefined}
     * 
     * This function resets the number of remaing moves shown to the user, when the new game
     * button is selected. 
     */
    this.resetMovesLeft = function(){
        document.getElementById("moves_left").value = 80;
    };
    
    /*
     * @param {type} type
     * @returns {undefined}
     * 
     * This function is used to update the HTML with the value of the current game type the user is playing
     */
    this.setGameType = function(type){
        var game_type = document.getElementById("game_type");
        game_type.value = type;
    };
}


