/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function simpleAI() {
    
    // this method will be responsible for finding the move
    this.findBestMove = function(pieces_to_move){
        // first thing we want to do is find all of the valid moves.
        var possible_moves = new Array();
        var AI_moves = new findMoves();
        for(var i = 0; i < pieces_to_move.length; i++){
            var current_piece = pieces_to_move[i];
            var x_coord = current_piece.getXCoord();
            var y_coord = current_piece.getYCoord();
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;            
            AI_moves.moveRight(right, y_coord);
            AI_moves.moveLeft(left, y_coord);
            AI_moves.moveUp(above, x_coord);
            AI_moves.moveDown(below, x_coord);
            AI_moves.jumpRight(right, y_coord);
            AI_moves.jumpLeft(left, y_coord);
            AI_moves.jumpUp(above, x_coord);
            AI_moves.jumpDown(below, x_coord);
        }
        possible_moves = AI_moves.getPossibleMoves();
        console.log(possible_moves.length);
    };
    
    // this method will return the move to the model... to the controller... to the view
    this.getBestMove = function(){
        
    };
    
    
}
