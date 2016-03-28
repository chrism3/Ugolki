/*jslint node: true, browser: true */

"use strict";
function Controller(){
     var view = new View(),
     model = new Model(),
     moves = new Array(),
     square = new Array();
     //model.init();
     model.setScreenSize(); 

     view.scaleBoardToScreen(model.getScreenHeight(), model.getScreenWidth(), 0);
     model.setTestBoard(view.getScreenToBoardMap());

     //var test_check = model.hasPlayerWon();
     //console.log(test_check);

    this.init = function() {
        
//        view.whiteCirclesClickCallback(function() {
//           console.log("white circle clicked");
//        });
        
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
        
        // call all functions to add event listeners to the white piece in the view
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
         * Every set...ClickCallback from here down is for the menu's and options, rather
         * than the ones needed for playing Ugolki. 
         */
       
        // this calls the methods to add the event listener to the buttons in the menu
        view.setMenuImgClickCallback(function (){
            //console.log("menu option clicked");
            //view.toggleSettingsPanel();
            //view.toggleGeneralSettings();
            //console.log(model.hasPlayerWon());
            //console.log(model.getWinner());
            if(model.hasPlayerWon() !== "no winner" ||
                    model.getWinner() !== "no winner"){
                view.alterEndGame();
            }
            view.setScreenToDisplay("general");
            view.toggleSettings(view.getScreenToDisplay());
        });
        view.setPlayerImgClickCallback(function (){
            //console.log("player 2 button was clicked");
            //view.tooglePlayerSettings();
            view.setScreenToDisplay("player");
            view.toggleSettings(view.getScreenToDisplay());
        });
        view.setColoursImgClickCallback(function (){
           //console.log("colours img was clicked"); 
           //view.toogleColourSettings();
            view.setScreenToDisplay("colour");
            view.toggleSettings(view.getScreenToDisplay());
        });
        view.setHelpImgClickCallback( function(){
            console.log("help has been clicked");
            view.showHelp();
        });
        view.setGameTypesClickCallback( function(){
           //console.log("game types have been clicked"); 
           view.togglePane("game types");
        });
        view.setStandardGameClickCallback( function(){
            model.setGameType("standard");
            view.setGameType("standard game");
            view.closeSettings();
        });
        view.setNoMutliJumpGameClickCallback( function(){
            model.setGameType("no multi jump");
            view.setGameType("no mutli jump");
            view.closeSettings();
        });
        view.setTowardGoalGameClickCallback( function(){
            model.setGameType("toward goal");
            view.setGameType("toward goal");
            view.closeSettings();
        });
        
        // need Ugolki Varations called here
        view.setViewStatsClickCallback(function(){
            view.togglePane("stats");
        });
        view.setNewGameClickCallback(function(){
            view.closeSettings();
            model.resetTurnCount();
            model.clearPiecesInGoalList();
            model.resetAIPlayersGoalLocation();
            view.resetMovesLeft();
            // make sure the model does not still store who won the last game
            //model.setWinner("no winner");
            if(model.hasPlayerWon() !== "no winner" ||
                    model.getWinner() !== "no winner"){
                model.setWinner("no winner");
                view.newGame();
            }
            view.scaleBoardToScreen(model.getScreenHeight(), model.getScreenWidth(), 0);
            model.setTestBoard(view.getScreenToBoardMap());
            //model.setCurrentPlayerColour();
            if(model.getCurrentPlayerColour() === "black"){ 
                console.log("resetting current player colour");
                model.setCurrentPlayerColour();
            }

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
                         // need to reset the board colour and the model, before the user can make their next turn
//                         var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
//                         AI_piece_moved.play();                        
                         view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                         model.getDarkBoardColour(), model.getLightBoardColour());
                    }, 750);
                    model.resetForNextMove();
                }
                else{
                    console.log("Player should move first");
                }
            }
            console.log("colour to move first: " + model.getCurrentPlayerColour());
        });
        
        // need View Statistics called here
        
//        view.setMoveOptionsClickCallback( function(){
//            //console.log("move options has been clicked");
//            // need to make code in the view that is responsible for toggling the buttons
//            view.togglePane("move options");
//        });
        
