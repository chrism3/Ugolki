/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */


// one thing I might do is make an AI class and have it with all the repeated methods. 

function mediumAI(){
    
    var board;
    
    // this is the function to find all of the AI's moves
    this.findAllMoves = function(pieces, board_rep){
        board = board_rep;
        var possible_moves = new Array();
        var AI_moves = new findMoves();
        AI_moves.init(board);
        
        for(var i = 0; i < pieces.length; i++){
            var current_piece = pieces[i];
            var x_coord = current_piece.getXCoord();
            var y_coord = current_piece.getYCoord();
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;            
            AI_moves.moveRight(right, y_coord, current_piece);
            AI_moves.moveLeft(left, y_coord, current_piece);
            AI_moves.moveUp(above, x_coord, current_piece);
            AI_moves.moveDown(below, x_coord, current_piece);
            console.log(current_piece);
            AI_moves.multipleJump3(x_coord, y_coord, current_piece);
        }
        possible_moves = AI_moves.getPossibleMoves();
        console.log("number of moves possible " + possible_moves.length);
        
        this.evalAllMoves(possible_moves);
    };      

}


