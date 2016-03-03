/*
 * This class will have a simple, simple AI. It might be made using a random function,
 * but this will be extended later on
 */

function mediumAI2(){
    
    var board_representation;
    var piece_index;
    var move;
    var origional_x;
    var origional_y;
    var copy_of_model;
//    var target_x = 0,
//        target_y = 7; /* this is the target because player 2 is aiming to get to
//                       * the bottom left hand corner. This is why the algorithm currently
//                       * only works when the AI is player 2
                      // */
    
        this.mediumAI = function(pieces_to_move, board, model){
            board_representation = board;
            copy_of_model = model;
            var AI = new generalAI();            
            var all_moves = AI.evalAllMoves(AI.findAllMoves(pieces_to_move, board));
            var good_moves = all_moves[0];
            var bad_moves = all_moves[1];
            this.decideBestMove(good_moves, bad_moves, AI);            
        };
    
    
//        this.findAllMoves2 = function (pieces_to_move, board){
//        board_representation = board;
//        var possible_moves = new Array();
//        var AI_moves = new findMoves();
////        var no_of_good_moves = 0;
////        var unfavoured_moves = new Array();
//        AI_moves.init(board_representation);
//        for(var i = 0; i < pieces_to_move.length; i++){
//            //console.log(i);
//            var current_piece = pieces_to_move[i];
//            var x_coord = current_piece.getXCoord();
//            var y_coord = current_piece.getYCoord();
//            var right = x_coord + 1;
//            var left = x_coord - 1;
//            var above = y_coord - 1;
//            var below = y_coord + 1;            
//            AI_moves.moveRight(right, y_coord, current_piece);
//            AI_moves.moveLeft(left, y_coord, current_piece);
//            AI_moves.moveUp(above, x_coord, current_piece);
//            AI_moves.moveDown(below, x_coord, current_piece);
////            AI_moves.jumpRight(right, y_coord, current_piece);
////            AI_moves.jumpLeft(left, y_coord, current_piece);
////            AI_moves.jumpUp(above, x_coord, current_piece);
////            AI_moves.jumpDown(below, x_coord, current_piece);
//            console.log(current_piece);
//            AI_moves.multipleJump3(x_coord, y_coord, current_piece);
//        }
//        possible_moves = AI_moves.getPossibleMoves();
//        console.log("number of moves possible " + possible_moves.length);
//        
//        this.evalAllMoves(possible_moves);
//    };
//    
//    this.evalAllMoves = function(possible_moves){
//        //var no_of_good_moves = 0;
//        var good_moves = new Array();
//        var bad_moves = new Array();
//        //var eval_list = new Array();
//        var current_eval = this.eval2();
//        //console.log("current_eval: " + current_eval);
//        for(var i = 0; i < possible_moves.length; i++){
//            //var current_piece = possible_moves[i].getPieceToMove();
//            
////            for(var i = 0; i < possible_moves.length; i++){
////                console.log(possible_moves[i].getPieceToMove().getXCoord());
////            }
//            
//            // two variables needed to reset x and y after the move has been completed
//            var x_to_reset = possible_moves[i].getPieceToMove().getXCoord();
//            var y_to_reset = possible_moves[i].getPieceToMove().getYCoord();
//            this.makeMove(possible_moves[i]);
//            //var move_eval = this.eval(possible_moves[i].getX(), possible_moves[i].getY());
//            var move_eval = this.eval2();
//            var new_eval = new Array();
//            new_eval[0] = possible_moves[i];
//            new_eval[1] = move_eval;
//            //console.log("move eval: " + move_eval);
//            if(current_eval >= move_eval){
//                //no_of_good_moves++;
//                good_moves.push(new_eval);
//            }
//            else{
//                 bad_moves.push(new_eval);
//            }
//            
//            this.undoMove(possible_moves[i], x_to_reset, y_to_reset);
//        }
//        console.log("no of good moves: " + good_moves.length);
//        console.log("no of bad moves: " + bad_moves.length);
//        
//        /*
//         * I am doing this because. Without doing a depth search (which is why my this will be the easy AI)
//         * it is possible for the pieces to get to a corner and not move because the move eval is worse than
//         * the current eval. Therefore, including this so that if we are nearing a low number of good moves, 
//         * the AI will make a bad move and potentially open up some more good moves. Not entirely convinced
//         * this will work, but certainly worth the try
//         */
//        this.decideBestMove(good_moves, bad_moves);
//        
//    };
    
    this.decideBestMove = function(good_moves, bad_moves, AI){
        // this function just needs to look for the move with the lowest eval
        var best_index = 0;        
        var piece_to_move;
        var make_bad_move = copy_of_model.getBadMoveMade();
        console.log(make_bad_move);
        
        this.updateTarget(AI);
        
        if(good_moves.length > 0 && !make_bad_move){
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
            console.log("doing the else statement");
            var bad_move_count = copy_of_model.getBadMoveCount();
            if(bad_move_count === 0){
                copy_of_model.getBadMoveCount();
                copy_of_model.setBadMoveMade();
            }
            else if(bad_move_count === 5){
                copy_of_model.resetBadMoveCount();
                copy_of_model.setBadMoveMade();
            }
            for(var i = 1; i < bad_moves.length; i++){
                var best_eval = bad_moves[0][1];
                var eval = bad_moves[i][1];
                if(eval > best_eval){
                    best_index = i;
                    best_eval = eval;
                }
            }
            this.setChoosenMove(bad_moves[best_index][0]);
            piece_to_move = bad_moves[best_index][0].getPieceToMove();
            
        }
        copy_of_model.incrementBadMoveCount();
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
            if(board_representation[AI.getTargetX()][AI.getTargetY()] !== 0 &&
                    board_representation[AI.getTargetX()][AI.getTargetY()].getPieceColour() === "black"){
                console.log("piece in goal location: " + board_representation[AI.getTargetX()][AI.getTargetY()].getPieceId());
                copy_of_model.addPieceToGoalLocationList(board_representation[AI.getTargetX()][AI.getTargetY()].getPieceId());
                var x = AI.getTargetX();
                var y = AI.getTargetY();
                
                if(y < 4){
                    AI.setTargetY(y + 1);
                }
                else{
                    AI.setTargetX(x + 1);
                    AI.setTargetY(0);
                }
                //console.log("updating target");
            }
            else{
                target_free = true;
            }
        }
        while(!target_free);
    };
    
    // currently this method only works when AI is player 2
