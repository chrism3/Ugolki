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
            //this.findPiecesNotToMove();
            this.updateTarget2();
            this.updateTarget(AI);
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
            console.log(bad_move_count);
            if(bad_move_count === 0){
                console.log("because bad move count = 0; set bad move made");
                //copy_of_model.getBadMoveCount();
                copy_of_model.setBadMoveMade();
            }
            else if(bad_move_count >= 3){
                console.log("because bad move count = 5; reset move count and set bad move to false");
                copy_of_model.resetBadMoveCount();
                copy_of_model.setBadMoveMade();
            }
            var best_eval = bad_moves[0][1];
            for(var i = 1; i < bad_moves.length; i++){                
                var eval = bad_moves[i][1];
                if(eval > best_eval){
                    best_index = i;
                    best_eval = eval;
                }
            }
            this.setChoosenMove(bad_moves[best_index][0]);
            piece_to_move = bad_moves[best_index][0].getPieceToMove();
            copy_of_model.addBadPieceMoved(piece_to_move);
            copy_of_model.incrementBadMoveCount();            
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
            if(board_representation[AI.getTargetX()][AI.getTargetY()] !== 0 &&
                    board_representation[AI.getTargetX()][AI.getTargetY()].getPieceColour() === "black"){
//                console.log("piece in goal location: " + board_representation[AI.getTargetX()][AI.getTargetY()].getPieceId());
//                copy_of_model.addPieceToGoalLocationList(board_representation[AI.getTargetX()][AI.getTargetY()].getPieceId());
                this.findPiecesNotToMove();
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
    
    this.findPiecesNotToMove = function(){
        // this only works for player2 just now, need to make it work for player 1 AI as well
        copy_of_model.resetGoalList();
        //console.log(board_representation[0][4].getPieceColour());
        console.log("is this acually being called");
        for(var i = 7; i > 3; i--){
            //console.log("i = " + i);
            for(var j = 0; j < 4; j++){
                //console.log("j = " + j);
                if(board_representation[j][i] !== 0){
                    //console.log("has this habeen reached");
//                    console.log("i = " + i);
//                    console.log("j = " + j);
                    if((board_representation[j][i].getPieceColour()) === "black"){ 
//                        console.log("found a piece in the goal postition");
//                        console.log("i = " + i);
//                        console.log("j = " + j);
                        copy_of_model.addPieceToGoalLocationList(board_representation[j][i]);
                    }
                }
            }
        }
    };
    
    this.updateTarget2 = function(AI){
        var pieces_in_goal = copy_of_model.getAIPiecesInGoalLocation();
        console.log("pieces_in_goal.length: " + pieces_in_goal.length);
        for(var i = 0; i < pieces_in_goal.length; i++){
            console.log(pieces_in_goal[i].getXCoord() + "," + pieces_in_goal[i].getYCoord() +  ":    " +
                    pieces_in_goal[i].getPieceId());
        }

    };

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


