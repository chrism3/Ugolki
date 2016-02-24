/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */


// one thing I might do is make an AI class and have it with all the repeated methods. 

function mediumAI(){
    
    var board;
    
    this.mediumAI = function(pieces, board_rep){
            board = board_rep;
            var AI = new generalAI();            
            var all_moves = AI.evalAllMoves(AI.findAllMoves(pieces, board));
            var good_moves = all_moves[0];
            var bad_moves = all_moves[1];
    };     

}


