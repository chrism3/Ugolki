/*
 * This class will have a simple, simple AI. It might be made using a random function,
 * but this will be extended later on
 */

function mediumAI3(){
    
    var board_representation;
    var piece_index;
    var move;
    var origional_x;
    var origional_y;
    var copy_of_model;
    var AI_player;
//    var target_x = 0,
//        target_y = 7; /* this is the target because player 2 is aiming to get to
//                       * the bottom left hand corner. This is why the algorithm currently
//                       * only works when the AI is player 2
                      // */
    
        this.mediumAI3 = function(board, model, AI){
//            console.log("  ");
//            console.log("***********");
//            console.log(" ");
//            console.log("mediumAI3");
            board_representation = board;
            AI_player = AI;
            //console.log("medium colour: " + AI_player.getAIColour());
            copy_of_model = model;
            this.updateTarget();
            var pieces_to_move = model.getPieces(AI_player);
            //console.log(pieces_to_move.length);            
            console.log("goal location is: " + AI.getTargetX() + "," + AI.getTargetY());
            var all_moves = AI_player.evalAllMoves(AI_player.findAllMoves(pieces_to_move, board, copy_of_model.getGameType()));
            var good_moves = all_moves[2];
            this.decideBestMove2(good_moves);
            //copy_of_model = model;

        };
    
    this.decideBestMove = function(good_moves, bad_moves){
        // this function just needs to look for the move with the lowest eval
        var best_index = 0;        
        var piece_to_move;
        
        //this.updateTarget(AI);
        
        if(good_moves.length >= 1){
            var best_eval = good_moves[0][1];
            for(var i = 1; i < good_moves.length; i++){
                var eval = good_moves[i][1];
                var move = good_moves[i][0];
                //console.log("check if " + eval + " is less than " + best_eval);
                
                if(eval < best_eval){
                   if(AI_player.getAIColour() === "black"){
                    if(move.getX() === AI_player.getTargetX() && move.getY() === AI_player.getTargetY()){
                        //console.log("the goal has been found");
                        best_index = i;
                        best_eval = 0;
                        return;
                    }
                    else if(move.getX() > AI_player.getTargetX() && move.getY() < AI_player.getTargetY()){
                        best_index = i;
                        best_eval = eval;
                    }
                    // doing this to try recover the pieces that are in bad places
                    else if(move.getPieceToMove().getXCoord() < AI_player.getTargetX() ||
                            move.getPieceToMove().getYCoord() > AI_player.getTargetY()){
                        //console.log("Doing this in good moves");
                        eval = eval/2;
                        best_index = i;
                        best_eval = eval;
                    }
                }
                // if the AI is using the white pieces do this instead of the above
                else{
                    if(move.getX() === AI_player.getTargetX() && move.getY() === AI_player.getTargetY()){
                        eval = 0;
                        best_eval = eval;
                        best_index = i;
                    }
                    else if(move.getY() > AI_player.getTargetY() && move.getX() < AI_player.getTargetX()){
                        best_index = i;
                        best_eval = eval;
                    }
                    else if(move.getPieceToMove().getYCoord() < AI_player.getTargetY() ||
                            move.getPieceToMove().getXCoord() > AI_player.getTargetX()){
                        eval = eval/2;
                        best_index = i;
                        best_eval = eval;
                    }
                }
                }

            }
            this.setChoosenMove(good_moves[best_index][0]);
            piece_to_move = good_moves[best_index][0].getPieceToMove();
            //console.log("best index: " + best_index);
            //console.log("best eval: " + best_eval);
            //this.setChoosenMove(good_moves[best_index][0]);
            //piece_to_move = good_moves[best_index][0].getPieceToMove();
            //console.log(piece_to_move.getPieceId());
            this.setSelectedPieceIndex(piece_to_move.getPieceId());
        }
        else{
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
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());       
    };
    
    this.decideBestMove2 = function(good_moves){
        var best_index = 0;        
        var piece_to_move;        
        var best_eval = good_moves[0][1];
        for(var i = 1; i < good_moves.length; i++){
            var eval = good_moves[i][1];
            if(eval < best_eval){
                best_eval = eval;
                best_index = i;
            }
        }
        this.setChoosenMove(good_moves[best_index][0]);
        piece_to_move = good_moves[best_index][0].getPieceToMove();
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());
        //console.log("moving: " + piece_to_move.getPieceId());
    }; 
    
    this.updateTarget = function(){
        var x = AI_player.getTargetX();
        var y = AI_player.getTargetY();
        var target_free = true;
        var AI_goals_filled = new Array();
        // update the target when the AI is playing with black pieces
        if(AI_player.getAIColour() === "black"){
            do{
               // console.log("black piece x and y are being updated");
                if(board_representation[x][y] !== 0){
                    //console.log("There is a piece in that location");
                    //console.log(x + "," + y);
                    if(board_representation[x][y].getPieceColour() === "black"){
                        //console.log("doing this");
                        //this.findPiecesNotToMove();
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        AI_goals_filled.push(x + "," + y);
                        if(x < 3){
                            AI_player.setTargetX(x+1);
                            x = x + 1;
                        }
                        else{
                            AI_player.setTargetY(y-1);
                            AI_player.setTargetX(0);
                            y = y - 1;
                            x = 0;
                        }
                    }
                    else{
                       target_free = false;
                    }
                }
                else{
                    target_free = false;
                }
            }while(target_free);
        }
        // else, update the target if the AI is playing with white pieces
        else{
            do{
                //console.log("***********");
                //console.log("coords this time: " + x + "," + y);
                //console.log(" ");
                //console.log("updating white target");
                if(board_representation[x][y] !== 0){
                    //console.log("there is a piece in that location");
                    //console.log(board_representation[x][y]);
                    //console.log("piece colour is: " + board_representation[x][y].getPieceColour());
                    if(board_representation[x][y].getPieceColour() === "white"){
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        if(x > 4){
                            //console.log("x is greater than 4");
                            AI_player.setTargetX(x-1);
                            x = x - 1;
                            //console.log("getting the new x value" + AI_player.getTargetX());
                        }
                        else{
                            //console.log("x is not greater than 4");
                            AI_player.setTargetY(y+1);
                            AI_player.setTargetX(7);
                            y = y + 1;
                            x = 7;
                        }
                    }
                    else{
                        //console.log("piece was wrong colour");
                        //console.log("These are the x and y values: " + x + "," + y);
                        //console.log("These are the AI x and y values: " + AI_player.getTargetX() + "," + AI_player.getTargetY());
                        target_free = false;
                    }
                }
                else{
                    target_free = false;
                }
            }while(target_free);            
            //console.log("breaking the do while");
            //console.log("x = " + AI_player.getTargetX() + " y = " + AI_player.getTargetY());
        }
        if(AI_goals_filled.length > 0){
                for(var i = 0; i < AI_goals_filled.length; i++){
                    //console.log("GOAL FILLED: " + AI_goals_filled);
                }
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


