/*
 * This class will have a simple, simple AI. It might be made using a random function,
 * but this will be extended later on
 */

function simpleAI(){
    console.log("I have got this far");
    
    var find_moves = new findMoves();
    var AI_moves = []; 
    var move;
    
    // this player will move entirely randomly... i.e wont be very good at the game
    this.decideMove = function(pieces_to_move, find_moves){
        console.log("simple AI decide Move");
        var pieces = pieces_to_move;
        var can_move = false;
        var possible_moves = new Array();
        /*console.log(pieces.length);
        for(var i = 0; i < pieces.length; i++){
            console.log(pieces[i].getPieceColour());
        }*/
        do{
            var random_piece_number = Math.floor((Math.random() * pieces.length));
            console.log(random_piece_number);
            var piece_to_move = pieces[random_piece_number];
            //console.log(piece_to_move);
            
            //get the coordinates we need to find possible moves
            var x_coord = piece_to_move.getXCoord();
            var y_coord = piece_to_move.getYCoord();
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
            
            console.log("length of the array " + possible_moves.length);
            //can_move = true;
            var array_length = possible_moves.length;
            if(array_length > 0){
                console.log("setting can move to true");
                can_move = true;
            }
        }
        while(!can_move); 
        
        var random_move_number = Math.floor(Math.random() * possible_moves.length);
        console.log(random_move_number);
        console.log(possible_moves[random_move_number].getX());
        this.setChoosenMove(possible_moves[random_move_number]);
        
    };
    
    
    
    
    
    
    this.getChoosenMove = function() {
        return move;
    };
    // not sure when i would use this method, best to have it incase i s'pose
    this.setChoosenMove = function(choosen_move) {
        console.log(choosen_move.getX() + "," + choosen_move.getY());
        move = choosen_move;
    };
}


