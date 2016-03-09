/*jslint node: true, browser: true */

"use strict";
function testController(){
     var test_view = new testView(),
     test_model = new testModel(),
     moves = new Array(),
     square = new Array();
     //test_model.init();
     test_model.setScreenSize(); 

     test_view.scaleBoardToScreen(test_model.getScreenHeight(), test_model.getScreenWidth(), 0);
     test_model.setTestBoard(test_view.getScreenToBoardMap());

     //var test_check = test_model.hasPlayerWon();
     //console.log(test_check);

    this.init = function() {
        
//        test_view.whiteCirclesClickCallback(function() {
//           console.log("white circle clicked");
//        });
        
        test_view.square1ClickCallback(function() {
            square = test_view.getSquareCoordinates(1);
            handleMovePiece();
        });
        test_view.square2ClickCallback(function() {
              square = test_view.getSquareCoordinates(2);
              handleMovePiece();
        });
        test_view.square3ClickCallback(function() {
              square = test_view.getSquareCoordinates(3);
              handleMovePiece();
        });
        test_view.square4ClickCallback(function() {
              square = test_view.getSquareCoordinates(4);
              handleMovePiece();
        });
        test_view.square5ClickCallback(function() {
              square = test_view.getSquareCoordinates(5);
              handleMovePiece();
        });
        test_view.square6ClickCallback(function() {
              square = test_view.getSquareCoordinates(6);
              handleMovePiece();
        });
        test_view.square7ClickCallback(function() {
              square = test_view.getSquareCoordinates(7);
              handleMovePiece();
        });
        test_view.square8ClickCallback(function() {
              square = test_view.getSquareCoordinates(8);
              handleMovePiece();
        });
        test_view.square9ClickCallback(function() {
              square = test_view.getSquareCoordinates(9);
              handleMovePiece();
        });
        test_view.square10ClickCallback(function() {
              square = test_view.getSquareCoordinates(10);
              handleMovePiece();
        });
        test_view.square11ClickCallback(function() {
              square = test_view.getSquareCoordinates(11);
              handleMovePiece();
        });
        test_view.square12ClickCallback(function() {
              square = test_view.getSquareCoordinates(12);
              handleMovePiece();
        });
        test_view.square13ClickCallback(function() {
              square = test_view.getSquareCoordinates(13);
              handleMovePiece();
        });
        test_view.square14ClickCallback(function() {
              square = test_view.getSquareCoordinates(14);
              handleMovePiece();
        });
        test_view.square15ClickCallback(function() {
              square = test_view.getSquareCoordinates(15);
              handleMovePiece();
        });
        test_view.square16ClickCallback(function() {
              square = test_view.getSquareCoordinates(16);
              handleMovePiece();
        });
        test_view.square17ClickCallback(function() {
              square = test_view.getSquareCoordinates(17);
              handleMovePiece();
        });
        test_view.square18ClickCallback(function() {
              square = test_view.getSquareCoordinates(18);
              handleMovePiece();
        });
        test_view.square19ClickCallback(function() {
              square = test_view.getSquareCoordinates(19);
              handleMovePiece();
        });
        test_view.square20ClickCallback(function() {
              square = test_view.getSquareCoordinates(20);
              handleMovePiece();
        });
        test_view.square21ClickCallback(function() {
              square = test_view.getSquareCoordinates(21);
              handleMovePiece();
        });
        test_view.square22ClickCallback(function() {
              square = test_view.getSquareCoordinates(22);
              handleMovePiece();
        });
        test_view.square23ClickCallback(function() {
              square = test_view.getSquareCoordinates(23);
              handleMovePiece();
        });
        test_view.square24ClickCallback(function() {
              square = test_view.getSquareCoordinates(24);
              handleMovePiece();
        });
        test_view.square25ClickCallback(function() {
              square = test_view.getSquareCoordinates(25);
              handleMovePiece();
        });
        test_view.square26ClickCallback(function() {
              square = test_view.getSquareCoordinates(26);
              handleMovePiece();
        });
        test_view.square27ClickCallback(function(){
           square = test_view.getSquareCoordinates(27);
           handleMovePiece();
        });        
        test_view.square28ClickCallback(function(){
           square = test_view.getSquareCoordinates(28);
           handleMovePiece();
        });
        test_view.square29ClickCallback(function() {
              square = test_view.getSquareCoordinates(29);
              handleMovePiece();
        });
        test_view.square30ClickCallback(function() {
              square = test_view.getSquareCoordinates(30);
              handleMovePiece();
        });
        test_view.square31ClickCallback(function() {
              square = test_view.getSquareCoordinates(31);
              handleMovePiece();
        });
        test_view.square32ClickCallback(function() {
              square = test_view.getSquareCoordinates(32);
              handleMovePiece();
        });
        test_view.square33ClickCallback(function() {
              square = test_view.getSquareCoordinates(33);
              handleMovePiece();
        });
        test_view.square34ClickCallback(function() {
              square = test_view.getSquareCoordinates(34);
              handleMovePiece();
        });
        test_view.square35ClickCallback(function() {
              square = test_view.getSquareCoordinates(35);
              handleMovePiece();
        });
        test_view.square36ClickCallback(function() {
              square = test_view.getSquareCoordinates(36);
              handleMovePiece();
        });
        test_view.square37ClickCallback(function() {
              square = test_view.getSquareCoordinates(37);
              handleMovePiece();
        });
        test_view.square38ClickCallback(function() {
              square = test_view.getSquareCoordinates(38);
              handleMovePiece();
        });
        test_view.square39ClickCallback(function() {
              square = test_view.getSquareCoordinates(39);
              handleMovePiece();
        });
        test_view.square40ClickCallback(function() {
              square = test_view.getSquareCoordinates(40);
              handleMovePiece();
        });
        test_view.square41ClickCallback(function() {
              square = test_view.getSquareCoordinates(41);
              handleMovePiece();
        });
        test_view.square42ClickCallback(function() {
              square = test_view.getSquareCoordinates(42);
              handleMovePiece();
        });
        test_view.square43ClickCallback(function() {
              square = test_view.getSquareCoordinates(43);
              handleMovePiece();
        });
        test_view.square44ClickCallback(function() {
              square = test_view.getSquareCoordinates(44);
              handleMovePiece();
        });
        test_view.square45ClickCallback(function() {
              square = test_view.getSquareCoordinates(45);
              handleMovePiece();
        });
        test_view.square46ClickCallback(function() {
              square = test_view.getSquareCoordinates(46);
              handleMovePiece();
        });
        test_view.square47ClickCallback(function() {
              square = test_view.getSquareCoordinates(47);
              handleMovePiece();
        });
        test_view.square48ClickCallback(function() {
              square = test_view.getSquareCoordinates(48);
              handleMovePiece();
        });
        test_view.square49ClickCallback(function() {
              square = test_view.getSquareCoordinates(49);
              handleMovePiece();
        });
        test_view.square50ClickCallback(function() {
              square = test_view.getSquareCoordinates(50);
              handleMovePiece();
        });
        test_view.square51ClickCallback(function() {
              square = test_view.getSquareCoordinates(51);
              handleMovePiece();
        });
        test_view.square52ClickCallback(function() {
              square = test_view.getSquareCoordinates(52);
              handleMovePiece();
        });
        test_view.square53ClickCallback(function() {
              square = test_view.getSquareCoordinates(53);
              handleMovePiece();
        });
        test_view.square54ClickCallback(function() {
              square = test_view.getSquareCoordinates(54);
              handleMovePiece();
        });
        test_view.square55ClickCallback(function() {
              square = test_view.getSquareCoordinates(55);
              handleMovePiece();
        });
        test_view.square56ClickCallback(function() {
              square = test_view.getSquareCoordinates(56);
              handleMovePiece();
        });
        test_view.square57ClickCallback(function() {
              square = test_view.getSquareCoordinates(57);
              handleMovePiece();
        });
        test_view.square58ClickCallback(function() {
              square = test_view.getSquareCoordinates(58);
              handleMovePiece();
        });
        test_view.square59ClickCallback(function() {
              square = test_view.getSquareCoordinates(59);
              handleMovePiece();
        });
        test_view.square60ClickCallback(function() {
              square = test_view.getSquareCoordinates(60);
              handleMovePiece();
        });
        test_view.square61ClickCallback(function() {
              square = test_view.getSquareCoordinates(61);
              handleMovePiece();
        });
        test_view.square62ClickCallback(function() {
              square = test_view.getSquareCoordinates(62);
              handleMovePiece();
        });
        test_view.square63ClickCallback(function() {
              square = test_view.getSquareCoordinates(63);
              handleMovePiece();
        });
        test_view.square64ClickCallback(function() {
              square = test_view.getSquareCoordinates(64);
              handleMovePiece();
        });
        
        // call all functions to add event listeners to the white piece in the view
        test_view.setWhiteCircle1ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_1"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle2ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_2"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle3ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_3"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle4ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_4"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle5ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_5"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle6ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_6"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle7ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_7"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle8ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_8"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle9ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_9"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle10ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_10"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle11ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_11"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle12ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_12"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setWhiteCircle13ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_13"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle14ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_14"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle15ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_15"),
                                test_model.getCurrentPlayerColour());
            performPieceSelection();
        });
        test_view.setWhiteCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_16"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        
        test_view.setBrownCircle1ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_1"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle2ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_2"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle3ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_3"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle4ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_4"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle5ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_5"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle6ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_6"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle7ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_7"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle8ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_8"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle9ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_9"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle10ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_10"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle11ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_11"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle12ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_12"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle13ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_13"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle14ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_14"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle15ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_15"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        test_view.setBrownCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_16"),
                                test_model.getCurrentPlayerColour());
           performPieceSelection();
        });
        
        /* 
         * Every set...ClickCallback from here down is for the menu's and options, rather
         * than the ones needed for playing Ugolki. 
         */
       
        // this calls the methods to add the event listener to the buttons in the menu
        test_view.setMenuImgClickCallback(function (){
            //console.log("menu option clicked");
            //test_view.toggleSettingsPanel();
            //test_view.toggleGeneralSettings();
            test_view.setScreenToDisplay("general");
            test_view.toggleSettings(test_view.getScreenToDisplay());
        });
        test_view.setPlayerImgClickCallback(function (){
            //console.log("player 2 button was clicked");
            //test_view.tooglePlayerSettings();
            test_view.setScreenToDisplay("player");
            test_view.toggleSettings(test_view.getScreenToDisplay());
        });
        test_view.setColoursImgClickCallback(function (){
           //console.log("colours img was clicked"); 
           //test_view.toogleColourSettings();
            test_view.setScreenToDisplay("colour");
            test_view.toggleSettings(test_view.getScreenToDisplay());
        });
        test_view.setSoundImgClickCallback( function(){
            //console.log("sounds img was clicked");
            //test_view.toogleSoundSettings();
            test_view.setScreenToDisplay("sound");
            test_view.toggleSettings(test_view.getScreenToDisplay());
        });
        test_view.setHelpImgClickCallback( function(){
            console.log("help has been clicked");
            test_view.showHelp();
        });
        
        // need Ugolki Varations called here
        test_view.setViewStatsClickCallback(function(){
            //console.log("stats clicked");
            test_view.togglePane("stats");
        });
        test_view.setNewGameClickCallback(function(){
            var controller = new testController();
            controller.init();
            test_view.closeSettings();
            test_view = undefined;
            test_model = undefined;
            test_view = new testView();
            test_model = new testModel();
            test_model.setScreenSize();
            test_view.scaleBoardToScreen(test_model.getScreenHeight(), test_model.getScreenWidth(), 0);
            test_model.setTestBoard(test_view.getScreenToBoardMap());
            
        });
        
        // need View Statistics called here
        
        test_view.setMoveOptionsClickCallback( function(){
            //console.log("move options has been clicked");
            // need to make code in the view that is responsible for toggling the buttons
            test_view.togglePane("move options");
        });
        
