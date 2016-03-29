/*
 * This is the Hard AI algorithm for the project. This algorithm is the most
 * challenging of the ones created to play against. 
 */


function hardAI(){
    
    var board_representation;
    var piece_index;
    var move;
    var origional_x;
    var origional_y;
    var copy_of_model;
    var AI_player;

    
    /*
     * This is a function to initialise the hardAI player. It performs the essential
     * features of initialissing the AI player such as board representation for the AI player, 
     * passing in a reference to the AIInterface (AI) and the model. 
     */
    this.hardAI = function(board, model, AI){
        board_representation = board;
        AI_player = AI;
        copy_of_model = model;
        this.updateTarget();
        var pieces_to_move = model.getPieces(AI_player);
        console.log("goal location is: " + AI.getTargetX() + "," + AI.getTargetY());
        var all_moves = AI_player.evalAllMoves(AI_player.findAllMoves(pieces_to_move, board, copy_of_model.getGameType()));
        var good_moves = all_moves[2];
        this.decideBestMove2(good_moves);
    };
    
    
    /*
     * @param {type| array} good_moves
     * 
     * this function takes in a list of every move that is available, and then uses the
     * results of the eval to select the best move that is available in terms of which move 
     * makes the best improvement to the overall path distance of the board. 
     */
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
    }; 
    
    /*
     * @returns {undefined}
     * 
     * This method is used to update the target location for the AI player. This method should
     * have been put in the AIInterface.js to reduce the code repetition that exists in the 
     * code between the 3 used AI algorithms.  
     */
    this.updateTarget = function(){
        var x = AI_player.getTargetX();
        var y = AI_player.getTargetY();
        var target_free = true;
        var AI_goals_filled = new Array();
        // check to see the colour of the AI
        if(AI_player.getAIColour() === "black"){
            do{
                if(board_representation[x][y] !== 0){
                    if(board_representation[x][y].getPieceColour() === "black"){
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        AI_goals_filled.push(x + "," + y);
                        // this is < 3 because the target locations x coord for black peices range from 0-3
                        if(x < 3){
                            // updated only the X coord for the AI player
                            AI_player.setTargetX(x+1);
                            x = x + 1;
                        }
                         // if it is equal to 3, update both x and y coords
                        else{
                            // lower y coord (i.e. from 7->6, 6->5...)
                            AI_player.setTargetY(y-1);
                            // reset the x coord to 0
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
                    if(board_representation[x][y].getPieceColour() === "white"){
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        //this is great than four because the x coords range from 4-7
                        if(x > 4){
                            // update the x coord accordingly
                            AI_player.setTargetX(x-1);
                            x = x - 1;
                        }
                        else{
                            // add 1 to the y coord
                            AI_player.setTargetY(y+1);
                            // reset the x coord back to 7
                            AI_player.setTargetX(7);
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

    /*
     * @return {move}
     * 
     * this returns the AI's move
     */
    this.getChoosenMove = function() {
        return move;
    };
    
    /*
     * @param {move}
     * this function sets the AIs move to whatever move is passed in
     */
    this.setChoosenMove = function(choosen_move) {
       // console.log(choosen_move.getX() + "," + choosen_move.getY());
        move = choosen_move;
    };  
    
    /*
     * @param {type| string}
     * 
     * this returns the index of the piece that has been chosen to move
     */
    this.getAIPieceIndex = function (){
        //console.log("The index to be returned is: " + piece_index);
        return piece_index;
    };
    
    /*
     * @param {type|string}
     * 
     * an index is passed in, this is then set to be the piece index
     */    
    this.setSelectedPieceIndex = function(index){
        piece_index = index;
    };
    
    /*
     * 
     * @returns {type| number}
     * 
     * this returns the numerical value of the selects pieces x coord
     * 
     */    
    this.getAISelectedPieceXCoord = function(){
        return origional_x;
    };
    
    /*
     * 
     * @param {type} x
     * @returns {undefined}
     * 
     * this sets the value of the x coord for the piece that is to be moved. This is
     * the origional x coord for the piece, before it is moved. 
     */    
    this.setAISelectedPieceXCoord = function(x){
        origional_x = x;
    };
    
    /*
     * @returns {type| number}
     * 
     * this returns the numerical value of the selects pieces y coord 
     * 
     */    
    this.getAISelectedPieceYCoord = function(){
        return origional_y;
    };
    
    /*
     * 
     * @param {type} y
     * @returns {undefined}
     * 
     * this sets the value of the y coord for the piece that is to be moved. This is
     * the origional y coord for the piece, before it is moved. 
     */    
    this.setAISelectedPieceYCoord = function(y){
        origional_y = y;
    };   
}


