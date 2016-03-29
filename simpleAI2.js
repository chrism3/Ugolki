/*
 * This is the simpleAI algorithm for the project. It is names simpleAI2 because it is the 
 * second version of this algorithm.  
 */

/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */

function simpleAI2(){
    
    var board_representation;
    var choosen_move;
    var piece_index;
    var origional_x;
    var origional_y;
    var copy_of_model;
    var AI_player;
    
    
    /*
     * This is a function to initialise the simpleAI player. It performs the essential
     * features of initialissing the AI player such as board representation for the AI player, 
     * passing in a reference to the AIInterface (AI) and the model. 
     */
    this.simpleAI2 = function(board_rep, model, AI){
        board_representation = board_rep;
        AI_player = AI;
        //console.log("AI_player colour: " + AI_player.getAIColour());
        this.updateTarget();
        //console.log("the goal location is: " + AI_player.getTargetX() + "," + AI_player.getTargetY());
        copy_of_model = model;
        var pieces = copy_of_model.getPieces(AI_player); 
//        for(var i = 0; i < pieces.length; i++){
//            console.log("piece: " + pieces[i].getPieceId());
//        }
        var all_moves = AI_player.evalAllMoves(AI.findAllMoves(pieces, board_rep, copy_of_model.getGameType()));
        var good_moves = all_moves[0];
        var bad_moves = all_moves[1];
        this.decideBestMove(good_moves, bad_moves);                         
    }; 
    
    /*
     * @param{good_moves, bad_moves}
     * @returns{undefined}
     * 
     * this takes in two parameters, these are two arrays. Once including a list of 
     * the moves evaluated to be good and another that is a list of bad moves. 
     * It does not return any information, instead it uses getter and setter methods
     * to set which it the best piece to move and which move to make for that peice
     * 
     * Algorithm works by randomly selecting a good move (when one exists) so that it
     * gives the impression that the algorithm is playing intelligently and consistently
     * making a move to its goal, but in reality it is doing so with no stratgey. 
     */
    this.decideBestMove = function(good_moves, bad_moves){
        // only make a bad move when the length of good move list is 0
        if(good_moves.length > 0){
            var random_index = parseInt(Math.random()*good_moves.length);
            this.setChoosenMove(good_moves[random_index][0]);
            var random_piece = good_moves[random_index][0].getPieceToMove();
            // set the piece to the one at the random index
            this.setSelectedPieceIndex(random_piece.getPieceId());
            this.setAISelectedPieceXCoord(random_piece.getXCoord());
            this.setAISelectedPieceYCoord(random_piece.getYCoord());
            //console.log("moving: " + random_piece.getPieceId());
        }
        else{
            var random_index = parseInt(Math.random()*bad_moves.length);
            this.setChoosenMove(bad_moves[random_index][0]);
            var random_piece = bad_moves[random_index][0].getPieceToMove();
            // set the piece to the one at the random index
            this.setSelectedPieceIndex(random_piece.getPieceId());
            this.setAISelectedPieceXCoord(random_piece.getXCoord());
            this.setAISelectedPieceYCoord(random_piece.getYCoord());
            //console.log("moving: " + random_piece.getPieceId());
        }
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
        // check to see the colour of the AI. 
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
     * @param {move}
     * this function sets the AIs move to whatever move is passed in
     */
    this.setChoosenMove = function(move){
        choosen_move = move;
    };
    
    /*
     * @return {move}
     * 
     * this returns the AI's move
     */
    this.getChoosenMove = function(){
        return choosen_move;
    };
    
    /*
     * @param {type| string}
     * 
     * this returns the index of the piece that has been chosen to move
     */
    this.getAIPieceIndex = function (){
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


  