//        
//        these will be used eventually, not sure when i'll get round to them though
//        
//        view.setHumanPlayerClickCallback(function() {
//            console.log("human player button was clicked");
//            model.setPlayerTwoType("human");
//            view.updateSettingsPanel("human player");
//        });
//        view.setAIPlayerClickCallback(function() {
//            console.log("AI player was clicked");
//            view.updateSettingsPanel("AI player");
//        });

        view.setAISettingsClickCallback(function() {
            view.togglePane("AI settings");
        });
        view.setSimpleAIClickCalback(function() {
            //console.log("simple AI clicked");
            model.setAIType("simpleAI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("Easy");
            //view.updateSettingsPanel("AI difficulty");
            view.closeSettings();
        });
        view.setMediumAIClickCallback(function() {
            model.setAIType("mediumAI");
            model.setPlayerTwoType("AI");
            // need to change this to check which player is AI
            view.setPlayerTwo("Medium");
            view.closeSettings();
        });
        view.setHardAIClickCallback(function(){
            model.setAIType("hardAI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("Hard");
            view.closeSettings();
        });
        view.setHumanAIClickCallback(function(){
            model.alterAISettings("human v AI");
            // make sure the human player is set to player 1... incase player is signed in
            model.setHumanPlayer('player 1');
            view.setInfoBoxThree("Human v AI");
            model.setPlayerTwoType("AI");
            view.setPlayerTwo("AI");
            
            /*
             * the following code has been added in case the user switched the AI to be player 2
             * in the middle of the game. This makes sure that the AI moves first if it is required. 
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
        view.setHumanHumanClickcallback( function(){
            view.setInfoBoxThree("Human v Human");
            model.setPlayerTwoType("human");
            view.setPlayerTwo("Human");
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
        
        
        view.setAIHumanClickCallback(function(){
            view.setInfoBoxThree("AI v Human");
            model.alterAISettings("AI v human");
            model.setPlayerTwoType("AI");
            // make sure human player is player 2... incase there is a player signed in. 
            model.setHumanPlayer("player 2");
            //console.log("about to get the id");
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
//                     var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
//                     AI_piece_moved.play();                        
                     view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                     model.getDarkBoardColour(), model.getLightBoardColour());
                }, 750);
                model.resetForNextMove();                
            }
            view.closeSettings();
        });
        
        
        view.setPersonalStatsClickCallback( function(){
            //console.log("personal stats has been clicked");            
            // need to check if a player is logged in
            if(model.getLoggedIn()){
                // do something in the model
                //console.log("did this happen");
                //redirect to the stats page
                view.displayPersonalStats();
                var stats = model.validation(model.getLoggedInPlayer(), "retrieve stats");
                //console.log("in controller: " + stats.length);
                // call the view's function to set the stats text area's to hold the relevant info. 
                view.setStatsTextAreas(stats);
            }
            else{
                view.closeSettings();
                //console.log("reporting no logged in to user");
                view.reportErrorToUser("There is no logged in player to get stats for", "game");
            }
        });
        
        view.setSignUpClickCallback(function(){
            //console.log("this is where we call the sign up screen");
            view.displaySignUpPage();
        });
        
        /* this is where to controller calls the method in the view to give the actual
         * sign up button it's callback
         */
        view.setSignUpButtonClickCallback(function(){
           var user_details = view.getSignUpDetails(); 
           /*
            * Need to pass details to the model, which can call a helper class that does validation
            * and then if all details are okay, calls the php to sign up the user to the app
            */
           var status = model.validation(user_details, "sign up");
           //console.log(status);
           // only return to the board if the sign up was sucessful
           if(status){
               view.returnToBoard("sign_up");
               model.setSignedIn(true);
               model.setLoggedInPlayer(view.getLoggedInPlayerName());
           }
           else{
               // doesnt work yet, comment in HTML says why
               view.reportErrorToUser("Sign up unsuccessful. Please try again", "login");
           }
           // reset the sign up textarea's
           view.resetSignUpFields();
        });
        view.setLoginButtonClickCallback(function(){
            var login_details = view.getLoginDetails();
            /*
             * Need to pass details to the model, which calls helper method to do validation and
             * then perform the logging in. 
             */
            var status = model.validation(login_details, "login");
            if(status){
                view.returnToBoard("sign_up");
                // might not needed singed_in in model, could maybe use player name instead?
                model.setSignedIn(true);
                model.setLoggedInPlayer(view.getLoggedInPlayerName());
            }
            else{
                // doesnt work yet, comment in HTML says why
                view.reportErrorToUser("Login unsuccessful. Please try again.", "login");
            }
            // reset the textarea's for login
            view.resetLoginFeilds();           
        });
        
        view.setStatsBackButtonClickCallback( function(){
            view.returnToBoard();
        });
        
        view.setSignUpBackButtonClickCallback( function(){
            //console.log("the button has been clicked");
            view.returnToBoard();
        });
        view.setHelpBackButtonClickCallback( function(){
            view.returnToBoard();
        });
        
        // call code for the colour change buttons
        view.setCreamAndBrownButtonClickCallback( function() {
            model.setPlayer1Colour("rgb(255, 235, 205)");
            model.setPlayer2Colour("rgb(92, 64, 51)");
            model.setDarkBoardColour("rgb(130, 72, 21)");
            model.setLightBoardColour("rgb(255, 211, 155)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
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
        view.setWhiteAndBlueButtonClickCallback( function() {
            model.setPlayer1Colour("rgb(235, 240, 255)");
            model.setPlayer2Colour("rgb(72, 229, 240)");
            model.setDarkBoardColour("rgb(0, 128, 255)");
            model.setLightBoardColour("rgb(255, 255, 255)");
            view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            view.closeSettings();
        });
        
    // this should probably be in the model
    this.performPieceSelection = function(){ 
        /*
         * Check the current piece colour here, not in model. If it is not the 
         * turn of the colour of piece that has been selected, can therefore bring
         * up a pop up box informing the user it isn't their turn
         */
//        var selected_piece = new Audio('Sounds/piece_selected.wav');
//        selected_piece.play();
            //view.resetDefaultBoardColours();// call this incase there are all ready squares coloured
            if(view.getSelectedPiece() !== "none"){
                view.highlightSelectedPiece();
                var current_piece = view.getSelectedPiece();
                var id = current_piece.attributes.id.value,
                    screen_to_board_map = view.getScreenToBoardMap(),
                    x_coord = 0,
                    y_coord = 0;
                //console.log("in controller (performPieceSelection) the id of slected piece is: " + id);
                // console.log(screen_to_board_map[0][7][0].attributes.id.value);
                moves = [];
                //view.resetDefaultBoardColours();
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
                console.log("selected piece coords: " + x_coord + "," + y_coord);
                moves = model.findMoves2(x_coord, y_coord);
                if(model.wasFindMovesSuccessful()){
                    //console.log(moves.length);
                    for(var i = 0; i < moves.length; i++){
                        var x_coord = moves[i].getX(),
                            y_coord = moves[i].getY();
                        view.updateBoardWithMoves2(x_coord, y_coord);
                    }
                }
                else{
                    var colour = model.getCurrentPlayerColour();
                    view.reportErrorToUser("It is " + colour + "s turn to move", "game");
                    //view.fadeInfoBox();
                }
            }
            else{
                view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
            }
        };
        
        // this should be in the model
        this.handleMovePiece = function() {                     
           var square_x = square[0];
           var square_y = square[1];
//           var piece_moved = new Audio('Sounds/piece_moved.wav');
//           piece_moved.play();
           console.log("new x and y coords: " + square_x + "," + square_y);
           if(model.movePiece(square_x, square_y)){           
                view.movePiece2(model.getNewX(), model.getNewY());
            }
            else{
                //console.log("need to selected a piece");
                if(view.getSelectedPiece() === "none"){
                    view.reportErrorToUser("Please select a piece first", "game");
                }
                else{
                    view.reportErrorToUser("Not a valid move for the selected piece", "game");
                }
                
                //view.fadeInfoBox();
                return;
            }
           if(view.wasMoveSuccessful()){
                view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
                model.resetForNextMove();
           }
           
           var is_game_over = model.hasPlayerWon();
           //console.log(is_game_over);
           
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
                   console.log("winner is: " + model.getWinner());
                   console.log("huamn player is: " + model.getHumanPlayer());
                   var details = [player_name, winner, model.getWinner(), model.getHumanPlayer()];
                   
                   model.validation(details, "stats");
               }
               
               view.reportErrorToUser(is_game_over + " is the winner", "game");
           }
           else{
                if(model.getPlayerTwoType() === "AI"){
                   model.checkAIType(model);
                   //console.log("about to get the id");
                   if(model.getAIColour() === "black"){
                        view.setSelectedPiece(view.getBrownCircleCoordinates(model.getAIPieceIndex()),
                                                 model.getCurrentPlayerColour());
                   }
                   else{
                       view.setSelectedPiece(view.getWhiteCircleCoordinates(model.getAIPieceIndex()),
                                                 model.getCurrentPlayerColour());
                   }
                   var AI_move = model.getAIChoosenMove();
                   view.highlightAIMove(AI_move.getX(), AI_move.getY());
                   model.updateModelWithAIMove();
                   view.updateBoardWithMoves2(AI_move.getX(), AI_move.getY());
                   setTimeout(function() {
                        view.movePiece2(AI_move.getX(), AI_move.getY());
                        // need to reset the board colour and the model, before the user can make their next turn
//                        var AI_piece_moved = new Audio("Sounds/piece_moved.wav");
//                        AI_piece_moved.play();                        
                        view.resetDefaultBoardColours(model.getPlayer1Colour(), model.getPlayer2Colour(),
                                        model.getDarkBoardColour(), model.getLightBoardColour());
                   }, 750);
                   model.resetForNextMove();
                   
                   var has_AI_won = model.hasPlayerWon();
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

                            model.validation(details, "stats");
                      }
                   }
                }
            }
            
            var turn_count = model.getTurnCount();
            if(turn_count > 78){                
                var winner = model.findWinnerAfterStalemate();
                console.log(winner);
                var game_winner;
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
                console.log("Stalemate occured: " + game_winner);
                var message_to_user = "No moves remaining: " + game_winner;
                view.reportErrorToUser(message_to_user, "stalemate");
                view.endGame();
            }
            else{
                model.incrementTurnCount();
                view.decrementMovesLeft();
            }
        };
    };
}


var controller = new Controller();
window.addEventListener("load", controller.init, false);



