/*jslint node: true, browser: true */

"use strict";
function testController(){
     var test_view = new testView(),
             test_model = new testModel(),
             moves = new Array();
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
        
        
        test_view.setWhiteCircleOneClickCallback(function() {
            test_view.setSelectedPiece(test_view.getCircleOne());
            var x = test_view.getSelectedPieceX();
            var y = test_view.getCircleOne().attributes.cy.value; 
            
            console.log(x);
            
            x=parseInt((x/100)-1);
            y=parseInt((y/100)-1);
            
            console.log("x being passed: " + x);
            
            moves = test_model.findMoves2(x,y);
            
            console.log("moves length " + moves.length);
            for(var i = 0; i < moves.length; i++){
                var x_coord = moves[i].getX(),
                    y_coord = moves[i].getY(),
                    toUpdate = "" + x_coord + "" + y_coord,
                    colour = test_model.getCurrentPlayerColour();
                    //console.log(toUpdate);
                    
                test_view.updateBoardWithMoves(toUpdate, colour);
            }
        });
        
        test_view.setCircleTwoClickCallBack(function() {
            test_view.setSelectedPiece(test_view.getCircleTwo());
            var x = test_view.getCircleTwo().attributes.cx.value;
            var y = test_view.getCircleTwo().attributes.cy.value;
            
            x=parseInt((x/100)-1);
            y=parseInt((y/100)-1);
            moves = test_model.findMoves2(x,y);
            
            console.log("moves length " + moves.length);
            for(var i = 0; i < moves.length; i++){
                var x_coord = moves[i].getX(),
                    y_coord = moves[i].getY(),
                    toUpdate = "" + x_coord + "" + y_coord;
                    test_view.updateBoardWithMoves(toUpdate);
            }
        });
    };

}

var controller = new testController();
window.addEventListener("load", controller.init, false);



