/*jslint node: true, browser: true */

"use strict";
function testController(){
     var test_view = new testView(),
     test_model = new testModel(),
     moves = new Array(),
     square = new Array();
     //test_model.init();
     test_model.setScreenSize();             
     /*
      * needs to know number of squares per row, may be able to pass in a value later, 
      * currently it is hard coded in scaleBoardToScreen
     */
     test_view.scaleBoardToScreen(test_model.getScreenHeight(), test_model.getScreenWidth(), 0);
     test_model.setTestBoard(test_view.getScreenToBoardMap());


    this.init = function() {
        
//        test_view.whiteCirclesClickCallback(function() {
//           console.log("white circle clicked");
//        });
        
        test_view.square1ClickCallback(function() {
//            var square_x = test_view.getSquareOne().attributes.x.value;
//            var square_y = test_view.getSquareOne().attributes.y.value;
//            square_x=parseInt((square_x-50)/100);
//            square_y=parseInt((square_y-50)/100);
//            test_model.movePiece(square_x, square_y);
//            var x = test_model.getNewX();
//            var y = test_model.getNewY();
//            test_view.movePiece(x, y);
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
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_1"));
            performPieceSelection();
        });
        test_view.setWhiteCircle2ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_2"));
            performPieceSelection();
        });
        test_view.setWhiteCircle3ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_3"));
            performPieceSelection();
        });
        test_view.setWhiteCircle4ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_4"));
            performPieceSelection();
        });
        test_view.setWhiteCircle5ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_5"));
            performPieceSelection();
        });
        test_view.setWhiteCircle6ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_6"));
            performPieceSelection();
        });
        test_view.setWhiteCircle7ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_7"));
            performPieceSelection();
        });
        test_view.setWhiteCircle8ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_8"));
            performPieceSelection();
        });
        test_view.setWhiteCircle9ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_9"));
            performPieceSelection();
        });
        test_view.setWhiteCircle10ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_10"));
            performPieceSelection();
        });
        test_view.setWhiteCircle11ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_11"));
            performPieceSelection();
        });
        test_view.setWhiteCircle12ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_12"));
           performPieceSelection();
        });
        test_view.setWhiteCircle13ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_13"));
            performPieceSelection();
        });
        test_view.setWhiteCircle14ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_14"));
            performPieceSelection();
        });
        test_view.setWhiteCircle15ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_15"));
            performPieceSelection();
        });
        test_view.setWhiteCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates("white_circle_16"));
           performPieceSelection();
        });
        
        test_view.setBrownCircle1ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_1"));
           performPieceSelection();
        });
        test_view.setBrownCircle2ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_2"));
           performPieceSelection();
        });
        test_view.setBrownCircle3ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_3"));
           performPieceSelection();
        });
        test_view.setBrownCircle4ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_4"));
           performPieceSelection();
        });
        test_view.setBrownCircle5ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_5"));
           performPieceSelection();
        });
        test_view.setBrownCircle6ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_6"));
           performPieceSelection();
        });
        test_view.setBrownCircle7ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_7"));
           performPieceSelection();
        });
        test_view.setBrownCircle8ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_8"));
           performPieceSelection();
        });
        test_view.setBrownCircle9ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_9"));
           performPieceSelection();
        });
        test_view.setBrownCircle10ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_10"));
           performPieceSelection();
        });
        test_view.setBrownCircle11ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_11"));
           performPieceSelection();
        });
        test_view.setBrownCircle12ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_12"));
           performPieceSelection();
        });
        test_view.setBrownCircle13ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_13"));
           performPieceSelection();
        });
        test_view.setBrownCircle14ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_14"));
           performPieceSelection();
        });
        test_view.setBrownCircle15ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_15"));
           performPieceSelection();
        });
        test_view.setBrownCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates("brown_circle_16"));
           performPieceSelection();
        });
        
        // this calls the methods to add the event listener to the buttons in the menu
        test_view.setMenuImgClickCallback(function (){
            console.log("menu option clicked");
            test_view.toggleSettingsPanel();
        });
        test_view.setPlayer2OptionsClickCallback(function (){
            console.log("player 2 button was clicked");
            test_view.updateSettingsPanel("player 2");
        });
        test_view.setHumanPlayerClickCallback(function() {
            console.log("human player button was clicked");
            test_model.setPlayerTwoType("human");
            test_view.updateSettingsPanel("human player");
        });
        test_view.setAIPlayerClickCallback(function() {
            console.log("AI player was clicked");
            test_view.updateSettingsPanel("AI player");
        });
        test_view.setSimpleAIClickCalback(function() {
            console.log("simple AI clicked");
            test_model.setAIType("simpleAI");
            test_model.setPlayerTwoType("AI");
            test_view.updateSettingsPanel("AI difficulty");
        });
        
    // this should probably be in the model
    this.performPieceSelection = function(){
        /*
         * Check the current piece colour here, not in model. If it is not the 
         * turn of the colour of piece that has been selected, can therefore bring
         * up a pop up box informing the user it isn't their turn
         */
        
            test_view.resetDefaultBoardColours();// call this incase there are all ready squares coloured
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
                test_view.reportErrorToUser("It is " + colour + "s turn to move");
                test_view.fadeInfoBox();
            }
        };
        
        // this should be in the model
        this.handleMovePiece = function() {                     
           var square_x = square[0];
           var square_y = square[1];
           //console.log("in handle move pieces: " + square_x + "   " + square_y);
           if(test_model.movePiece(square_x, square_y)){           
                test_view.movePiece2(test_model.getNewX(), test_model.getNewY());
            }
            else{
                console.log("need to selected a piece");
                test_view.reportErrorToUser("Please selected a piece first");
                test_view.fadeInfoBox();
                return;
            }
           if(test_view.wasMoveSuccessful()){
                test_view.resetDefaultBoardColours();
                test_model.resetForNextMove();
           }
           else{
               console.log("move not successful");
               test_view.reportErrorToUser("Not a valid move for the selected piece");
               test_view.fadeInfoBox();            
           }

           if(test_model.getPlayerTwoType() === "AI"){
              test_model.checkAIType();
              console.log("about to get the id");
              test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(test_model.getAIPieceIndex()));
              var AI_move = test_model.getAIChoosenMove();
              test_model.updateModelWithAIMove();
              test_view.movePiece2(AI_move.getX(), AI_move.getY());
              //test_view.highlightMovedAIPiece();
              // need to recall this... not sure if it will be necessary but it is just now
              test_model.resetForNextMove();              
           }
        };
    };
}


var controller = new testController();
window.addEventListener("load", controller.init, false);