//    this.eval = function(x_coord, y_coord){
//        // square 0,7 is the first place to fill
//        var manhattan_x = x_coord + this.getTargetX(); // this is becasue we aim for x value of 0
//        var manhattan_y = this.getTargetY() - y_coord; // this is because we aim for y value of 7
//        //console.log("for: " + x_coord + "," + y_coord +": eval returns; x dist = " + manhattan_x + " y =" + manhattan_y);
//        var manhattan_distance = manhattan_x + manhattan_y;
//        
//        /*
//         * Will need someway to identify when the taget location has a piece in it
//         * and therefore update it. i.e. location (0,7) constains a piece, aim for
//         * location (1,7)... until we are aming for (4,3) which is the last location
//         * player 2 needs to fill.
//         */
//
//        return manhattan_distance;        
//    };
//    
//    this.eval2 = function(){
//        var manhattan_distance = 0;
////        for(var i = 0; i < pieces_to_move.length; i++){
////            var manhattan_x = pieces_to_move[i].getXCoord() + this.getTargetX();
////            var manhattan_y = this.getTargetY() - pieces_to_move[i].getYCoord();
////            var manhattan_eval = manhattan_x + manhattan_y;
////            manhattan_distance += manhattan_eval;
////        }
////        return manhattan_distance;
//        
//        for(var i = 0; i < board_representation.length; i++){
//            for(var j = 0; j < board_representation.length; j++){
////                /var current_piece = board_representation[i][j];
//                if(board_representation[i][j] !== 0){
//                    if(board_representation[i][j].getPieceColour() === "black"){ 
//                        // will need altered, maybe thi.getAIColour()
//                        var manhattan_x = board_representation[i][j].getXCoord() + this.getTargetX();
//                        var manhattan_y = this.getTargetY() - board_representation[i][j].getYCoord();
//                        var manhattan_eval = manhattan_x + manhattan_y;
//                        manhattan_distance += manhattan_eval;
////                        console.log("manhattan_eval for piece " + board_representation[i][j].getPieceId() +
////                                " = " + manhattan_eval + "(" + manhattan_x + " + " + manhattan_y);
//                    }
//                }
//            }
//        }
//        return manhattan_distance;
//    };
//    
//    this.makeMove = function(move){
////        console.log("moving piece: " + move.getPieceToMove().getPieceId() + " from (" + move.getPieceToMove().getXCoord() +
////                "," + move.getPieceToMove().getYCoord() + ")");
//        var current_piece = move.getPieceToMove();
//        var current_x = current_piece.getXCoord();
//        var current_y = current_piece.getYCoord();
//       // console.log(current_x + "," + current_y);
//        board_representation[current_x][current_y] = 0;
//        current_piece.setXCoord(move.getX());
//        current_piece.setYCoord(move.getY());
//        board_representation[move.getX()][move.getY()] = current_piece;
////        console.log("to: (" +move.getX() + "," + move.getY() + ")");
//        //console.log("in make move: " + board_representation[current_x][current_y]);
//    };
//    
//    this.undoMove = function(move, x_to_reset, y_to_reset){
////        console.log("returning piece: " + move.getPieceToMove().getPieceId() + " to (" + x_to_reset +
////                "," + y_to_reset + ")");
//        var current_piece = move.getPieceToMove();
//        board_representation[move.getX()][move.getY()] = 0;
//        current_piece.setXCoord(x_to_reset);
//        current_piece.setYCoord(y_to_reset);
//        board_representation[x_to_reset][y_to_reset] = current_piece;
//        
//        
//        
//        //console.log(board_representation[current_x][current_y]);
//    };
//    
//    // this method will return the move to the model... to the controller... to the view
//    this.getTargetX = function (){
//        return target_x;
//    };
//    this.getTargetY = function (){
//        return target_y;
//    };
//    this.setTargetX = function (new_x_target){
//        target_x = new_x_target;
//    };
//    this.setTargetY = function (new_y_target){
//        target_y = new_y_target;
//    };
    this.getChoosenMove = function() {
        return move;
    };
    // not sure when i would use this method, best to have it incase i s'pose
    this.setChoosenMove = function(choosen_move) {
       // console.log(choosen_move.getX() + "," + choosen_move.getY());
        move = choosen_move;
    };    
    this.getAIPieceIndex = function (){
        //console.log("The index to be returned is: " + piece_index);
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


