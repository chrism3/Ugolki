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
    var AI_player;
//    var target_x = 0,
//        target_y = 7; /* this is the target because player 2 is aiming to get to
//                       * the bottom left hand corner. This is why the algorithm currently
//                       * only works when the AI is player 2
                      // */
    
        this.mediumAI = function(pieces_to_move, board, model, AI){
            board_representation = board;
            copy_of_model = model;
            AI_player = AI;    
            
            console.log("The Goal square is: " + AI_player.getTargetX() + ", " + AI_player.getTargetY());
            var all_moves = AI_player.evalAllMoves(AI_player.findAllMoves(pieces_to_move, board));
            var good_moves = all_moves[0];
            var bad_moves = all_moves[1];
            var every_move = all_moves[2];
//            console.log("every_move: " + every_move.length);
//            for(var i = 0; i < every_move.length; i++){
//                console.log(every_move[i][0]);
//            }
            this.decideBestMove(every_move);
            //this.findPiecesNotToMove();
            this.updateTarget2();
            // make sure the AI's goal location us free before wasting a move
            this.updateTarget3();


        };
    
    
    this.decideBestMove = function(every_move){
        // this function just needs to look for the move with the lowest eval
        var best_index = 0;        
        var piece_to_move;
        
        console.log("EVERY MOVE LENGTH: " + every_move.length);
        var best_eval = every_move[0][1];
        
        
        for(var i = 1; i < every_move.length; i++){
            var eval = every_move[i][1];
            var move = every_move[i][0];
            //console.log("check if " + eval + " is less than " + best_eval);
            if(eval <= best_eval){
               // console.log("it is");
//               if(move.getX() === AI_player.getTargetX() && move.getY() === AI_player.getTargetY()){
//                   console.log("the goal has been found");
//                   best_index = i;
//                   best_eval = 0;
//                   return;
//               }
//               else 
//               
               if(move.getX() >= AI_player.getTargetX() && move.getY() <= AI_player.getTargetY()){
                    best_index = i;
                    best_eval = eval;
                }
               // doing this to try recover the pieces that are in bad places
               else if(move.getPieceToMove().getXCoord() < AI_player.getTargetX() ||
                       move.getPieceToMove().getYCoord() > AI_player.getTargetY()){
                   console.log("Doing this in good moves");
                   eval = eval/2;
                   best_index = i;
                   best_eval = eval;
               }
                
            }
            
            //console.log("best index: " + best_index);
            //console.log("best eval: " + best_eval);
            
            //this.setSelectedPieceIndex(piece_to_move.getPieceId());
        }
        this.setChoosenMove(every_move[best_index][0]);
        piece_to_move = every_move[best_index][0].getPieceToMove();
        console.log(best_eval + " is the lowest manhattan distance");
//        else{
////            console.log("doing the else statement");
////            var bad_move_count = copy_of_model.getBadMoveCount();
////            console.log(bad_move_count);
////            if(bad_move_count === 0){
////                console.log("because bad move count = 0; set bad move made");
////                //copy_of_model.getBadMoveCount();
////                copy_of_model.setBadMoveMade();
////            }
////            else if(bad_move_count >= 2){
////                console.log("because bad move count = 2; reset move count and set bad move to false");
////                copy_of_model.resetBadMoveCount();
////                copy_of_model.setBadMoveMade();
////            }
//            console.log("bad moves length: " + bad_moves.length);
//            var best_eval = bad_moves[0][1];
//            for(var i = 1; i < bad_moves.length; i++){                
//                var eval = bad_moves[i][1];
//                if(eval <= best_eval){
//                    best_index = i;
//                    best_eval = eval;
//                }
//            }
//            this.setChoosenMove(bad_moves[best_index][0]);
//            piece_to_move = bad_moves[best_index][0].getPieceToMove();
//            copy_of_model.addBadPieceMoved(piece_to_move);
//            copy_of_model.incrementBadMoveCount();            
//        }
        
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());       
    };
    
    this.updateTarget = function(){
//        console.log("target location contains: " + board_representation[this.getTargetX()][this.getTargetY()]);
//        if(board_representation[this.getTargetX()][this.getTargetY()] !== 0){
//            console.log(board_representation[this.getTargetX()][this.getTargetY()].getPieceColour());
//        }
        var target_free = false;
        do{
            // update "black" to be AI.getPieceColour() ?
            if(board_representation[AI_player.getTargetX()][AI_player.getTargetY()] !== 0 &&
                    board_representation[AI_player.getTargetX()][AI_player.getTargetY()].getPieceColour() === "black"){
//                console.log("piece in goal location: " + board_representation[AI.getTargetX()][AI.getTargetY()].getPieceId());
                copy_of_model.addPieceToGoalLocationList(board_representation[AI_player.getTargetX()][AI_player.getTargetY()]);
                //this.findPiecesNotToMove();
                var x = AI_player.getTargetX();
                var y = AI_player.getTargetY();
                if(x < 3){
                    console.log("setting AI's new target");
                    AI_player.setTargetX(x + 1);
                }
                else{
                    AI_player.setTargetY(y + 1);
                    AI_player.setTargetX(0);
                }
                //console.log("updating target");
            }
            else{
                target_free = true;
            }
        }
        while(!target_free);
    };
    
    this.updateTarget3 = function(){
        var x = AI_player.getTargetX();
        var y = AI_player.getTargetY();
        var target_free = true;
        // update the target when the AI is playing with black pieces
        if(AI_player.getAIColour === "black"){
            do{
                if(board_representation[x][y] !== 0){
                    console.log("There is a piece in that location");
                    console.log(x + "," + y);
                    if(board_representation[x][y].getPieceColour() === "black"){
                        console.log("doing this");
                        //this.findPiecesNotToMove();
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
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
                if(board_representation[x][y] !== 0){
                    if(board_representation[x][y].getPieceColour === "white"){
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        if(x > 4){
                            this.setTargetY(x-1);
                            x = x - 1;
                        }
                        else{
                            this.setTargetY(y+1);
                            this.setTargetX(7);
                            y = y + 1;
                            x = 7;
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
                    if((board_representation[j][i].getPieceColour()) === "black"){ 
                        copy_of_model.addPieceToGoalLocationList(board_representation[j][i]);
                        break;
                    }
                    break;
                }
            }
        }
    };
    
    this.updateTarget2 = function(){
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