//        
//        these will be used eventually, not sure when i'll get round to them though
//        
//        test_view.setHumanPlayerClickCallback(function() {
//            console.log("human player button was clicked");
//            test_model.setPlayerTwoType("human");
//            test_view.updateSettingsPanel("human player");
//        });
//        test_view.setAIPlayerClickCallback(function() {
//            console.log("AI player was clicked");
//            test_view.updateSettingsPanel("AI player");
//        });

        test_view.setAISettingsClickCallback(function() {
            test_view.togglePane("AI settings");
        });
        test_view.setSimpleAIClickCalback(function() {
            //console.log("simple AI clicked");
            test_model.setAIType("simpleAI");
            test_model.setPlayerTwoType("AI");
            test_view.setPlayerTwo("AI - Easy");
            //test_view.updateSettingsPanel("AI difficulty");
            test_view.closeSettings();
        });
        test_view.setMediumAIClickCallback(function() {
            test_model.setAIType("mediumAI");
            test_model.setPlayerTwoType("AI");
            // need to change this to check which player is AI
            test_view.setPlayerTwo("AI - Medium");
            test_view.closeSettings();
        });
        test_view.setHumanAIClickCallback(function(){
            console.log("human v AI");
            test_view.closeSettings();
        });
        test_view.setHumanHumanClickcallback( function(){
            test_model.setPlayerTwoType("human");
            test_view.setPlayerTwo("Human");
            test_view.closeSettings();
        });
        test_view.setAIHumanClickCallback(function(){
            //console.log("AI v human");
            test_model.alterAISettings("AI v human");
            test_model.checkAIType(test_model);
            //console.log("about to get the id");
            
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(test_model.getAIPieceIndex()),
                                     test_model.getCurrentPlayerColour());
            var AI_move = test_model.getAIChoosenMove();
            test_view.highlightAIMove(AI_move.getX(), AI_move.getY());
            test_model.updateModelWithAIMove();
            test_view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
            setTimeout(function() {
                 test_view.movePiece2(AI_move.getX(), AI_move.getY());
                 // need to reset the board colour and the model, before the user can make their next turn
                 var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
                 AI_piece_moved.play();                        
                 test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                 test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            }, 750);
            test_model.resetForNextMove();
            test_view.closeSettings();
        });
        
        test_view.setPersonalStatsClickCallback( function(){
            //console.log("personal stats has been clicked");            
            // need to check if a player is logged in
            if(test_model.getLoggedIn()){
                // do something in the model
                //console.log("did this happen");
                //redirect to the stats page
                test_view.displayPersonalStats();
                var stats = test_model.validation(test_model.getLoggedInPlayer(), "retrieve stats");
                //console.log("in controller: " + stats.length);
                // call the view's function to set the stats text area's to hold the relevant info. 
                test_view.setStatsTextAreas(stats);
            }
            else{
                test_view.closeSettings();
                //console.log("reporting no logged in to user");
                test_view.reportErrorToUser("There is no logged in player to get stats for", "game");
            }
        });
        
        test_view.setSignUpClickCallback(function(){
            //console.log("this is where we call the sign up screen");
            test_view.displaySignUpPage();
        });
        
        /* this is where to controller calls the method in the view to give the actual
         * sign up button it's callback
         */
        test_view.setSignUpButtonClickCallback(function(){
           var user_details = test_view.getSignUpDetails(); 
           /*
            * Need to pass details to the model, which can call a helper class that does validation
            * and then if all details are okay, calls the php to sign up the user to the app
            */
           var status = test_model.validation(user_details, "sign up");
           //console.log(status);
           // only return to the board if the sign up was sucessful
           if(status){
               test_view.returnToBoard("sign_up");
               test_model.setSignedIn(true);
               test_model.setLoggedInPlayer(test_view.getLoggedInPlayerName());
           }
           else{
               // doesnt work yet, comment in HTML says why
               test_view.reportErrorToUser("Sign up unsuccessful. Please try again", "login");
           }
           // reset the sign up textarea's
           test_view.resetSignUpFields();
        });
        test_view.setLoginButtonClickCallback(function(){
            var login_details = test_view.getLoginDetails();
            /*
             * Need to pass details to the model, which calls helper method to do validation and
             * then perform the logging in. 
             */
            var status = test_model.validation(login_details, "login");
            if(status){
                test_view.returnToBoard("sign_up");
                // might not needed singed_in in model, could maybe use player name instead?
                test_model.setSignedIn(true);
                test_model.setLoggedInPlayer(test_view.getLoggedInPlayerName());
            }
            else{
                // doesnt work yet, comment in HTML says why
                test_view.reportErrorToUser("Login unsuccessful. Please try again.", "login");
            }
            // reset the textarea's for login
            test_view.resetLoginFeilds();           
        });
        
        test_view.setStatsBackButtonClickCallback( function(){
            test_view.returnToBoard();
        });
        
        test_view.setSignUpBackButtonClickCallback( function(){
            //console.log("the button has been clicked");
            test_view.returnToBoard();
        });
        test_view.setHelpBackButtonClickCallback( function(){
            test_view.returnToBoard();
        });
        
        // call code for the colour change buttons
        test_view.setCreamAndBrownButtonClickCallback( function() {
            test_model.setPlayer1Colour("rgb(255, 235, 205)");
            test_model.setPlayer2Colour("rgb(92, 64, 51)");
            test_model.setDarkBoardColour("rgb(130, 72, 21)");
            test_model.setLightBoardColour("rgb(255, 211, 155)");
            test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            test_view.closeSettings();
        });
        test_view.setRedAndBlackButtonClickCallback( function() {
            //console.log("red and balck has been clicked");
            test_model.setPlayer1Colour("rgb(255, 55, 55)");
            test_model.setPlayer2Colour("rgb(87, 87, 87)");
            test_model.setDarkBoardColour("rgb(0, 0, 0)");
            test_model.setLightBoardColour("rgb(182, 32, 32)");
            test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            test_view.closeSettings();
        });
        test_view.setYellowAndPurpleButtonClickCallback( function() {
            //console.log("purple and yellow has been clicked");
            test_model.setPlayer1Colour("rgb(218, 223, 72)");
            test_model.setPlayer2Colour("rgb(175, 127, 208)");
            test_model.setDarkBoardColour("rgb(138, 0, 230)");
            test_model.setLightBoardColour("rgb(247, 255, 0)");
            test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            test_view.closeSettings();
        });
        test_view.setWhiteAndBlueButtonClickCallback( function() {
            test_model.setPlayer1Colour("rgb(235, 240, 255)");
            test_model.setPlayer2Colour("rgb(72, 229, 240)");
            test_model.setDarkBoardColour("rgb(0, 128, 255)");
            test_model.setLightBoardColour("rgb(255, 255, 255)");
            test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            test_view.closeSettings();
        });
        
    // this should probably be in the model
    this.performPieceSelection = function(){ 
        /*
         * Check the current piece colour here, not in model. If it is not the 
         * turn of the colour of piece that has been selected, can therefore bring
         * up a pop up box informing the user it isn't their turn
         */
        var selected_piece = new Audio('Sounds/piece_selected.wav');
        selected_piece.play();
            //test_view.resetDefaultBoardColours();// call this incase there are all ready squares coloured
            if(test_view.getSelectedPiece() !== "none"){
                test_view.highlightSelectedPiece();
                var current_piece = test_view.getSelectedPiece();
                var id = current_piece.attributes.id.value,
                    screen_to_board_map = test_view.getScreenToBoardMap(),
                    x_coord = 0,
                    y_coord = 0;
                //console.log("in controller (performPieceSelection) the id of slected piece is: " + id);
                // console.log(screen_to_board_map[0][7][0].attributes.id.value);
                moves = [];
                //test_view.resetDefaultBoardColours();
               // console.log("length of moves: " + moves.length);
                for(var i = 0; i < 8; i++){
                    for(var j = 0; j < 8; j++){
                        if(screen_to_board_map[i][j] !== undefined){
                            if(screen_to_board_map[i][j][0].attributes.id.value === id){
                                //console.log("found circle with id " + id);
                                x_coord = i;
                                y_coord = j;
                                //console.log("it's x and y coords are: " + x_coord + "," + y_coord);
                            }
                            else{
                                //console.log("[" + i + "][" + j + "]");
                            }
                        }
                    }
                }
                moves = test_model.findMoves2(x_coord, y_coord);
                if(test_model.wasFindMovesSuccessful()){
                    //console.log(moves.length);
                    for(var i = 0; i < moves.length; i++){
                        var x_coord = moves[i].getX(),
                            y_coord = moves[i].getY();
                        test_view.updateBoardWithMoves2(x_coord, y_coord);
                    }
                }
                else{
                    var colour = test_model.getCurrentPlayerColour();
                    test_view.reportErrorToUser("It is " + colour + "s turn to move", "game");
                    //test_view.fadeInfoBox();
                }
            }
            else{
                test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
            }
        };
        
        // this should be in the model
        this.handleMovePiece = function() {                     
           var square_x = square[0];
           var square_y = square[1];
           var piece_moved = new Audio('Sounds/piece_moved.wav');
           piece_moved.play();
           //console.log("in handle move pieces: " + square_x + "   " + square_y);
           if(test_model.movePiece(square_x, square_y)){           
                test_view.movePiece2(test_model.getNewX(), test_model.getNewY());
            }
            else{
                //console.log("need to selected a piece");
                test_view.reportErrorToUser("Please selected a piece first", "game");
                //test_view.fadeInfoBox();
                return;
            }
           if(test_view.wasMoveSuccessful()){
                test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
                test_model.resetForNextMove();
           }
           else{
               //console.log("move not successful");
               test_view.reportErrorToUser("Not a valid move for the selected piece", "game");
               //test_view.fadeInfoBox();            
           }
           
           var is_game_over = test_model.hasPlayerWon();
           //console.log(is_game_over);
           
           if(is_game_over !== "no winner"){
               // might change game to game_over
               
               /* want to put a transparent div over the screen, that offers option to start new game
                * advantage of doing this is that it will stop the players from being able to move the
                * elements on the board after someone has won. 
                */
               test_view.endGame();
               
               // if a player is signed in want to update database when a player wins
               if(test_model.getSignedIn()){
                   var winner;
                   var player_name = test_model.getLoggedInPlayer();
                   if(is_game_over === "player 1"){
                       winner = test_view.getPlayerOne();
                   }
                   else{
                       winner = test_view.getPlayerTwo();
                   }
                   var details = [player_name, winner];
                   
                   test_model.validation(details, "stats");
               }
               
               test_view.reportErrorToUser(is_game_over + " is the winner", "game");
               // this is where we will need to call the code that will update the database with the results. 
               if(test_model.getSignedIn()){
                   // this means that there is a player signed in. 
               }
           }
           else{
                if(test_model.getPlayerTwoType() === "AI"){
                   test_model.checkAIType(test_model);
                   //console.log("about to get the id");
                   if(test_model.getAIColour() === "black"){
                        test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(test_model.getAIPieceIndex()),
                                                 test_model.getCurrentPlayerColour());
                   }
                   else{
                       test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(test_model.getAIPieceIndex()),
                                                 test_model.getCurrentPlayerColour());
                   }
                   var AI_move = test_model.getAIChoosenMove();
                   test_view.highlightAIMove(AI_move.getX(), AI_move.getY());
                   test_model.updateModelWithAIMove();
                   test_view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                   setTimeout(function() {
                        test_view.movePiece2(AI_move.getX(), AI_move.getY());
                        // need to reset the board colour and the model, before the user can make their next turn
                        var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
                        AI_piece_moved.play();                        
                        test_view.resetDefaultBoardColours(test_model.getPlayer1Colour(), test_model.getPlayer2Colour(),
                                        test_model.getDarkBoardColour(), test_model.getLightBoardColour());
                   }, 750);
                   test_model.resetForNextMove();
                   
                   var has_AI_won = test_model.hasPlayerWon();
                   if(has_AI_won !== "no winner"){
                       test_view.endGame();
                       test_view.reportErrorToUser(has_AI_won + " is the winner", "game");
                       if(test_model.getSignedIn()){
                            var winner;
                            var player_name = test_model.getLoggedInPlayer();
                            if(is_game_over === "player 1"){
                                winner = test_view.getPlayerOne();
                            }
                            else{
                                winner = test_view.getPlayerTwo();
                            }
                            var details = [player_name, winner];

                            test_model.validation(details, "stats");
                      }
                   }
                }
            }
        };
    };
}


var controller = new testController();
window.addEventListener("load", controller.init, false);



