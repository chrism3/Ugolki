/*
 * this class will be used to do the leg work for the actual AI alogirthms. This class
 * has the evaluation functions, and the findMoves function so that the AI can just call them
 * and then suss out which is the best move. 
 */

function generalAI(){
    // genreally AI will be player 2, but would be nice to be able to swap it
    var AI_player = "player_2",
        board_representation,
        target_x = 0,
        target_y = 7; /* this is the target because player 2 is aiming to get to
                       * the bottom left hand corner. This is why the algorithm currently
                       * only works when the AI is player 2
                       */
    var AI_colour = "black";

    this.findAllMoves = function (pieces_to_move, board){
        board_representation = board;
        var possible_moves = new Array();
        var AI_moves = new findMoves();
//        var no_of_good_moves = 0;
//        var unfavoured_moves = new Array();
        AI_moves.init(board_representation);
        console.log(pieces_to_move.length);
        for(var i = 0; i < pieces_to_move.length; i++){
            //console.log(i);
            var current_piece = pieces_to_move[i];
            //console.log(current_piece);
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
     
     /*
      * need if statement to check if the mutli-jump rule is being played
      */
            
//            AI_moves.jumpRight(right, y_coord, current_piece);
//            AI_moves.jumpLeft(left, y_coord, current_piece);
//            AI_moves.jumpUp(above, x_coord, current_piece);
//            AI_moves.jumpDown(below, x_coord, current_piece);
            //console.log(current_piece);
            AI_moves.multipleJump3(x_coord, y_coord, current_piece);
        }
        possible_moves = AI_moves.getPossibleMoves();
        //console.log("number of moves possible " + possible_moves.length);
        return possible_moves;
        //this.evalAllMoves(possible_moves);
    };
    
    this.evalAllMoves = function(possible_moves){
        //var no_of_good_moves = 0;
        var good_moves = new Array();
        var bad_moves = new Array();
        var all_moves = new Array();
        //var eval_list = new Array();
        var current_eval = this.eval();
        //console.log("current_eval: " + current_eval);
        for(var i = 0; i < possible_moves.length; i++){
            //var current_piece = possible_moves[i].getPieceToMove();
            
//            for(var i = 0; i < possible_moves.length; i++){
//                console.log(possible_moves[i].getPieceToMove().getXCoord());
//            }
            
            // two variables needed to reset x and y after the move has been completed
            var x_to_reset = possible_moves[i].getPieceToMove().getXCoord();
            var y_to_reset = possible_moves[i].getPieceToMove().getYCoord();
            this.makeMove(possible_moves[i]);
            
            //var move_eval = this.eval(possible_moves[i].getX(), possible_moves[i].getY());
            var move_eval = this.eval();
            var new_eval = new Array();
            new_eval[0] = possible_moves[i];
            new_eval[1] = move_eval;
            //console.log("move eval: " + move_eval);
            all_moves.push(new_eval);
            if(current_eval >= move_eval){
                //no_of_good_moves++;
                good_moves.push(new_eval);
            }
            else{
                 bad_moves.push(new_eval);
            }
            
            
            this.undoMove(possible_moves[i], x_to_reset, y_to_reset);
        }
//        console.log("no of good moves: " + good_moves.length);
//        console.log("no of bad moves: " + bad_moves.length);
        
        /*
         * I am doing this because. Without doing a depth search (which is why my this will be the easy AI)
         * it is possible for the pieces to get to a corner and not move because the move eval is worse than
         * the current eval. Therefore, including this so that if we are nearing a low number of good moves, 
         * the AI will make a bad move and potentially open up some more good moves. Not entirely convinced
         * this will work, but certainly worth the try
         */
        //this.decideBestMove(good_moves, bad_moves);
        var evaluated_moves = new Array(good_moves, bad_moves, all_moves);
        return evaluated_moves;
    };
    
    this.eval = function(){
        var manhattan_distance = 0;
//        for(var i = 0; i < pieces_to_move.length; i++){
//            var manhattan_x = pieces_to_move[i].getXCoord() + this.getTargetX();
//            var manhattan_y = this.getTargetY() - pieces_to_move[i].getYCoord();
//            var manhattan_eval = manhattan_x + manhattan_y;
//            manhattan_distance += manhattan_eval;
//        }
//        return manhattan_distance;
        
        for(var i = 0; i < board_representation.length; i++){
            for(var j = 0; j < board_representation.length; j++){
//                /var current_piece = board_representation[i][j];
                if(board_representation[i][j] !== 0){
                    if(board_representation[i][j].getPieceColour() === this.getAIColour()){ 
                        // will need altered, maybe thi.getAIColour()
                        var manhattan_x;
                        var manhattan_y;
//                        var manhattan_x = board_representation[i][j].getXCoord() + this.getTargetX();
//                        var manhattan_y = this.getTargetY() - board_representation[i][j].getYCoord();
//                        var manhattan_eval = manhattan_x + manhattan_y;
                        if(board_representation[i][j].getXCoord() > this.getTargetX()){
                            manhattan_x = board_representation[i][j].getXCoord() - this.getTargetX(); 
                        }
                        else{
                            manhattan_x = this.getTargetX() - board_representation[i][j].getXCoord();
                        }
                        if(board_representation[i][j].getYCoord() > this.getTargetY()){
                            manhattan_y = board_representation[i][j].getYCoord() - this.getTargetY();
                        }
                        else{
                            manhattan_y = this.getTargetY() - board_representation[i][j].getYCoord();
                        }
                        var manhattan_eval = manhattan_x + manhattan_y;
                        manhattan_distance += manhattan_eval;
                        console.log("manhattan_eval for piece " + board_representation[i][j].getPieceId() +
                                " = " + manhattan_eval + "(" + manhattan_x + " + " + manhattan_y);
                    }
                }
            }
        }
        return manhattan_distance;
    };
    
    this.dls = function(depth, move, pieces, all_moves){
        //console.log("this has been called");
        //var best_move;
        if(depth < 1){
            var x_to_reset = move.getX();
            var y_to_reset = move.getY();
            this.makeMove(move);
            var all_moves = this.evalAllMoves(this.findAllMoves(pieces, board_representation));
            //var best_eval = 10000000; //obscenely large so that it must be reset with the first eval
            //console.log(all_moves.length);
            for(var i = 0; i < all_moves.length; i++){
                this.dls(depth + 1, all_moves[i], pieces, all_moves);
                
            }
            this.undoMove(move, x_to_reset, y_to_reset);           
        }
        return all_moves;
    };
    
    
    this.makeMove = function(move){
//        console.log("moving piece: " + move.getPieceToMove().getPieceId() + " from (" + move.getPieceToMove().getXCoord() +
//                "," + move.getPieceToMove().getYCoord() + ")");
        var current_piece = move.getPieceToMove();
        var current_x = current_piece.getXCoord();
        var current_y = current_piece.getYCoord();
       // console.log(current_x + "," + current_y);
        board_representation[current_x][current_y] = 0;
        current_piece.setXCoord(move.getX());
        current_piece.setYCoord(move.getY());
        board_representation[move.getX()][move.getY()] = current_piece;
//        console.log("to: (" +move.getX() + "," + move.getY() + ")");
        //console.log("in make move: " + board_representation[current_x][current_y]);
    };
    
    this.undoMove = function(move, x_to_reset, y_to_reset){
//        console.log("returning piece: " + move.getPieceToMove().getPieceId() + " to (" + x_to_reset +
//                "," + y_to_reset + ")");
        var current_piece = move.getPieceToMove();
        board_representation[move.getX()][move.getY()] = 0;
        current_piece.setXCoord(x_to_reset);
        current_piece.setYCoord(y_to_reset);
        board_representation[x_to_reset][y_to_reset] = current_piece;
        
        
        
        //console.log(board_representation[current_x][current_y]);
    };
    
    // this method will return the move to the model... to the controller... to the view
    this.getTargetX = function (){
        return target_x;
    };
    this.getTargetY = function (){
        return target_y;
    };
    this.setTargetX = function (new_x_target){
        console.log("setting target x to: " + new_x_target);
        target_x = new_x_target;
    };
    this.setTargetY = function (new_y_target){
        target_y = new_y_target;
    };

    // not sure if I will use this, but might be useful
    this.getAIPlayer = function(){
        return AI_player;
    };
    // will allow me to switch AI between player 1 and 2
    this.setAIPlayer = function(new_player){
        AI_player = new_player;
    };
    
    // these methods will be used to allow the user to swap AI to player 1
    this.setTargetForWhiteAIPlayer = function(){
        this.setTargetX(7);
        this.setTargetY(0);
    };
    this.setTargetForBlackAIPlayer = function(){
        this.setTargetX(0);
        this.setTargetY(7);
    };
    
    this.setAIColour = function(){
        if(this.getAIColour() === 'black'){
            AI_colour = "white";
        }
        else{
            AI_colour = "black";
        }
    };
    
    this.getAIColour = function(){
        return AI_colour;
    };
}
