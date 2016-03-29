/*
 * this is the file where all of the moves (simple and jump moves) for the
 * pieces are found. the init function works like a constructor for this section
 * of the code. 
 */

function findMoves(){
     var board = new Array();
     var possible_moves;
     var possible_jumps;
     var game_type;
    
    /*
     * 
     * @param {type} board_representation
     * @param {type} current_game_type
     * @returns {undefined}
     * 
     * this is basically the constructor for the file. 
     */
    this.init = function(board_representation, current_game_type){
        board = board_representation;
        possible_moves = new Array();
        possible_jumps = new Array();
        game_type = current_game_type;
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value to the right, the y_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves to the right 
     */
    this.moveRight = function(right, y_coord, piece){
        if(right < board.length && board[right][y_coord] === 0){
            var move = new possibleMove;
            move.newMove(right, y_coord, piece);
            possible_moves.push(move);
        }
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value to the left, the y_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves to the left 
     */
    this.moveLeft = function(left, y_coord, piece) {
        if (left >= 0 && board[left][y_coord] === 0) {
            var move = new possibleMove;
            move.newMove(left, y_coord, piece);
            possible_moves.push(move);
        }
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value above the piece, the x_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves above 
     */
    this.moveUp = function(above, x_coord, piece) {
        if (above >= 0 && board[x_coord][above] === 0) {
            var move = new possibleMove;
            move.newMove(x_coord, above, piece);
            possible_moves.push(move);
        }
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value below the peice, the x_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves below the piece 
     */
    this.moveDown = function(below, x_coord, piece) {
        if (below < board.length && board[x_coord][below] === 0) {
            //console.log("adding below");
            var move = new possibleMove;
            move.newMove(x_coord, below, piece);
            possible_moves.push(move);
        }
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value to the right, the y_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves that require to a jump to the right
     */
    this.jumpRight = function(right, y_coord, piece){
        if(right+1 <= board.length && board[right][y_coord] !== 0 ){
            if(right+1 < board.length && board[right+1][y_coord] === 0){
                var move = new possibleMove;
                move.newMove(right+1, y_coord, piece);
                possible_jumps.push(move);
                if(game_type === "no multi jump" || game_type === "toward goal"){
                    possible_moves.push(move);
                }
            }
        }
    };    

     /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value to the left, the x_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves that jump to the left 
     */   
    this.jumpLeft = function(left, y_coord, piece){
        if(left-1 >= 0 && board[left][y_coord] !== 0){                
            if(left-1 >= 0 && board[left-1][y_coord] === 0){
                var move = new possibleMove;
                move.newMove(left-1, y_coord, piece);
                possible_jumps.push(move);
                if(game_type === "no multi jump" || game_type === "toward goal"){
                    possible_moves.push(move);
                }
            }
        }        
    }; 
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value above the piece, the x_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves that jump up
     */
    this.jumpUp = function(above, x_coord, piece){
        //console.log("jump up called... above = " + above);
        if(above-1 >= 0 && board[x_coord][above] !== 0){
            if(above-1 >= 0 && board[x_coord][above - 1] === 0){
                //console.log("adding jump above");
                //console.log(piece);
                if(piece === undefined){
                    //console.log("there is no piece");
                }
                else{
                    //console.log("there is a piece");
                }
                var move = new possibleMove;
                move.newMove(x_coord, above-1, piece);
                //possible_moves.push(move);
                possible_jumps.push(move);
                if(game_type === "no multi jump" || game_type === "toward goal"){
                    possible_moves.push(move);
                }
            }
        }
    };
    
    /*
     * 
     * @param {type} right
     * @param {type} y_coord
     * @param {type} piece
     * @returns {undefined}
     * 
     * this does not return any moves, instead it adds the possible move to a list. 
     * It takes in the value below the piece, the x_coord of the piece and the actual 
     * piece and (when called by the AI) it takes in the piece as well. 
     * 
     * This finds the moves that jump down 
     */    
    this.jumpDown = function(below, x_coord, piece){
        //console.log("jump down has been called");
        if(below+1 < board.length && board[x_coord][below] !== 0){
            if(below+1 < board.length && board[x_coord][below + 1] === 0){
                var move = new possibleMove;
                move.newMove(x_coord, below+1, piece);
                possible_jumps.push(move);
                if(game_type === "no multi jump" || game_type === "toward goal"){
                    possible_moves.push(move);
                }
            }
        }        
    };

    
    /*
     * 
     * @param {type} xcoord
     * @param {type} ycoord
     * @param {type} piece
     * @returns {undefined}
     * 
     * 
     * piece paramater is only needed for the AI, for a human player the view
     * knows which piece has been selected on click. AI needs a note of which piece
     * has been selected so that the controller can pass it back to the view to make
     * the correct moves 
     * 
     * for a more in depth description of how multiple jump works, please view detailed 
     * description in the report, specifically section  5.6.1
     */
     
    this.multipleJump3 = function(xcoord, ycoord, piece){
        var visited_locations = new Array();
        var moves_found = new Array();
        var coords = new Array; // is this actually needed
        
        
        if(piece !== undefined){
            //console.log(piece.getXCoord());
        }
        // add xcoord and ycoord to the current cords array
        var current_coords = new Array();        
        current_coords[0] = xcoord;
        current_coords[1] = ycoord;
        // add the current coords to the coords array
        coords.push(current_coords);
        
        //console.log("current coords being added: " + coords[0][0], coords[0][1]);
        
        var count = 0;
        // loop round while coords is not empty
        while(coords.length > 0){
//            console.log(count + " is the iteration count of the loop");
//            console.log("coords needed to be used: " + coords[0][0] + "," + coords[0][1]);
//            console.log("how many visted locations: " + visited_locations.length);
            for(var i = 0; i < visited_locations.length; i++){
                //console.log(coords[i][0] + "," + coords[i][1]);
                //console.log(visited_locations[i]);
            }
            // check if the first index is all ready visited, if not add it to visited list
            if(!this.isVisited(new Array(coords[0][0], coords[0][1]), visited_locations)){
                //console.log("adding new location with coord: " + coords[0][0] + "," + coords[0][1]);
                visited_locations.push(new Array(coords[0][0], coords[0][1]));
                
                var x = coords[0][0];
                var y = coords[0][1];
                
                /*
                 * now that the coords are added to the visited list, want to find all 
                 * possible jump moves form this location
                 */  
                // get the necessary values
                var right = x + 1;
                var left = x - 1;
                var above = y - 1;
                var below = y + 1;
                // call the jump methods
                //console.log(piece);
                if(piece !== undefined){
                    //console.log(piece.getXCoord());
                }
                this.jumpRight(right, y, piece);
                this.jumpLeft(left, y, piece);
                this.jumpUp(above, x, piece);
                this.jumpDown(below, x, piece);
                // get the jumps found
                moves_found = this.getPossibleJumps();
               
              //console.log("number of moves found: " + moves_found.length);
                
               // need to check if every has all ready been visited                
                for(var i = 0; i < moves_found.length; i++){
                    //console.log("the move is: " + moves_found[i].getX() + "," + moves_found[i].getY());
                     var visited = new Array();
                     visited.push(new Array(coords[0][0], coords[0][1]));
                     //console.log("length of visited: " + visited.length);
                    // check to see if the square of the move has all ready been visited
                    //console.log("the current value of i is: " + i);
                    if(!this.containsMove(visited, moves_found[i])){
                            // this must therefore be an unsees possible move, add it to possible_moves
                            var move = new possibleMove();
                            //console.log("moves_found coords in the contains if: " + moves_found[i].getX() + "," + moves_found[i].getY());
                            move.newMove(moves_found[i].getX(), moves_found[i].getY(), piece);
                            possible_moves.push(move);
                            // also need to add to coords, to loop round
                            var new_move_coords = new Array(moves_found[i].getX(), moves_found[i].getY());
//                            console.log("");
//                            console.log("");
//                            console.log("new_move_coords value: " + new_move_coords[0] + "," + new_move_coords[1]);
                            coords.push(new_move_coords);
                            //console.log(move.getX() + "," + move.getY() + " has been added to possible_moves");
                            visited.push(new_move_coords);
//                            console.log("added to coords value: " + moves_found[i].getX() + "," + moves_found[i].getY());
//                            console.log("number of locations to check: " + coords.length);                        
                    }
                }
            }
            // remove the first item from the array because it has now been used
            coords.shift();
            //console.log("after shift: " + coords.length);
            if(coords.length > 0){
                //console.log("coords at first index: " + coords[0][0] + "," + coords[0][1]);
            }
            count++;
            /*
             * need to clear the jump_moves, this is because the array is global, and is remembering
             * the values that should ne be rememebered?
             */
            //console.log("possible_moves.length: " + possible_moves.length);
            possible_jumps.splice(0, possible_jumps.length);
        }
        //console.log(possible_moves.length);
            for(var i = 0; i < possible_moves.length; i++){
                var text_x = possible_moves[i].getX();
                var text_y = possible_moves[i].getY();
                //console.log("move coords: " + text_x + "," + text_y);
            }
        //console.log("no more locations to check");        
    };
    
    /*
     * @returns {type|array} possible_moves
     * 
     * this returns the possible moves that were found
     */
    this.getPossibleMoves = function(){
        return possible_moves;
    };
    
    
    /*
     * @returns {type|array} possible_jumps
     * 
     * this returns the possible jumps that were found
     */
    this.getPossibleJumps = function(){
        //console.log("getting possible jumps");
        return possible_jumps;
    };
     
     /*
      * @param {type| array} visited_squares
      * @param {type| array} moves
      * @returns {type| boolean}
      * 
      *  this checks to see if the move found has already been visited, by looking
      *  through the list of visited squares to see if the moves x and y coordinates 
      *  match the coords of any of the visited squares.  
      */
    this.containsMove = function(visited_squares, move){
        //var has_been_visited = false;
        var check_x = move.getX();
        var check_y = move.getY();
        
        if(visited_squares.length < 1){
            //console.log("doesnt contain move... adding new move with coords: " + check_x + "," + check_y);
            return false;
        }
        
        //console.log(move);
        for(var i = 0; i < visited_squares.length; i++){
            var current_x = visited_squares[i][0];
            var current_y = visited_squares[i][1];
                //console.log("compareing x values " + current_x + " and " + check_x);
                //console.log("comparing y values " + current_y + " and " + check_y);
                if(current_x === check_x && current_y === check_y){
                    //console.log("contains move... not add move with coords: " + check_x + "," + check_y);
                    return true;
                    break;
                }               
        }
        //console.log("doesnt contain move... adding new move with coords: " + check_x + "," + check_y);
        return false;
    };
    
    /*
     * This function is the one used to check if the location has already
     * been visited. for a better description of this function please check 
     * the report section 5.6.1
     */
    this.isVisited = function (visited, visited_squares){
        var visited_x = visited[0];
        var visited_y = visited[1];
        //console.log("checking is visited");
        for(var i = 0; i < visited_squares.length; i++){
            var x = visited_squares[i][0];
            var y = visited_squares[i][1];
            //console.log("is visited X = " + x + " and " + visited_x);
            //console.log("is visited Y = " + y + " and " + visited_y);
            if(visited_x === x && visited_y === y){
                return true;
                break;
            }
        }
        return false;
    };
}

