/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */


// one thing I might do is make an AI class and have it with all the repeated methods. 

function mediumAI(){
    
    var board;
    var choosen_move;
    var piece_index;
    
    this.mediumAI = function(pieces, board_rep){
            board = board_rep;
            var AI = new generalAI();            
                         
    }; 
    
    
    this.setChoosenMove = function(move){
        choosen_move = move;
    };
    this.getChoosenMove = function(){
        return choosen_move;
    };
    this.getAIPieceIndex = function (){
        console.log("The index to be returned is: " + piece_index);
        return piece_index;
    };
    this.setSelectedPieceIndex = function(index){
        piece_index = index;
    };

}


