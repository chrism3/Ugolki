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
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(1));
            performPieceSelection();
        });
        test_view.setWhiteCircle2ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(2));
            performPieceSelection();
        });
        test_view.setWhiteCircle3ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(3));
            performPieceSelection();
        });
        test_view.setWhiteCircle4ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(4));
            performPieceSelection();
        });
        test_view.setWhiteCircle5ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(5));
            performPieceSelection();
        });
        test_view.setWhiteCircle6ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(6));
            performPieceSelection();
        });
        test_view.setWhiteCircle7ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(7));
            performPieceSelection();
        });
        test_view.setWhiteCircle8ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(8));
            performPieceSelection();
        });
        test_view.setWhiteCircle9ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(9));
            performPieceSelection();
        });
        test_view.setWhiteCircle10ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(10));
            performPieceSelection();
        });
        test_view.setWhiteCircle11ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(11));
            performPieceSelection();
        });
        test_view.setWhiteCircle12ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(12));
           performPieceSelection();
        });
        test_view.setWhiteCircle13ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(13));
            performPieceSelection();
        });
        test_view.setWhiteCircle14ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(14));
            performPieceSelection();
        });
        test_view.setWhiteCircle15ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(15));
            performPieceSelection();
        });
        test_view.setWhiteCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircleCoordinates(16));
           performPieceSelection();
        });
        
        test_view.setBrownCircle1ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(1));
           performPieceSelection();
        });
        test_view.setBrownCircle2ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(2));
           performPieceSelection();
        });
        test_view.setBrownCircle3ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(3));
           performPieceSelection();
        });
        test_view.setBrownCircle4ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(4));
           performPieceSelection();
        });
        test_view.setBrownCircle5ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(5));
           performPieceSelection();
        });
        test_view.setBrownCircle6ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(6));
           performPieceSelection();
        });
        test_view.setBrownCircle7ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(7));
           performPieceSelection();
        });
        test_view.setBrownCircle8ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(8));
           performPieceSelection();
        });
        test_view.setBrownCircle9ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(9));
           performPieceSelection();
        });
        test_view.setBrownCircle10ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(10));
           performPieceSelection();
        });
        test_view.setBrownCircle11ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(11));
           performPieceSelection();
        });
        test_view.setBrownCircle12ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(12));
           performPieceSelection();
        });
        test_view.setBrownCircle13ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(13));
           performPieceSelection();
        });
        test_view.setBrownCircle14ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(14));
           performPieceSelection();
        });
        test_view.setBrownCircle15ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(15));
           performPieceSelection();
        });
        test_view.setBrownCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getBrownCircleCoordinates(16));
           performPieceSelection();
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

        // console.log(screen_to_board_map[0][7][0].attributes.id.value);
            moves = [];
            //test_view.resetDefaultBoardColours();
           // console.log("length of moves: " + moves.length);
            for(var i = 0; i < 8; i++){
                for(var j = 0; j < 8; j++){
                    if(screen_to_board_map[i][j] !== undefined){
                        if(screen_to_board_map[i][j][0].attributes.id.value === id){
                            console.log("found circle with id " + id);
                            x_coord = i;
                            y_coord = j;
                        }
                        else{
                            //console.log("[" + i + "][" + j + "]");
                        }
                    }
                }
            }
            moves = test_model.findMoves2(x_coord, y_coord);
            //console.log(moves.length);
            for(var i = 0; i < moves.length; i++){
                var x_coord = moves[i].getX(),
                    y_coord = moves[i].getY();
                test_view.updateBoardWithMoves2(x_coord, y_coord);
            }
        };
        
        // this should be in the model
        this.handleMovePiece = function() {                     
           var square_x = square[0];
           var square_y = square[1];
           console.log("in handle move pieces: " + square_x + "   " + square_y);
           test_model.movePiece(square_x, square_y);
           test_view.movePiece2(test_model.getNewX(), test_model.getNewY());
           if(test_view.wasMoveSuccessful()){
                test_view.resetDefaultBoardColours();
                test_model.resetForNextMove();
           }
           else{
               // input prompt here to inform user move did not work
           }
        };
    };
}


var controller = new testController();
window.addEventListener("load", controller.init, false);



