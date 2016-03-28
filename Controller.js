/*jslint node: true, browser: true */
"use strict";

/*
 * This file is the controller for the project. Some aspects of this are not strictly in MVC, there
 * are two methods near the end that should be in the model. However, they were kept here for the ease 
 * of reporting information back to the view.  
 */

function Controller(){
     var view = new View(),
     model = new Model(),
     moves = new Array(),
     square = new Array();
     
     /*
      * This is where the board is scaled in sized depending on the device being used. Note
      * that this only works when the phone is in portrait view, and only scaled the piece and
      * squares on the board and not the rest interface. 
      */
     model.setScreenSize(); 
     view.scaleBoardToScreen(model.getScreenHeight(), model.getScreenWidth(), 0);
     model.setTestBoard(view.getScreenToBoardMap());

    this.init = function() {
        
        /*
         * The following functions view.squareNClickCallback called the
         * necessary functionality when one of the board squares are
         * click. There are 64 of these function in total. 
         */
        view.square1ClickCallback(function() {
            square = view.getSquareCoordinates(1);
            handleMovePiece();
        });
        view.square2ClickCallback(function() {
              square = view.getSquareCoordinates(2);
              handleMovePiece();
        });
        view.square3ClickCallback(function() {
              square = view.getSquareCoordinates(3);
              handleMovePiece();
        });
        view.square4ClickCallback(function() {
              square = view.getSquareCoordinates(4);
              handleMovePiece();
        });
        view.square5ClickCallback(function() {
              square = view.getSquareCoordinates(5);
              handleMovePiece();
        });
        view.square6ClickCallback(function() {
              square = view.getSquareCoordinates(6);
              handleMovePiece();
        });
        view.square7ClickCallback(function() {
              square = view.getSquareCoordinates(7);
              handleMovePiece();
        });
        view.square8ClickCallback(function() {
              square = view.getSquareCoordinates(8);
              handleMovePiece();
        });
        view.square9ClickCallback(function() {
              square = view.getSquareCoordinates(9);
              handleMovePiece();
        });
        view.square10ClickCallback(function() {
              square = view.getSquareCoordinates(10);
              handleMovePiece();
        });
        view.square11ClickCallback(function() {
              square = view.getSquareCoordinates(11);
              handleMovePiece();
        });
        view.square12ClickCallback(function() {
              square = view.getSquareCoordinates(12);
              handleMovePiece();
        });
        view.square13ClickCallback(function() {
              square = view.getSquareCoordinates(13);
              handleMovePiece();
        });
        view.square14ClickCallback(function() {
              square = view.getSquareCoordinates(14);
              handleMovePiece();
        });
        view.square15ClickCallback(function() {
              square = view.getSquareCoordinates(15);
              handleMovePiece();
        });
        view.square16ClickCallback(function() {
              square = view.getSquareCoordinates(16);
              handleMovePiece();
        });
        view.square17ClickCallback(function() {
              square = view.getSquareCoordinates(17);
              handleMovePiece();
        });
        view.square18ClickCallback(function() {
              square = view.getSquareCoordinates(18);
              handleMovePiece();
        });
        view.square19ClickCallback(function() {
              square = view.getSquareCoordinates(19);
              handleMovePiece();
        });
        view.square20ClickCallback(function() {
              square = view.getSquareCoordinates(20);
              handleMovePiece();
        });
        view.square21ClickCallback(function() {
              square = view.getSquareCoordinates(21);
              handleMovePiece();
        });
        view.square22ClickCallback(function() {
              square = view.getSquareCoordinates(22);
              handleMovePiece();
        });
        view.square23ClickCallback(function() {
              square = view.getSquareCoordinates(23);
              handleMovePiece();
        });
        view.square24ClickCallback(function() {
              square = view.getSquareCoordinates(24);
              handleMovePiece();
        });
        view.square25ClickCallback(function() {
              square = view.getSquareCoordinates(25);
              handleMovePiece();
        });
        view.square26ClickCallback(function() {
              square = view.getSquareCoordinates(26);
              handleMovePiece();
        });
        view.square27ClickCallback(function(){
           square = view.getSquareCoordinates(27);
           handleMovePiece();
        });        
        view.square28ClickCallback(function(){
           square = view.getSquareCoordinates(28);
           handleMovePiece();
        });
        view.square29ClickCallback(function() {
              square = view.getSquareCoordinates(29);
              handleMovePiece();
        });
        view.square30ClickCallback(function() {
              square = view.getSquareCoordinates(30);
              handleMovePiece();
        });
        view.square31ClickCallback(function() {
              square = view.getSquareCoordinates(31);
              handleMovePiece();
        });
        view.square32ClickCallback(function() {
              square = view.getSquareCoordinates(32);
              handleMovePiece();
        });
        view.square33ClickCallback(function() {
              square = view.getSquareCoordinates(33);
              handleMovePiece();
        });
        view.square34ClickCallback(function() {
              square = view.getSquareCoordinates(34);
              handleMovePiece();
        });
        view.square35ClickCallback(function() {
              square = view.getSquareCoordinates(35);
              handleMovePiece();
        });
        view.square36ClickCallback(function() {
              square = view.getSquareCoordinates(36);
              handleMovePiece();
        });
        view.square37ClickCallback(function() {
              square = view.getSquareCoordinates(37);
              handleMovePiece();
        });
        view.square38ClickCallback(function() {
              square = view.getSquareCoordinates(38);
              handleMovePiece();
        });
        view.square39ClickCallback(function() {
              square = view.getSquareCoordinates(39);
              handleMovePiece();
        });
        view.square40ClickCallback(function() {
              square = view.getSquareCoordinates(40);
              handleMovePiece();
        });
        view.square41ClickCallback(function() {
              square = view.getSquareCoordinates(41);
              handleMovePiece();
        });
        view.square42ClickCallback(function() {
              square = view.getSquareCoordinates(42);
              handleMovePiece();
        });
        view.square43ClickCallback(function() {
              square = view.getSquareCoordinates(43);
              handleMovePiece();
        });
        view.square44ClickCallback(function() {
              square = view.getSquareCoordinates(44);
              handleMovePiece();
        });
        view.square45ClickCallback(function() {
              square = view.getSquareCoordinates(45);
              handleMovePiece();
        });
        view.square46ClickCallback(function() {
              square = view.getSquareCoordinates(46);
              handleMovePiece();
        });
        view.square47ClickCallback(function() {
              square = view.getSquareCoordinates(47);
              handleMovePiece();
        });
        view.square48ClickCallback(function() {
              square = view.getSquareCoordinates(48);
              handleMovePiece();
        });
        view.square49ClickCallback(function() {
              square = view.getSquareCoordinates(49);
              handleMovePiece();
        });
        view.square50ClickCallback(function() {
              square = view.getSquareCoordinates(50);
              handleMovePiece();
        });
        view.square51ClickCallback(function() {
              square = view.getSquareCoordinates(51);
              handleMovePiece();
        });
        view.square52ClickCallback(function() {
              square = view.getSquareCoordinates(52);
              handleMovePiece();
        });
        view.square53ClickCallback(function() {
              square = view.getSquareCoordinates(53);
              handleMovePiece();
        });
        view.square54ClickCallback(function() {
              square = view.getSquareCoordinates(54);
              handleMovePiece();
        });
        view.square55ClickCallback(function() {
              square = view.getSquareCoordinates(55);
              handleMovePiece();
        });
        view.square56ClickCallback(function() {
              square = view.getSquareCoordinates(56);
              handleMovePiece();
        });
        view.square57ClickCallback(function() {
              square = view.getSquareCoordinates(57);
              handleMovePiece();
        });
        view.square58ClickCallback(function() {
              square = view.getSquareCoordinates(58);
              handleMovePiece();
        });
        view.square59ClickCallback(function() {
              square = view.getSquareCoordinates(59);
              handleMovePiece();
        });
        view.square60ClickCallback(function() {
              square = view.getSquareCoordinates(60);
              handleMovePiece();
        });
        view.square61ClickCallback(function() {
              square = view.getSquareCoordinates(61);
              handleMovePiece();
        });
        view.square62ClickCallback(function() {
              square = view.getSquareCoordinates(62);
              handleMovePiece();
        });
        view.square63ClickCallback(function() {
              square = view.getSquareCoordinates(63);
              handleMovePiece();
        });
        view.square64ClickCallback(function() {
              square = view.getSquareCoordinates(64);
              handleMovePiece();
        });
        
       /*
        * The following 16 functions call the necessary functionality for the white cirlces
        * being pressed 
        */
        view.setWhiteCircle1ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_1"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle2ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_2"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle3ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_3"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle4ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_4"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle5ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_5"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle6ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_6"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle7ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_7"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle8ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_8"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle9ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_9"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle10ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_10"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle11ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_11"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle12ClickCallback(function (){
           view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_12"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setWhiteCircle13ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_13"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle14ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_14"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle15ClickCallback(function() {
            view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_15"),
                                model.getCurrentPlayerColour());
            performPieceSelection();
        });
        view.setWhiteCircle16ClickCallback(function (){
           view.setSelectedPiece(view.getWhiteCircleCoordinates("white_circle_16"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        
        /*
         * the following 16 functions call the necessary functionality for when a 
         * brown square is clicked
         */
        view.setBrownCircle1ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_1"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle2ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_2"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle3ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_3"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle4ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_4"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle5ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_5"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle6ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_6"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle7ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_7"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle8ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_8"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle9ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_9"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle10ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_10"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle11ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_11"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle12ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_12"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle13ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_13"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle14ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_14"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle15ClickCallBack(function() {
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_15"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        view.setBrownCircle16ClickCallback(function (){
           view.setSelectedPiece(view.getBrownCircleCoordinates("brown_circle_16"),
                                model.getCurrentPlayerColour());
           performPieceSelection();
        });
        
       
       /*
        * the functions from here on are related to the menus and icons and buttons in the
        * interface and are not required for the primary functionality of the game. 
        */
       
        // open the general settings menu
        view.setMenuImgClickCallback(function (){
            /*
             * one isse that had to be over come in the section was that, when the game ends a
             * transparent div is placed over the screen, so that the user can no longer interact
             * with the board. However, this stopped the user from being able to click the new game button.
             * 
             * Therefore, the following if statement was added to check if the game was over, and if
             * so the sie of the transparent end game div is reduced to allow the user to press the 
             * new game button. 
             */
            if(model.hasPlayerWon() !== "no winner" ||
                    model.getWinner() !== "no winner"){
                view.alterEndGame();
            }
            view.setScreenToDisplay("general");
            view.toggleSettings(view.getScreenToDisplay());
        });
        
        // open the menu that relates to the player settings. 
        view.setPlayerImgClickCallback(function (){
            view.setScreenToDisplay("player");
            view.toggleSettings(view.getScreenToDisplay());
        });
        
        // open the colour settings menu
        view.setColoursImgClickCallback(function (){
            view.setScreenToDisplay("colour");
            view.toggleSettings(view.getScreenToDisplay());
        });
        
        // display the help screen for the user
        view.setHelpImgClickCallback( function(){
            console.log("help has been clicked");
            view.showHelp();
        });
        
        // this opens up the menu wherer the user can select their game type. 
        view.setGameTypesClickCallback( function(){
           view.togglePane("game types");
        });
        
        //perform the functionality to change the game to a standard game. 
        view.setStandardGameClickCallback( function(){
            model.setGameType("standard");
            view.setGameType("standard game");
            view.closeSettings();
        });
        
        // perform the functionality to remove the mutliple jump functionality
        view.setNoMutliJumpGameClickCallback( function(){
            model.setGameType("no multi jump");
            view.setGameType("no mutli jump");
            view.closeSettings();
        });
        
        // perform the functionality to allow only moves that take the player towards the goal
        view.setTowardGoalGameClickCallback( function(){
            model.setGameType("toward goal");
            view.setGameType("toward goal");
            view.closeSettings();
        });
        
        /* this opens the menu where the use can view the statistcs. The menu that is opened
         * should ideally have had two options. However, the highscore functionality was not included
         * due to time contraints. therefore, the menu that is opened only has one option:
         *              - "personal stats"
         */
        view.setViewStatsClickCallback(function(){
            view.togglePane("stats");
        });
        
        // this is the functionality to start a new game
        view.setNewGameClickCallback(function(){
            /*
             * there were many features that had to be reset when a new game was started. Firstly, the
             * settings menu must be closed. Then, the number of moves the user has left must be rest. 
             * 
             * As the AI moves pieces into their goal, a list develops to stop the AI from then moving those
             * pieces out of the goal. This list had to be reset. 
             */
            view.closeSettings();
            model.resetTurnCount();
            model.clearPiecesInGoalList();
            model.resetAIPlayersGoalLocation();
            view.resetMovesLeft();
            // make sure the model does not still store who won the last game
            if(model.hasPlayerWon() !== "no winner" ||
                    model.getWinner() !== "no winner"){
                model.setWinner("no winner");
                view.newGame();
            }
            
            // rescaling the board sets the piece back into their starting locations.
            view.scaleBoardToScreen(model.getScreenHeight(), model.getScreenWidth(), 0);
            model.setTestBoard(view.getScreenToBoardMap());
            
            // make sure the app knows that the first pieces to move are white.
            if(model.getCurrentPlayerColour() === "black"){ 
                console.log("resetting current player colour");
                model.setCurrentPlayerColour();
            }

            /*
             * the following lump of code makes the AI move first, if it is set to be player 1. 
             */
            if(model.getPlayerOneType() === "AI" ||
                    model.getPlayerTwoType() === "AI"){
                console.log("current colour: " + model.getCurrentPlayerColour());
                console.log("AI's colour: " + model.getAIColour());
                if(model.getCurrentPlayerColour() === model.getAIColour()){
                    console.log("AI should move first");
                    console.log("Has AI colour changed: " + model.getAIColour());
                    model.alterAISettings("AI v human");
                    model.checkAIType(model, "new game");
                    //console.log("about to get the id");

                    view.setSelectedPiece(view.getWhiteCircleCoordinates(model.getAIPieceIndex()),
                                             model.getCurrentPlayerColour());
                    var AI_move = model.getAIChoosenMove();
                    view.highlightAIMove(AI_move.getX(), AI_move.getY());
                    model.updateModelWithAIMove();
                    view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                    setTimeout(function() {
                         view.movePiece2(AI_move.getX(), AI_move.getY());
                         view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                         model.getDarkBoardColour(), model.getLightBoardColour());
                    }, 750);
                    model.resetForNextMove();
                }
            }
        });
        
        // opens the menu that shows the user the AI difficulty settings
        view.setAISettingsClickCallback(function() {
            view.togglePane("AI settings");
        });
        
        // sets the AI player to be the simple AI
        view.setSimpleAIClickCalback(function() {
            model.setAIType("simpleAI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("Easy");
            view.closeSettings();
        });
        
        // sets the AI player to be the medium AI
        view.setMediumAIClickCallback(function() {
            model.setAIType("mediumAI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("Medium");
            view.closeSettings();
        });
        
        // sets the AI player to be the hard AI
        view.setHardAIClickCallback(function(){
            model.setAIType("hardAI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("Hard");
            view.closeSettings();
        });
        
        // allows the user to change the game so that they are player 1 and the AI is player 2
        view.setHumanAIClickCallback(function(){
            model.alterAISettings("human v AI");
            // make sure the human player is set to player 1... incase player is signed in
            model.setHumanPlayer('player 1');
            view.setInfoBoxThree("Human v AI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("AI");
            
            /*
             * the following code has been added in case the user switched the AI to be player 2
             * in the middle of the game. This makes sure that the AI moves first if it is required
             * to do so. 
             */
            if(model.getAIColour() === model.getCurrentPlayerColour()){
                model.checkAIType(model);
                console.log("in side the if statement");
                view.setSelectedPiece(view.getBrownCircleCoordinates(model.getAIPieceIndex()),
                                         model.getCurrentPlayerColour());
                var AI_move = model.getAIChoosenMove();
                view.highlightAIMove(AI_move.getX(), AI_move.getY());
                model.updateModelWithAIMove();
                view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                setTimeout(function() {
                     view.movePiece2(AI_move.getX(), AI_move.getY());
                     // need to reset the board colour and the model, before the user can make their next turn
//                     var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
//                     AI_piece_moved.play();                        
                     view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                     model.getDarkBoardColour(), model.getLightBoardColour());
                }, 750);
                model.resetForNextMove();                
            }
            
            view.closeSettings();
        });
        
        // this sets the game to allow two human players to play against each other
        view.setHumanHumanClickcallback( function(){
            view.setInfoBoxThree("Human v Human");
            /*
             * this is the important line. Settings player 2 to be human means that the AI will not reposnd
             * to the user making a move. 
             */
            model.setPlayerTwoType("human");
            view.closeSettings();
        });
        
/*
 * The function commented below is the method in the controller which handles to
 * AI v AI games. It is repsonsible for calling the method in the model. To re-introduce
 * the AI v AI functionality in the code, uncomment this as well as the AIGame function 
 * in the model.
 */        
        
//        view.setAIAIClickCallback(function(){
//            console.log("simple AI vs. hard AI");
//            var winners = new Array();
//            view.closeSettings();
//            var player_1_wins = new Array();
//            var player_2_wins = new Array();
//            var draws = new Array();
//            
//            var all_player_1_wins = new Array();
//            var all_player_2_wins = new Array();
//            var all_draws = new Array();
//            
//            var count = 0;
//            var average_count = 0;
//            while(average_count < 4){
//                console.log("Test Count: " + average_count);
//                while (count < 500){
//                    console.log("Game Count: " + count);
//                    var winner = model.AIGame(model);
//
//                    winners.push(winner);
//                    if(winner === "player 1"){
//                        player_1_wins.push(winner);
//                    }
//                    else if(winner === "player 2"){
//                        player_2_wins.push(winner);
//                    }
//                    else if(winner === "draw"){
//                        draws.push(winner);
//                    }
//
//                    // reset the game
//                    view.closeSettings();
//                    model.resetTurnCount();
//                    model.clearPiecesInGoalList();
//                    if(model.hasPlayerWon() !== "no winner"){
//                        view.newGame();
//                    }
//                    view.scaleBoardToScreen(model.getScreenHeight(), model.getScreenWidth(), 0);
//                    model.setTestBoard(view.getScreenToBoardMap());
//                    count++;
//                 }
//                 all_player_1_wins.push(player_1_wins.length);
//                 all_player_2_wins.push(player_2_wins.length);
//                 all_draws.push(draws.length);
//                 average_count++;
//                 count = 0;
//                 player_1_wins = [];
//                 player_2_wins = [];
//                 draws = [];
//             }
//             
//             console.log("");
//             //console.log("All player 1 wins results: ");
//             var average_p1_wins = 0;
//             for(var i = 0; i < all_player_1_wins.length; i++){
//                 console.log("player 1 wins in block " + i + ": " + all_player_1_wins[i]);
//                 average_p1_wins += all_player_1_wins[i];
//             }
//             console.log("average wins for player 1: " + average_p1_wins/4);
//             
//             console.log("");
//             var average_p2_wins = 0;
//             for(var i = 0; i < all_player_2_wins.length; i++){
//                 console.log("player 2 wins in block " + i + ": " + all_player_2_wins[i]);
//                 average_p2_wins += all_player_2_wins[i];
//             }
//             console.log("average wins for player 2: " + average_p2_wins/4);
//             
//             console.log("");
//             var draws_average = 0;
//             for(var i = 0; i < all_draws.length; i++){
//                 console.log("draws in block " + i + ": " + all_draws[i]);
//                 draws_average += all_draws[i];
//             }
//             console.log("average number of draws: " + draws_average/4);
//             
//        });
        
        // this ised used to set the AI to player 1 and the user to player 2
        view.setAIHumanClickCallback(function(){
            view.setInfoBoxThree("AI v Human");
            model.alterAISettings("AI v human");
            model.setPlayerTwoType("AI");
            // make sure human player is player 2... incase there is a player signed in. 
            model.setHumanPlayer("player 2");
            //console.log("about to get the id");
            
            /*
             * the following lump of code ensures the AI plays first when it is required to do so
             */
            if(model.getAIColour() === model.getCurrentPlayerColour()){
                model.checkAIType(model);
                view.setSelectedPiece(view.getWhiteCircleCoordinates(model.getAIPieceIndex()),
                                         model.getCurrentPlayerColour());
                var AI_move = model.getAIChoosenMove();
                view.highlightAIMove(AI_move.getX(), AI_move.getY());
                model.updateModelWithAIMove();
                view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                setTimeout(function() {
                     view.movePiece2(AI_move.getX(), AI_move.getY());
                     // need to reset the board colour and the model, before the user can make their next turn
                     view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                     model.getDarkBoardColour(), model.getLightBoardColour());
                }, 750);
                model.resetForNextMove();                
            }
            view.closeSettings();
        });
        
        // calls the functionality to display the statistics to a user
        view.setPersonalStatsClickCallback( function(){
            // need to check if a player is logged in
            if(model.getLoggedIn()){
                //redirect to the stats page
                view.displayPersonalStats();
                var stats = model.validation(model.getLoggedInPlayer(), "retrieve stats");
                // call the view's function to set the stats text area's to hold the relevant info. 
                view.setStatsTextAreas(stats);
            }
            // if no user is logged in then report this to the user
            else{
                view.closeSettings();
                //console.log("reporting no logged in to user");
                view.reportErrorToUser("There is no logged in player to get stats for", "game");
            }
        });
        
        // this displays the sign up / login in page to the suer
        view.setSignUpClickCallback(function(){
            //console.log("this is where we call the sign up screen");
            view.displaySignUpPage();
        });
        
        /* this is where the controller calls the method in the view to give the actual
         * sign up button it's callback
         */
        view.setSignUpButtonClickCallback(function(){
           var user_details = view.getSignUpDetails(); 
           /*
            * Need to pass details to the model, which can call a helper class that does validation
            * and then if all details are okay, calls the php to sign up the user to the app
            */
           var status = model.validation(user_details, "sign up");
           // only return to the board if the sign up was sucessful
           if(status){
               view.returnToBoard("sign_up");
               model.setSignedIn(true);
               model.setLoggedInPlayer(view.getLoggedInPlayerName());
           }
           // if unsuccessful report to the user
           else{
               view.reportErrorToUser("Sign up unsuccessful. Please try again", "login");
           }
           // reset the sign up textarea's
           view.resetSignUpFields();
        });
        
        // this is the functionality for the actual login button
        view.setLoginButtonClickCallback(function(){
            var login_details = view.getLoginDetails();
            /*
             * Need to pass details to the model, which calls helper class to do validation and
             * then perform the logging in. 
             */
            var status = model.validation(login_details, "login");
            if(status){
                view.returnToBoard("sign_up");
                // set that a player is signed in
                model.setSignedIn(true);
                model.setLoggedInPlayer(view.getLoggedInPlayerName());
            }
            // if unsuccessful report to the user
            else{
                view.reportErrorToUser("Login unsuccessful. Please try again.", "login");
            }
            // reset the textarea's for login
            view.resetLoginFeilds();           
        });
        
        // this is the back button on the stats page that navigates back to the game board
        view.setStatsBackButtonClickCallback( function(){
            view.returnToBoard();
        });
        
        // this is the back button on the sign up page that navigates back to the game board
        view.setSignUpBackButtonClickCallback( function(){
            //console.log("the button has been clicked");
            view.returnToBoard();
        });
        
        // this is the back button on help page that navigated back to the game board
        view.setHelpBackButtonClickCallback( function(){
            view.returnToBoard();
        });
        
        // perform functionality to change board colours to cream and brown
        view.setCreamAndBrownButtonClickCallback( function() {
            model.setPlayer1Colour("rgb(255, 235, 205)");
            model.setPlayer2Colour("rgb(92, 64, 51)");
            model.setDarkBoardColour("rgb(130, 72, 21)");
            model.setLightBoardColour("rgb(255, 211, 155)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
        
        // perform functionality to change board colours to red and black
        view.setRedAndBlackButtonClickCallback( function() {
            //console.log("red and balck has been clicked");
            model.setPlayer1Colour("rgb(255, 55, 55)");
            model.setPlayer2Colour("rgb(87, 87, 87)");
            model.setDarkBoardColour("rgb(0, 0, 0)");
            model.setLightBoardColour("rgb(182, 32, 32)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
        
        // perform functionality to change board colours to purple and yellow
        view.setYellowAndPurpleButtonClickCallback( function() {
            //console.log("purple and yellow has been clicked");
            model.setPlayer1Colour("rgb(218, 223, 72)");
            model.setPlayer2Colour("rgb(175, 127, 208)");
            model.setDarkBoardColour("rgb(138, 0, 230)");
            model.setLightBoardColour("rgb(247, 255, 0)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
        
        // perform functionality to change board colours to  blue and white
        view.setWhiteAndBlueButtonClickCallback( function() {
            model.setPlayer1Colour("rgb(235, 240, 255)");
            model.setPlayer2Colour("rgb(72, 229, 240)");
            model.setDarkBoardColour("rgb(0, 128, 255)");
            model.setLightBoardColour("rgb(255, 255, 255)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
        
    /*
     * This is one of the function that was remarked about at the top of the file. This really should be in
     * the model, however there are two reasons why it has been kept in here.
     * 
     *      1) At early stage of development, it made sense to keep this here because its functionality was
     *         origionally only going to handle the result of one of the circles being clicked. However, I didn't
     *         want to have to type this 32 times because it would have been inefficient. therefore, I thought it 
     *         would be smart to use this function as a helper method. 
     *      2) After realising it really should have been in the model, too much of the functionality of the app
     *         was working as desried. Moving it to the model would have caused issues passing necessary information 
     *         to the view, such as displaying the possible moves.
     *         
     * Therefore, for these two reasons this was kept in the controller, even though it is not the ideal place for it. 
     */
    this.performPieceSelection = function(){ 
        // if there is a piece selected, highlight in the view
            if(view.getSelectedPiece() !== "none"){
                view.highlightSelectedPiece();
                var current_piece = view.getSelectedPiece();
                var id = current_piece.attributes.id.value,
                    screen_to_board_map = view.getScreenToBoardMap(),
                    x_coord = 0,
                    y_coord = 0;
                moves = [];
                for(var i = 0; i < 8; i++){
                    for(var j = 0; j < 8; j++){
                        if(screen_to_board_map[i][j] !== undefined){
                            if(screen_to_board_map[i][j][0].attributes.id.value === id){
                                x_coord = i;
                                y_coord = j;
                            }
                        }
                    }
                }
                console.log("selected piece coords: " + x_coord + "," + y_coord);
                
                //call the funtionality in the model to find the available moves for the selected piece.
                moves = model.findMoves2(x_coord, y_coord);
                if(model.wasFindMovesSuccessful()){
                    /*
                     * if finding the moves was successful, this for loop is used to then
                     * call the function in the view to highlight to possible moves. 
                     */
                    for(var i = 0; i < moves.length; i++){
                        var x_coord = moves[i].getX(),
                            y_coord = moves[i].getY();
                        view.updateBoardWithMoves2(x_coord, y_coord);
                    }
                }
                // if the finding of moves was unsuccessful inform the user. 
                else{
                    var colour = model.getCurrentPlayerColour();
                    view.reportErrorToUser("It is " + colour + "s turn to move", "game");
                    //view.fadeInfoBox();
                }
            }
            // reset the board colours if there is no selected piece
            else{
                view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            }
        };
        
        /*
         * This is the second function that should have been in the model. This function was placed in the
         * controller for similar reasons as performPieceSelection() was. Initially this was put in the
         * controller because it was meant to be a helper method for what happened upon the selection of
         * a square. 
         * 
         * The function is also very long, and ideally should have been split into more than one function
         * within the model. 
         */
        this.handleMovePiece = function() {                     
           var square_x = square[0];
           var square_y = square[1];
           console.log("new x and y coords: " + square_x + "," + square_y);
           // if the model manages to successful more a piece, then move it in the view also
           if(model.movePiece(square_x, square_y)){           
                view.movePiece2(model.getNewX(), model.getNewY());
            }
            else{
                // if unsucesfful in the model, then report possible errors to the user
                if(view.getSelectedPiece() === "none"){
                    view.reportErrorToUser("Please select a piece first", "game");
                }
                else{
                    view.reportErrorToUser("Not a valid move for the selected piece", "game");
                }
                
               return;
            }
            // when a move has been made successfully, un-highlight the piece and moves in the view
           if(view.wasMoveSuccessful()){
                view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
                model.resetForNextMove();
           }
           
           var is_game_over = model.hasPlayerWon();
           //console.log(is_game_over);
           
           // this is how the end of the game is checked for, i.e. has a player won. 
           if(is_game_over !== "no winner"){
               // might change game to game_over
               
               /* want to put a transparent div over the screen, that offers option to start new game
                * advantage of doing this is that it will stop the players from being able to move the
                * elements on the board after someone has won. 
                */
               view.endGame();
               
               // if a player is signed in want to update database when a player wins
               if(model.getSignedIn()){
                   var winner;
                   var player_name = model.getLoggedInPlayer();
                   if(is_game_over === "player 1"){
                       winner = view.getPlayerOne();
                   }
                   else{
                       winner = view.getPlayerTwo();
                   }
           
                   var details = [player_name, winner, model.getWinner(), model.getHumanPlayer()];
                   
                   // this passes the information to the validation to update the stats for the logged in player
                   model.validation(details, "stats");
               }
               
               // user the error box to inform the user which player has won
               view.reportErrorToUser(is_game_over + " is the winner", "game");
           }
           else{
               /*
                * if the game is not over, i.e. no player has won, and the AI is player 2, then make the
                * AI make its move. 
                */
                if(model.getPlayerTwoType() === "AI"){
                   model.checkAIType(model);
                   
                   // set the selected piece for when the AI player is using the brown peices
                   if(model.getAIColour() === "black"){
                        view.setSelectedPiece(view.getBrownCircleCoordinates(model.getAIPieceIndex()),
                                                 model.getCurrentPlayerColour());
                   }
                   // else set the piece for when the AI uses the white pieces
                   else{
                       view.setSelectedPiece(view.getWhiteCircleCoordinates(model.getAIPieceIndex()),
                                                 model.getCurrentPlayerColour());
                   }
                   var AI_move = model.getAIChoosenMove();
                   // this is the dode to highliht the board with the AI's selected piece and chosen move
                   view.highlightAIMove(AI_move.getX(), AI_move.getY());
                   model.updateModelWithAIMove();
                   view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                   setTimeout(function() {
                       // after the highlighting of the piece, the AI's piece is actually moved
                        view.movePiece2(AI_move.getX(), AI_move.getY());
                        view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
                   }, 750);
                   
                   // this resets the model, ready for the other player to make its move
                   model.resetForNextMove();
                   
                   // need to check if by making its move the AI has won
                   var has_AI_won = model.hasPlayerWon();
                   // if the AI has won, inform the user and end the game
                   if(has_AI_won !== "no winner"){
                       view.endGame();
                       view.reportErrorToUser(has_AI_won + " is the winner", "game");
                       if(model.getSignedIn()){
                            var winner;
                            var player_name = model.getLoggedInPlayer();
                            if(is_game_over === "player 1"){
                                winner = view.getPlayerOne();
                            }
                            else{
                                winner = view.getPlayerTwo();
                            }
                            var details = [player_name, winner, model.getWinner(), model.getHumanPlayer()];
                            // pass the details on to the validation, to update the statistics as necessary
                            model.validation(details, "stats");
                      }
                   }
                }
            }
            
            // this section of code handles the game running for a finite number of moves. 
            var turn_count = model.getTurnCount();
            // to make the game shorter or longer, change the number within the if below
            if(turn_count > 78){     
                /*
                 * When this occurs need to count the pieces which have reached their possible
                 * goal locations, to find out which player has won. 
                 */
                var winner = model.findWinnerAfterStalemate();
                console.log(winner);
                var game_winner;
                // the below conditions return the value of which player wins 
                if(winner === "player 1"){
                    game_winner = "player 1 wins";
                }
                else if(winner === "player 2"){
                    game_winner = "player 2 wins";
                }
                else if(winner === "draw"){
                    console.log("no winner");
                    game_winner = "players draw";
                }
                // create a message to infrom the user of the result of the game. 
                var message_to_user = "No moves remaining: " + game_winner;
                view.reportErrorToUser(message_to_user, "stalemate");
                view.endGame();
            }
            else{
                // this increases the turn count (for the if statment)
                model.incrementTurnCount();
                // this updates the display to inform the user of the number of moves left
                view.decrementMovesLeft();
            }
        };
    };
}

/* 
 * this is the intial aspect of the program that creates the controller,  * 
 * which subsequently creates the model and view
 */
var controller = new Controller();
window.addEventListener("load", controller.init, false);



