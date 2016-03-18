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
    
        this.mediumAI = function(board, model, AI){
           // console.log("using new medium AI");
            board_representation = board;
            copy_of_model = model;
            AI_player = AI; 
            this.updateTarget();
            var pieces_to_move = model.getPieces(AI_player);               
            //console.log(pieces_to_move.length);
            //console.log("The Goal square is: " + AI_player.getTargetX() + ", " + AI_player.getTargetY());
            var all_moves = AI_player.evalAllMoves(AI_player.findAllMoves(pieces_to_move, board, copy_of_model.getGameType()));
            var good_moves = all_moves[0];
            var bad_moves = all_moves[1];
            var every_move = all_moves[2];
//            console.log("every_move: " + every_move.length);
//            for(var i = 0; i < every_move.length; i++){
//                console.log(every_move[i][0]);
//            }
            this.decideBestMove(every_move, good_moves, bad_moves);
            //this.findPiecesNotToMove();
//            this.updateTarget2();
//            // make sure the AI's goal location us free before wasting a move
//            this.updateTarget3();


        };
    
    
    this.decideBestMove = function(every_move, good_moves, bad_moves){
        // this function just needs to look for the move with the lowest eval
        var best_index = 0;        
        var piece_to_move;
        
        var move_generator = new Array("random", "good move", "good move", "random", "random",
                                        "good move", "good move", "random", "good move", "good move");
        var random = parseInt(Math.random()*move_generator.length);
        var move_type = move_generator[random];
        
        //console.log("EVERY MOVE LENGTH: " + every_move.length);
        //console.log(every_move.length);
        if(move_type === "good move"){
            console.log("making good move");
            var best_index = 0;        
            var piece_to_move;        
            var best_eval = every_move[0][1];
            for(var i = 1; i < every_move.length; i++){
                var eval = every_move[i][1];
                if(eval < best_eval){
                    best_eval = eval;
                    best_index = i;
               }
            }
            this.setChoosenMove(every_move[best_index][0]);
            piece_to_move = every_move[best_index][0].getPieceToMove();
//        this.setSelectedPieceIndex(piece_to_move.getPieceId());
//        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
//        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());

        }
        else if(move_type === "random"){
            if(good_moves.length > 0){
                //console.log("making random move");
                var random_index = parseInt(Math.random()*good_moves.length);
                this.setChoosenMove(good_moves[random_index][0]);
                var piece_to_move = good_moves[random_index][0].getPieceToMove();
            }
            else{
                var random_index = parseInt(Math.random()*every_move.length);
                this.setChoosenMove(bad_moves[random_index][0]);
                var piece_to_move = bad_moves[random_index][0].getPieceToMove();
            }
//            this.setSelectedPieceIndex(random_piece.getPieceId());
//            this.setAISelectedPieceXCoord(random_piece.getXCoord());
//            this.setAISelectedPieceYCoord(random_piece.getYCoord());
        }
        //console.log("the best move has been deiced and is: " + piece_to_move.getPieceId());
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());       
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
    };
    
//    this.updateTarget3 = function(){
//        var x = AI_player.getTargetX();
//        var y = AI_player.getTargetY();
//        var target_free = true;
//        // update the target when the AI is playing with black pieces
//        if(AI_player.getAIColour() === "black"){
//            do{
//                console.log("black piece x and y are being updated");
//                if(board_representation[x][y] !== 0){
//                    //console.log("There is a piece in that location");
//                    //console.log(x + "," + y);
//                    if(board_representation[x][y].getPieceColour() === "black"){
//                        //console.log("doing this");
//                        //this.findPiecesNotToMove();
//                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
//                        if(x < 3){
//                            AI_player.setTargetX(x+1);
//                            x = x + 1;
//                        }
//                        else{
//                            AI_player.setTargetY(y-1);
//                            AI_player.setTargetX(0);
//                            y = y - 1;
//                            x = 0;
//                        }
//                    }
//                    else{
//                       target_free = false;
//                    }
//                }
//                else{
//                    target_free = false;
//                }
//            }while(target_free);
//        }
//        // else, update the target if the AI is playing with white pieces
//        else{
//            do{
//                console.log("***********");
//                console.log("coords this time: " + x + "," + y);
//                console.log(" ");
//                console.log("updating white target");
//                if(board_representation[x][y] !== 0){
//                    console.log("there is a piece in that location");
//                    console.log("piece colour is: " + board_representation[x][y].getPieceColour());
//                    if(board_representation[x][y].getPieceColour() === "white"){
//                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
//                        if(x > 4){
//                            console.log("x is greater than 4");
//                            AI_player.setTargetX(x-1);
//                            x = x - 1;
//                            console.log("getting the new x value" + AI_player.getTargetX());
//                        }
//                        else{
//                            console.log("x is not greater than 4");
//                            AI_player.setTargetY(y+1);
//                            AI_player.setTargetX(7);
//                            y = y + 1;
//                            x = 7;
//                        }
//                    }
//                    else{
//                        console.log("piece was wrong colour");
//                        console.log("These are the x and y values: " + x + "," + y);
//                        console.log("These are the AI x and y values: " + AI_player.getTargetX() + "," + AI_player.getTargetY());
//                        target_free = false;
//                    }
//                }
//                else{
//                    target_free = false;
//                }
//            }while(target_free);
//            console.log("breaking the do while");
//            console.log("x = " + AI_player.getTargetX() + " y = " + AI_player.getTargetY());
//        }        
//    };
//    
//    this.findPiecesNotToMove = function(){
//        // this only works for player2 just now, need to make it work for player 1 AI as well
//        copy_of_model.resetGoalList();
//        //console.log(board_representation[0][4].getPieceColour());
//        console.log("is this acually being called");
//        for(var i = 7; i > 3; i--){
//            //console.log("i = " + i);
//            for(var j = 0; j < 4; j++){
//                //console.log("j = " + j);
//                if(AI_player.getAIColour() === "black"){
//                if(board_representation[j][i] !== 0){
//                    if((board_representation[j][i].getPieceColour()) === "black"){ 
//                        copy_of_model.addPieceToGoalLocationList(board_representation[j][i]);
//                        break;
//                    }
//                }
//                else{
//                    if((board_representation[j][i].getPieceColour()) === "white"){ 
//                        copy_of_model.addPieceToGoalLocationList(board_representation[j][i]);
//                        break;
//                    }
//                }
//                    break;
//                }
//            }
//        }
//    };
//    
//    this.updateTarget2 = function(){
//        var pieces_in_goal = copy_of_model.getAIPiecesInGoalLocation();
//        console.log("pieces_in_goal.length: " + pieces_in_goal.length);
//        for(var i = 0; i < pieces_in_goal.length; i++){
//            console.log(pieces_in_goal[i].getXCoord() + "," + pieces_in_goal[i].getYCoord() +  ":    " +
//                    pieces_in_goal[i].getPieceId());
//        }
//
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