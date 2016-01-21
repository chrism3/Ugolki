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
        
        test_view.squareOneClickCallback(function() {
            var square_x = test_view.getSquareOne().attributes.x.value;
            var square_y = test_view.getSquareOne().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareTwoClickCallback(function() {
            var square_x = test_view.getSquareTwo().attributes.x.value;
            var square_y = test_view.getSquareTwo().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareThreeClickCallback(function() {
            var square_x = test_view.getSquareThree().attributes.x.value;
            var square_y = test_view.getSquareThree().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareFourClickCallback(function() {
            var square_x = test_view.getSquareFour().attributes.x.value;
            var square_y = test_view.getSquareFour().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareFiveClickCallback(function() {
            var square_x = test_view.getSquareFive().attributes.x.value;
            var square_y = test_view.getSquareFive().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareSixClickCallback(function() {
            var square_x = test_view.getSquareSix().attributes.x.value;
            var square_y = test_view.getSquareSix().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareSevenClickCallback(function() {
            var square_x = test_view.getSquareSeven().attributes.x.value;
            var square_y = test_view.getSquareSeven().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareEightClickCallback(function() {
            var square_x = test_view.getSquareEight().attributes.x.value;
            var square_y = test_view.getSquareEight().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        test_view.squareNineClickCallback(function() {
            var square_x = test_view.getSquareNine().attributes.x.value;
            var square_y = test_view.getSquareNine().attributes.y.value;
            square_x=parseInt((square_x-50)/100);
            square_y=parseInt((square_y-50)/100);
            test_model.movePiece(square_x, square_y);
            var x = test_model.getNewX();
            var y = test_model.getNewY();
            test_view.movePiece(x, y);
        });
        
        test_view.square27ClickCallback(function(){
           console.log("is square 27 being called");
           square = test_view.getSquare27ScreenMap();
           console.log(square.length);
           console.log(square[0]);
           console.log(square[1]);
           handleMovePiece();
        });
        
        test_view.square28ClickCallback(function(){
           //console.log("square 28 clicked");
           square = test_view.getSquare28ScreenMap();
           handleMovePiece();
        });
        
        
        test_view.setWhiteCircleOneClickCallback(function() {
            test_view.setSelectedPiece(test_view.getCircleOne());
            performPieceSelection();
            
            
//            var x = test_view.getSelectedPieceX();
//            var y = test_view.getCircleOne().attributes.cy.value; 
//            
//            console.log(x);
//            
//            x=parseInt((x/100)-1);
//            y=parseInt((y/100)-1);
//            
//            console.log("x being passed: " + x);
//            
//            moves = test_model.findMoves2(x,y);
//            
//            console.log("moves length " + moves.length);
//            for(var i = 0; i < moves.length; i++){
//                var x_coord = moves[i].getX(),
//                    y_coord = moves[i].getY(),
//                    toUpdate = "" + x_coord + "" + y_coord,
//                    colour = test_model.getCurrentPlayerColour();
//                    //console.log(toUpdate);
//                    
//                test_view.updateBoardWithMoves(toUpdate, colour);
//            }
        });
        test_view.setWhiteCircle12ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircle12());
           performPieceSelection();
        });
        test_view.setWhiteCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getWhiteCircle16());
           performPieceSelection();
        });
        
        test_view.setBrownCircle16ClickCallback(function (){
           test_view.setSelectedPiece(test_view.getBrownCircle16());
           //console.log("brown 16 clicked");
           performPieceSelection();
        });
       
        test_view.setCircleTwoClickCallBack(function() {
            test_view.setSelectedPiece(test_view.getCircleTwo());
            var x = test_view.getCircleTwo().attributes.cx.value;
            var y = test_view.getCircleTwo().attributes.cy.value;
            
            x=parseInt((x/100)-1);
            y=parseInt((y/100)-1);
            moves = test_model.findMoves2(x,y);
            
            //console.log("moves length " + moves.length);
            for(var i = 0; i < moves.length; i++){
                var x_coord = moves[i].getX(),
                    y_coord = moves[i].getY(),
                    toUpdate = "" + x_coord + "" + y_coord;
                    test_view.updateBoardWithMoves(toUpdate);
            }
        });
        
    this.performPieceSelection = function(){
        /*
         * Check the current piece colour here, not in model. If it is not the 
         * turn of the colour of piece that has been selected, can therefore bring
         * up a pop up box informing the user it isn't their turn
         */

            test_view.highlightSelectedPiece();
            var current_piece = test_view.getSelectedPiece();
            var id = current_piece.attributes.id.value,
                screen_to_board_map = test_view.getScreenToBoardMap(),
                x_coord = 0,
                y_coord = 0;

       // console.log(screen_to_board_map[0][7][0].attributes.id.value);
            moves = [];
            test_view.resetDefaultBoardColours();
           // console.log("length of moves: " + moves.length);
            for(var i = 0; i < 8; i++){
                for(var j = 0; j < 8; j++){
                    if(screen_to_board_map[i][j] !== undefined){
                        if(screen_to_board_map[i][j][0].attributes.id.value === id){
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



