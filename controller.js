/*jslint node: true, browser: true */

"use strict";
function UgolkiController(){
    var model = new UgolkiModel(),
        view = new UgolkiView();

    this.init = function(){
        view.setCircleClickCallback(function (){
            model.setCircle(view.getCircleXValue(), view.getCircleYValue());
        });
        
        view.setSquareClickCallback(function (){
            console.log(model.getCurrentXCoord());
            if(parseInt(model.getCurrentXCoord()) > 0){
                var new_x = model.getNewX(view.getSquare());
                var new_y = model.getNewY(view.getSquare());
                view.repositionCircle(new_x, new_y);
            }
            else{
                console.log('select circle first');
            }
        });
        
        view.setTestButtonCallback(function(){
           //console.log("test button has been clicked");
           model.setCurrentPage("Test Page");
           view.setPage("Test Page");
        });
        
        view.setTestButtonTwoCallBack(function() {
            model.setCurrentPage("Test Page 2");
            view.setPage("Test Page 2");
        })
        
        view.setNewGameButtonCallback( function() {
            model.setCurrentPage("New Game");
            view.setPage("New Game");
        });
        
        view.setTwoByTwoButtonCallback( function() {
           /*
            * need to create a method in the model that is responisble for
            * making a representation of the game board
            */ 
           model.setCurrentPage("Game Board");
           view.setPage("Game Board");
           model.makeGameBoard(4);
           view.drawBasicBoard(model.getBoardRepresentation().length);
        });                
    };   
}

var UgolkiController = new UgolkiController();
window.addEventListener("load", UgolkiController.init, false);


