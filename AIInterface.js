/*
 * this class will be used to do the leg work for the actual AI alogirthms. This class
 * has the evaluation functions, and the findMoves function so that the AI can just call them
 * and then suss out which is the best move. 
 * 
 * If the program was created in javascript that class would have been either an abstract
 * class, or an interface with an abstract class below it. 
 * 
 * Javascript does not allow for interfaces, therefore this 'AIInterface' file is more like
 * a file that reduces repetition of code for the AI algorithms. 
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


    /*
     * 
     * @param {type} pieces_to_move
     * @param {type} board
     * @param {type} game_type
     * @returns {Array}
     * 
     * this method takes in three parameters:
     *      - an array of the pieces to move
     *      - the models representaion of the board
     *      - the game type that is currently being played
     *      
     * This function returns all of the available moves found. 
     */
    this.findAllMoves = function (pieces_to_move, board, game_type){
        //console.log("game type: " + game_type);
        board_representation = board;
        var possible_moves = new Array();
        var AI_moves = new findMoves();
//        var no_of_good_moves = 0;
//        var unfavoured_moves = new Array();
        AI_moves.init(board_representation);
        //console.log(pieces_to_move.length);

        // this for loop is how the moves are found
        for(var i = 0; i < pieces_to_move.length; i++){
            //console.log(i);
            var current_piece = pieces_to_move[i];
            var x_coord = current_piece.getXCoord();
            var y_coord = current_piece.getYCoord();
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;
            // find the moves for the startard game type
            if(game_type === "standard"){                
                //console.log(current_piece);                            
                AI_moves.moveRight(right, y_coord, current_piece);
                AI_moves.moveLeft(left, y_coord, current_piece);
                AI_moves.moveUp(above, x_coord, current_piece);
                AI_moves.moveDown(below, x_coord, current_piece);
                AI_moves.multipleJump3(x_coord, y_coord, current_piece);
                possible_moves = AI_moves.getPossibleMoves();
            }
            // find the moves for the no multiple jump game type
            else if(game_type === "no multi jump"){
                console.log("need to find some different moves");
                AI_moves.moveRight(right, y_coord, current_piece);
                AI_moves.moveLeft(left, y_coord, current_piece);
                AI_moves.moveUp(above, x_coord, current_piece);
                AI_moves.moveDown(below, x_coord, current_piece);
                AI_moves.jumpRight(right, y_coord, current_piece);
                AI_moves.jumpLeft(left, y_coord, current_piece);
                AI_moves.jumpUp(above, x_coord, current_piece);
                AI_moves.jumpDown(below, x_coord, current_piece);
                possible_moves = AI_moves.getPossibleMoves();                
            }
            // find the moves for the toward goal only game type
            else if(game_type === "toward goal"){
                /*
                 * this section needs to check the colour of the pieces to move,
                 * as the direction of the goal differs for the different players 
                 * and therefore different moves need to be looked for. 
                 */
                if(AI_colour === "white"){
                    AI_moves.moveRight(right, y_coord, current_piece);
                    AI_moves.moveUp(above, x_coord, current_piece);
                    AI_moves.jumpUp(above, x_coord, current_piece);
                    AI_moves.jumpRight(right, y_coord, current_piece);                    
                }
                if(AI_colour === "black"){
                    AI_moves.moveLeft(left, y_coord, current_piece);
                    AI_moves.moveDown(below, x_coord, current_piece);
                    AI_moves.jumpLeft(left, y_coord, current_piece);
                    AI_moves.jumpDown(below, x_coord, current_piece);
                }
                possible_moves = AI_moves.getPossibleMoves();
            }
        }
        // return the possible moves
        return possible_moves;
    };
    
    /*
     * 
     * @param {type} possible_moves
     * @returns {Array}
     * 
     * this algorithm takes in a list of all of the possible moves found above, 
     * and then evaluates their impact on the game.
     * 
     *  the eval makes use of the manhattan path distance to evaluation the 
     *  impact of the possible moves.  
     */
    this.evalAllMoves = function(possible_moves){
        //var no_of_good_moves = 0;
        var good_moves = new Array();
        var bad_moves = new Array();
        var all_moves = new Array();
        // get the evaluation of the current board
        var current_eval = this.eval();
        //console.log("current_eval: " + current_eval);
        for(var i = 0; i < possible_moves.length; i++){
            var x_to_reset = possible_moves[i].getPieceToMove().getXCoord();
            var y_to_reset = possible_moves[i].getPieceToMove().getYCoord();
            // this makes the possible move, so it's impact can be determined. 
            this.makeMove(possible_moves[i]);            
            // then recalls the eval function
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
    
    /*
     * @returns {type|number} manhattan_path_distance
     * 
     * this function returns the manhattan path distance for the current state
     * of the board (this includes when the AI player has called the makeMove 
     * function to find out how each moves makes an impact on the game)
     */
    this.eval = function(){
        var manhattan_distance = 0;

        
        for(var i = 0; i < board_representation.length; i++){
            for(var j = 0; j < board_representation.length; j++){
                if(board_representation[i][j] !== 0){
                    if(board_representation[i][j].getPieceColour() === this.getAIColour()){ 
                        var manhattan_x;
                        var manhattan_y;
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
                        // add the values together to calucluate the mahattan eval for each individual piece
                        var manhattan_eval = manhattan_x + manhattan_y;
                        // add the eval to the overall distance to calucalte for each individual piece
                        manhattan_distance += manhattan_eval;
                    }
                }
            }
        }
        // return the path distance
        return manhattan_distance;
    };
    
 
    /*
     * this is the non-functioning depth limited search that was mentioned in the
     * report. The code for this section never worked, however some vague psuedo code
     * has been included to give a rough gide of how this method would have ideally worked. 
     */
    this.dls = function(depth, move, pieces){
        
        // while depth is not reached
                // make the move passed in
                // evaluate the reuslt of making such a move
                // refind all available moves, and pass in a given move
                // recall dls, to search to the depth
                
        // if the depth had been reached
                // find which evaluation was the best over the series
                // of moves to that given depth
        
        
        //console.log("this has been called");
        //var best_move;

    };
    
    /*
     * @param {move}
     * 
     * this function takes in a move, and then actually makes this move so that
     * the evaluation of making such a move can be calcualted. 
     */
    this.makeMove = function(move){
        var current_piece = move.getPieceToMove();
        var current_x = current_piece.getXCoord();
        var current_y = current_piece.getYCoord();
       // console.log(current_x + "," + current_y);
        board_representation[current_x][current_y] = 0;
        current_piece.setXCoord(move.getX());
        current_piece.setYCoord(move.getY());
        board_representation[move.getX()][move.getY()] = current_piece;
    };
    
    
    /*
     * @param {move, x_to_rest, y_to_rest}
     * 
     * this function takes in three arguments:
     *      - the move that has been made
     *      - the x coord that has to be reset
     *      - the y coord that has to be reset
     *      
     * this function resets the move that is made in the function above
     * to stop the board representaion from becoming unreliable
     */
    this.undoMove = function(move, x_to_reset, y_to_reset){
        var current_piece = move.getPieceToMove();
        board_representation[move.getX()][move.getY()] = 0;
        current_piece.setXCoord(x_to_reset);
        current_piece.setYCoord(y_to_reset);
        board_representation[x_to_reset][y_to_reset] = current_piece;
    };
    
    /*
     * @return {target_x |number}
     * 
     * this returns the numerical value of the of the current X coord
     * of the target location. 
     */
    this.getTargetX = function (){
        return target_x;
    };
    
    /*
     * @return {target_y |number}
     * 
     * this returns the numerical value of the current Y coord 
     * of the target location. 
     */
    this.getTargetY = function (){
        return target_y;
    };
    
    /*
     * @param{new_x_target}
     * @return{undefined}
     * 
     * this sets the new x target for the AI player
     */
    this.setTargetX = function (new_x_target){
        //console.log("setting target x to: " + new_x_target);
        target_x = new_x_target;
    };
    
    /*
     * @param {new_y_target}
     * @return {undefined}
     * 
     * this sets the new y target for the AI player
     */
    this.setTargetY = function (new_y_target){
        target_y = new_y_target;
    };

    /*
     * @return {type| string}
     *  functions returns a string value of the current player
     *  value - either player 1 or 2
     */
    this.getAIPlayer = function(){
        return AI_player;
    };
   
   /*
    * @param {type| string}
    * @return {undefined}
    * 
    * function to set the AI player to either player 1 or 2
    */
    this.setAIPlayer = function(new_player){
        AI_player = new_player;
    };
    
    /*
     * @param {undefined}
     * 
     * function to set the default target settings for an AI player
     * using white pieces
     */
    this.setTargetForWhiteAIPlayer = function(){
        this.setTargetX(7);
        this.setTargetY(0);
    };
    
    /*
     * @param {undefined}
     * 
     * function to set the default target settings for an AI player
     * using black pieces
     */
    this.setTargetForBlackAIPlayer = function(){
        this.setTargetX(0);
        this.setTargetY(7);
    };
    
    /*
     * 
     * @param {string}
     * 
     * this function is used to set the colour of the AI player to either
     * black or white, this is the string value passed in.  
     */
    this.setAIColour = function(colour){
        AI_colour = colour;
    };
    
    /*
     * @return {type| string}
     * 
     * this returns the string value for the AI player that represents the colour
     * of the peices that the AI is to move. 
     */
    this.getAIColour = function(){
        return AI_colour;
    };
    
    /*
     * 
     * @return {undefined}
     * 
     * this sets the Ai player to white at the start of the game
     * when it is necessary to do so. This is used to make the AI player play
     * first after the pressing of new game. 
     */
    this.setNewGameAI = function(){
        AI_colour = "white";
    };
}
