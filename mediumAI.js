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
            this.decideBestMove(good_moves, bad_moves, AI, pieces);                         
    }; 
    
    // this is how the better AI selects it's move
    this.decideBestMove = function(good_moves, bad_moves, AI, pieces){
        // need to make sure there is a valid target
        this.updateTarget(AI);
        //console.log("best move: " + good_moves[0][0]);
        var dls_moves = new Array();
        var best_index = 0;
        var piece_to_move; 
        if(good_moves.length > 0){
            var best_eval = good_moves[0][1];
            for(var i = 1; i < good_moves.length; i++){
                var eval = good_moves[i][1];
                //console.log("check if " + eval + " is less than " + best_eval);
                if(eval < best_eval){
                   // console.log("it is");
                    best_index = i;
                    best_eval = eval;
                }

            }
            
            //console.log("best index: " + best_index);
            //console.log("best eval: " + best_eval);
            this.setChoosenMove(good_moves[best_index][0]);
            piece_to_move = good_moves[best_index][0].getPieceToMove();
            //this.setSelectedPieceIndex(piece_to_move.getPieceId());
        }
        else{
            var best_eval = bad_moves[0][1];
            var depth_moves;
            for(var i = 0; i < bad_moves.length; i++){
                depth_moves = AI.dls(0, bad_moves[best_index][0], pieces, null);
                for(var i = 0; i < depth_moves.length; i++){
                    dls_moves.push(depth_moves[i]);
                }
            }
            console.log(depth_moves.length);
        }
        
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());
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


