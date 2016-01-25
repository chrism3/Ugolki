/*
 * This class will have a simple, simple AI. It might be made using a random function,
 * but this will be extended later on
 */

function simpleAI(){
    console.log("I have got this far");
    
    var find_moves = new findMoves();
    var AI_moves = []; 
    var move;
    
    this.decideMove = function(){
        console.log("simple AI decide Move");
    };
    
    
    
    
    
    
    this.getChoosenMove = function() {
        return move;
    };
    // not sure when i would use this method, best to have it incase i s'pose
    this.setChoosenMove = function(choosen_move) {
        move = choosen_move;
    };
}


