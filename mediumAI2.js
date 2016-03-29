/*
 * This is the medium AI in the program. 
 */

function mediumAI2(){
    
    var board_representation;
    var piece_index;
    var move;
    var origional_x;
    var origional_y;
    var copy_of_model;
    var AI_player;
    
    /*
     * This is a function to initialise the mediumAI player. It performs the essential
     * features of initialissing the AI player such as board representation for the AI player, 
     * passing in a reference to the AIInterface (AI) and the model. 
     */
    this.mediumAI = function(board, model, AI){
        board_representation = board;
        copy_of_model = model;
        AI_player = AI; 
        this.updateTarget();
        var pieces_to_move = model.getPieces(AI_player);               
        var all_moves = AI_player.evalAllMoves(AI_player.findAllMoves(pieces_to_move, board, copy_of_model.getGameType()));
        var good_moves = all_moves[0];
        var bad_moves = all_moves[1];
        var every_move = all_moves[2];
        this.decideBestMove(every_move, good_moves, bad_moves);
    };
    
    /*
     * @param {every_move, good_moves, bad_moves}
     * 
     * This function takes in 3 arguments. One is every move that is available, 
     * on is the good moves and the last is the bad moves. 
     */
    this.decideBestMove = function(every_move, good_moves, bad_moves){
        // variable to store the index of the best move
        var best_index = 0;
        // variable to store which piece should be moved
        var piece_to_move;
        
        /*
         * this section is what makes this AI a middle ground between the two other
         * AI players (the hard and easy). The below array is filled with 10 values, 
         * 4 random and 6 good move, therefore there is a greater probablity of the
         * alogrithm performing a good move. 
         */
        var move_generator = new Array("random", "good move", "good move", "random", 
                                        "random", "good move", "good move", "random", 
                                        "good move", "good move");
        // this chooses a random number between 0 - 9 (to be one of the indices above)
        var random = parseInt(Math.random()*move_generator.length);
        // picks the move type at the index of the random number
        var move_type = move_generator[random];
        
        // if a good move has been chosen tha algorithm performs like the hard AI
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
        }
        // if the move type is random then the AI performs like the simple AI
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
        }
        this.setSelectedPieceIndex(piece_to_move.getPieceId());
        this.setAISelectedPieceXCoord(piece_to_move.getXCoord());
        this.setAISelectedPieceYCoord(piece_to_move.getYCoord());       
    };
    
    /*
     * @returns {undefined}
     *  
     * as mentioned in the simpleAI2.js file, this function was mentioned saying that it should
     * have been put in the AIInterface.js to reduce code repetition.  To see the comments for this
     * 
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
     * @returns {type} move
     * 
     * this returns the AI players chosen move
     */
    this.getChoosenMove = function() {
        return move;
    };
    
    /*
     * @param {type} move
     *  this function sets the AI players move
     */
    this.setChoosenMove = function(choosen_move) {
       move = choosen_move;
    }; 
    
    /*
     * @return {type|string} piece index
     * 
     * this returns the piece index of the piece the AI player is going to move
     */
    this.getAIPieceIndex = function (){
        return piece_index;
    };
    
    /*
     * @param {type} index
     * 
     * this function sets the index of the chosen piece to the value that is
     * passed in
     */
    this.setSelectedPieceIndex = function(index){
        piece_index = index;
    }; 
    
    /*
     * @return {type|number}
     * 
     * this function returns the numerical value of the selected pieces x coord
     */
    this.getAISelectedPieceXCoord = function(){
        return origional_x;
    };
    
    /*
     * @param{type} x
     * @return {undefined}
     * 
     * this function takes in a number and then sets the x coordinate of the
     * piece to be this value. 
     */
    this.setAISelectedPieceXCoord = function(x){
        origional_x = x;
    };
    
    /*
     * @return {type|number}
     * 
     * this function returns the numerical value of the selected pieces y coord
     */
    this.getAISelectedPieceYCoord = function(){
        return origional_y;
    };
    
    /*
     * @param{type} x
     * @return {undefined}
     * 
     * this function takes in a number and then sets the x coordinate of the
     * piece to be this value
     */
    this.setAISelectedPieceYCoord = function(y){
        origional_y = y;
    };   
}