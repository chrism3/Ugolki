/*
 * This class will have a simple, simple AI. It might be made using a random function,
 * but this will be extended later on
 */

function simpleAI(){
    
    var board_representation;
    var best_move;
    
    // this method will be responsible for finding the move
    this.findAllMoves = function(pieces_to_move, board){
        board_representation = board;
        var possible_moves = new Array();
        var AI_moves = new findMoves();
        AI_moves.init(board_representation);
        for(var i = 0; i < pieces_to_move.length; i++){
            var current_piece = pieces_to_move[i];
            var x_coord = current_piece.getXCoord();
            var y_coord = current_piece.getYCoord();
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;            
            AI_moves.moveRight(right, y_coord);
            AI_moves.moveLeft(left, y_coord);
            AI_moves.moveUp(above, x_coord);
            AI_moves.moveDown(below, x_coord);
            AI_moves.jumpRight(right, y_coord);
            AI_moves.jumpLeft(left, y_coord);
            AI_moves.jumpUp(above, x_coord);
            AI_moves.jumpDown(below, x_coord);
        }
        possible_moves = AI_moves.getPossibleMoves();
        console.log(possible_moves.length);
        
        // now need to make the moves and evaluate them
        for(var i = 0; i < possible_moves.length; i++){
            
        };
        
    };
    
    // this method will return the move to the model... to the controller... to the view
    this.getBestMove = function(){
        return best_move;
    }; 
    
    // this will allow us to set the best move, so we can get it from the model.
    this.setBestMove = function(move){
        best_move = move;
    };
    
    // EVERYTHING BELOW DOES NOT WORK..... makeMove and undoMove may work? who knows
    
    
    this.makeMove = function(move_x_coord, move_y_coord, x_coord, y_coord){
        var piece_to_move = board[x_coord][y_coord];
        board[x_coord][y_coord] = 0;
        board[move_x_coord][move_y_coord] = piece_to_move;
    };
    
    this.undoMove = function(move_x_coord, move_y_coord, x_coord, y_coord){
        var piece_to_reset = board[move_x_coord][move_y_coord];
        board[move_x_coord][move_y_coord] = 0;
        board[x_coord][y_coord] = piece_to_reset;
    };
    
    
    var piece_index;
    var move;
    var origional_x;
    var origional_y;
    var board;
    var target_x = 0,
        target_y = 7;
    
    /*
     * hopefully wont need this... gives us yet another board_rep to ensure is up to date
     * 
     * this.updateBoard = function(board_rep){
        board = board_rep;
    };*/
    
    // this player will move entirely randomly... i.e wont be very good at the game
    this.decideMove = function(pieces_to_move, find_moves){
        var pieces = pieces_to_move;
        var can_move = true;
        var possible_moves = new Array();
        var manhattan_distances = new Array();
        /*console.log(pieces.length);*/
//        for(var i = 0; i < pieces.length; i++){
//            console.log(pieces[i].getPieceColour() + "       " + pieces[i].getXCoord() + "," + pieces[i].getYCoord());
//        }
        do{
            var random_piece_number = Math.floor((Math.random() * pieces.length));            
            var piece_to_move = pieces[random_piece_number];
            //console.log(piece_to_move);
            
            //get the coordinates we need to find possible moves
            //console.log("index of piece to get x and y of: " + random_piece_number);
            var x_coord = piece_to_move.getXCoord();
            this.setAISelectedPieceXCoord(x_coord);            
            var y_coord = piece_to_move.getYCoord();
            this.setAISelectedPieceYCoord(y_coord);
            var piece_id = piece_to_move.getPieceId();            
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;
            // then find the moves for this peice
            find_moves.moveRight(right, y_coord);
            find_moves.moveLeft(left, y_coord);
            find_moves.moveUp(above, x_coord);
            find_moves.moveDown(below, x_coord);
            find_moves.jumpRight(right, y_coord);
            find_moves.jumpLeft(left, y_coord);
            find_moves.jumpUp(above, x_coord);
            find_moves.jumpDown(below, x_coord);
            possible_moves = find_moves.getPossibleMoves();
            
            //console.log("length of the array " + possible_moves.length);
            //can_move = true;
            var array_length = possible_moves.length;
            if(array_length > 0){
                //console.log("index of piece to move: " + random_piece_number);
//                       console.log(" ");
//                        console.log(" ");
//                        console.log(" ");
//                        console.log(" ");
                console.log("the old x and y coords (simple AI): " +
                    x_coord + "," + y_coord);
                console.log("the id of the piece is: " + piece_id);
                // adding 1 because array index starts at 0, pieces id start at 1
                this.setSelectedPieceIndex(piece_id);
                
                can_move = false;
            }
        }
        while(can_move); 
        
        var random_move_number = Math.floor(Math.random() * possible_moves.length);

        console.log("the new x and y coords (simple AI): " +
                possible_moves[random_move_number].getX() + "," + possible_moves[random_move_number].getY());
        
        this.setChoosenMove(possible_moves[random_move_number]);
        
    };
    
    
    // this is a second decide move function... will not be random though
    this.decideMove2 = function(pieces_to_move, find_moves, model_board){
        console.log(pieces_to_move.length);
        board = model_board;
        
        var moves_checked = new Array();
        var count = 0;
        
        for(var i = 0; i < pieces_to_move.length; i++){
        console.log("piece at index: " + i);
        console.log("X = " + pieces_to_move[i].getXCoord() + " Y = " + pieces_to_move[i].getYCoord());
        }
        
        var possible_moves = new Array();
        var manhattan_distance = new Array();
        // may want to alter this to use only the moveable pieces
        for(var i = 0; i < pieces_to_move.length; i++){
            var current_piece = pieces_to_move[i];
            
            var x_coord = current_piece.getXCoord();
            var y_coord = current_piece.getYCoord();
            var right = x_coord + 1;
            var left = x_coord - 1;
            var above = y_coord - 1;
            var below = y_coord + 1;
            // then find the moves for this peice
            find_moves.moveRight(right, y_coord);
            find_moves.moveLeft(left, y_coord);
            find_moves.moveUp(above, x_coord);
            find_moves.moveDown(below, x_coord);
            find_moves.jumpRight(right, y_coord);
            find_moves.jumpLeft(left, y_coord);
            find_moves.jumpUp(above, x_coord);
            find_moves.jumpDown(below, x_coord);
            possible_moves = find_moves.getPossibleMoves();
            
            if(possible_moves.length > 0){
                for(var i = 0; i < possible_moves.length; i++){
                    console.log(possible_moves[i].getX() + ", " + possible_moves[i].getY());
                    var distance = this.manhattanEval(possible_moves[i].getX(), possible_moves[i].getY());
                    var manhattan_value = new Array();
                    var move_x_coord = possible_moves[i].getX();
                    var move_y_coord = possible_moves[i].getY();
                    if(!this.boardLocationVisited(move_x_coord, move_y_coord, moves_checked)){
                        console.log(count);
                        count++;
                        moves_checked.push(possible_moves[i]);
                        this.makeMove(move_x_coord, move_y_coord, x_coord, y_coord);
                        manhattan_value[0] = possible_moves[i];
                        manhattan_value[1] = distance;
                        manhattan_distance.push(manhattan_value);
                        this.undoMove(move_x_coord, move_y_coord, x_coord, y_coord);
                    }
                }
            }
        }
        console.log("finding the best move from returned values");
        var best_index = 0;
        for(var i = 1; i < manhattan_distance.length; i++){
            if(manhattan_distance[i][1] > manhattan_distance[best_index][1]){
                best_index = i;
            }
        }
        console.log("best index is: " + best_index);
        return manhattan_distance[best_index][0];
    };
    
    
    this.getChoosenMove = function() {
        return move;
    };
    // not sure when i would use this method, best to have it incase i s'pose
    this.setChoosenMove = function(choosen_move) {
       // console.log(choosen_move.getX() + "," + choosen_move.getY());
        move = choosen_move;
    };
    
    // these methods are needed to identify which piece has been selected...
    // needed by model and view
    this.getAIPieceIndex = function (){
        console.log("The index to be returned is: " + piece_index);
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
    
    
    this.getTargetX = function (){
        return target_x;
    };
    this.getTargetY = function (){
        return target_y;
    };
    this.setTargetX = function (new_x_target){
        target_x = new_x_target;
    };
    this.setTargetY = function (new_y_target){
        target_y = new_y_target;
    };
    
    // this function is an eval function to figure out the best move for the peice to make
    this.manhattanEval = function(current_x, current_y){
        /* will need to implement some way to account for the AI player 1/2
         * this will only work for player 2
         */
        
        /*
         * player 2's aim is 0,4 5 6 7
         *                   1,4 5 6 7
         *                   2,4 5 6 7
         *                   3,4 5 6 7
         */
        console.log(board[5][4]);
        console.log(current_x + "," + current_y);
        console.log(board[this.getTargetX()][this.getTargetY()]);
        
        // square 0,7 is the first place to fill
        var target_location = board[this.getTargetX()][this.getTargetY()];
        if(target_location.getPiecePlayer() !== "player_2"){
            var manhattan_x = current_x + this.getTargetX();
            var manhattan_y = current_y + this.getTargetY();
            
            var manhattan_distance = manhattan_x + manhattan_y;

        }
        else{
            if(target_location.getY() < 4){
                this.setTargetY(target_location.getY() + 1);
            }
            else{
                this.setTargetX(target_location.getX() + 1);
            }
        }
        console.log(manhattan_distance);
        return manhattan_distance;
    };
    

    
    this.boardLocationVisited = function(x_coord, y_coord, moves_checked){
        console.log("checking if the list contains the the move");
        for(var i = 0; i < moves_checked.length; i++){
            if(moves_checked[i].getX() === x_coord && moves_checked[i].getY() === y_coord){
                console.log("returning false;");
                return false;
            }
        }
        return true;
    };
    
    
}


