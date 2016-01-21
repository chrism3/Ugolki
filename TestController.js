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
        
        test_view.square27ClickCallback(function(){
           square = test_view.getSquareCoordinates(27);
           handleMovePiece();
        });
        
        test_view.square28ClickCallback(function(){
           square = test_view.getSquareCoordinates(28);
           handleMovePiece();
        });
        
        // call all functions to add event listeners to the white piece in the view
        test_view.setWhiteCircle1ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle1());
            performPieceSelection();
        });
        test_view.setWhiteCircle2ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle2());
            performPieceSelection();
        });
        test_view.setWhiteCircle3ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle3());
            performPieceSelection();
        });
        test_view.setWhiteCircle4ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle4());
            performPieceSelection();
        });
        test_view.setWhiteCircle5ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle5());
            performPieceSelection();
        });
        test_view.setWhiteCircle6ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle6());
            performPieceSelection();
        });
        test_view.setWhiteCircle7ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle7());
            performPieceSelection();
        });
        test_view.setWhiteCircle8ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle8());
            performPieceSelection();
        });
        test_view.setWhiteCircle9ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle9());
            performPieceSelection();
        });
        test_view.setWhiteCircle10ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle10());
            performPieceSelection();
        });
        test_view.setWhiteCircle11ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle11());
            performPieceSelection();
        });
        test_view.setWhiteCircle12ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircle12());
           performPieceSelection();
        });
        test_view.setWhiteCircle13ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle13());
            performPieceSelection();
        });
        test_view.setWhiteCircle14ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle14());
            performPieceSelection();
        });
        test_view.setWhiteCircle15ClickCallback(function() {
            test_view.setSelectedPiece(test_view.getWhiteCircle15());
            performPieceSelection();
        });
        test_view.setWhiteCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircle16());
           performPieceSelection();
        });
        
        test_view.setBrownCircle1ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle1());
           performPieceSelection();
        });
        test_view.setBrownCircle2ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle2());
           performPieceSelection();
        });
        test_view.setBrownCircle3ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle3());
           performPieceSelection();
        });
        test_view.setBrownCircle4ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle4());
           performPieceSelection();
        });
        test_view.setBrownCircle5ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle5());
           performPieceSelection();
        });
        test_view.setBrownCircle6ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle6());
           performPieceSelection();
        });
        test_view.setBrownCircle7ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle7());
           performPieceSelection();
        });
        test_view.setBrownCircle8ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle8());
           performPieceSelection();
        });
        test_view.setBrownCircle9ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle9());
           performPieceSelection();
        });
        test_view.setBrownCircle10ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle10());
           performPieceSelection();
        });
        test_view.setBrownCircle11ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle11());
           performPieceSelection();
        });
        test_view.setBrownCircle12ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle12());
           performPieceSelection();
        });
        test_view.setBrownCircle13ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle13());
           performPieceSelection();
        });
        test_view.setBrownCircle14ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle14());
           performPieceSelection();
        });
        test_view.setBrownCircle15ClickCallBack(function() {
           test_view.setSelectedPiece(test_view.getBrownCircle15());
           performPieceSelection();
        });
        test_view.setBrownCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getBrownCircle16());
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
           test_view.resetDefaultBoardColours();
        };
    };
}


var controller = new testController();
window.addEventListener("load", controller.init, false);



