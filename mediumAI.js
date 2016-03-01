/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */


// one thing I might do is make an AI class and have it with all the repeated methods. 

function mediumAI(){
    
    var board;
    var choosen_move;
    var piece_index;
    var origional_x;
    var origional_y;
    
    this.mediumAI = function(pieces, board_rep){
            board = board_rep;
            var AI = new generalAI();
            var all_moves = AI.evalAllMoves(AI.findAllMoves(pieces, board));
            //console.log(all_moves);
            var good_moves = all_moves[0];
            var bad_moves = all_moves[1];
            this.decideBestMove(good_moves, bad_moves, AI);                         
    }; 
    
    // this is how the better AI selects it's move
    this.decideBestMove = function(good_moves, bad_moves, AI){
        // need to make sure there is a valid target
        this.updateTarget(AI);
        
        var random_index = parseInt(Math.random()*good_moves.length);
        this.setChoosenMove(good_moves[random_index][0]);
        var random_piece = good_moves[random_index][0].getPieceToMove();
        this.setSelectedPieceIndex(random_piece.getPieceId());
        this.setAISelectedPieceXCoord(random_piece.getXCoord());
        this.setAISelectedPieceYCoord(random_piece.getYCoord());
    };
    
    this.updateTarget = function(AI){
//        console.log("target location contains: " + board_representation[this.getTargetX()][this.getTargetY()]);
//        if(board_representation[this.getTargetX()][this.getTargetY()] !== 0){
//            console.log(board_representation[this.getTargetX()][this.getTargetY()].getPieceColour());
//        }
        var target_free = false;
        do{
            // update "black" to be AI.getPieceColour() ?
            if(board[AI.getTargetX()][AI.getTargetY()] !== 0 &&
                    board[AI.getTargetX()][AI.getTargetY()].getPieceColour() === "black"){
                console.log("inside the if");
                var x = AI.getTargetX();
                var y = AI.getTargetY();
                
                if(y < 4){
                    AI.setTargetY(y + 1);
                }
                else{
                    AI.setTargetX(x + 1);
                    AI.setTargetY(0);
                }
                console.log("updating target");
            }
            else{
                target_free = true;
            }
        }
        while(!target_free);
    };
    
    
    this.setChoosenMove = function(move){
        choosen_move = move;
    };
    this.getChoosenMove = function(){
        return choosen_move;
    };
    this.getAIPieceIndex = function (){
        console.log("The index to be returned is: " + piece_index);
        return piece_index;
    };
    this.setSelectedPieceIndex = function(index){
        piece_index = index;
    };
        this.getAISelectedPieceXCoord = function(){
        return origional_x;
    };
    this.setAISelectedPieceXCoord = function(x){
        origional_x = x;
    };
    this.getAISelectedPieceYCoord = function(){
        return origional_y;
    };
    this.setAISelectedPieceYCoord = function(y){
        origional_y = y;
    };

}


