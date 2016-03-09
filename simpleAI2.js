/*This version of the 'mediumAI' is very basic and uses only random moves that are good for the current 
  the Manhattan Distance. This could be a a good idea for a easy AI instead, and maybe improve the current
  easy AI to be the medium one and then work on the hard one
*/

/*
 * This class will be used to make a slightly smarter AI, that will hopefully provide the user
 * a more challenging game than the easy AI
 */


// one thing I might do is make an AI class and have it with all the repeated methods. 

function simpleAI2(){
    
    var board_representation;
    var choosen_move;
    var piece_index;
    var origional_x;
    var origional_y;
    var copy_of_model;
    var AI_player;
    
    this.simpleAI2 = function(board_rep, model, AI){
        console.log("simpleAI2");
        board_representation = board_rep;
        AI_player = AI;
        this.updateTarget();
        console.log("the goal location is: " + AI_player.getTargetX() + "," + AI_player.getTargetY());
        copy_of_model = model;
        var pieces = copy_of_model.getPieces();        
        var all_moves = AI_player.evalAllMoves(AI.findAllMoves(pieces, board_rep));
        var good_moves = all_moves[0];
        this.decideBestMove(good_moves);                         
    }; 
    
    // this is how the better AI selects it's move
    this.decideBestMove = function(good_moves){
        // need to make sure there is a valid target
        var random_index = parseInt(Math.random()*good_moves.length);
        this.setChoosenMove(good_moves[random_index][0]);
        var random_piece = good_moves[random_index][0].getPieceToMove();
        this.setSelectedPieceIndex(random_piece.getPieceId());
        this.setAISelectedPieceXCoord(random_piece.getXCoord());
        this.setAISelectedPieceYCoord(random_piece.getYCoord());
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
                console.log("***********");
                console.log("coords this time: " + x + "," + y);
                console.log(" ");
                //console.log("updating white target");
                if(board_representation[x][y] !== 0){
                    console.log("there is a piece in that location");
                    console.log("piece colour is: " + board_representation[x][y].getPieceColour());
                    if(board_representation[x][y].getPieceColour() === "white"){
                        copy_of_model.addPieceToGoalLocationList(board_representation[x][y]);
                        if(x > 4){
                            console.log("x is greater than 4");
                            AI_player.setTargetX(x-1);
                            x = x - 1;
                            console.log("getting the new x value" + AI_player.getTargetX());
                        }
                        else{
                            console.log("x is not greater than 4");
                            AI_player.setTargetY(y+1);
                            AI_player.setTargetX(7);
                            y = y + 1;
                            x = 7;
                        }
                    }
                    else{
                        console.log("piece was wrong colour");
                        console.log("These are the x and y values: " + x + "," + y);
                        console.log("These are the AI x and y values: " + AI_player.getTargetX() + "," + AI_player.getTargetY());
                        target_free = false;
                    }
                }
                else{
                    target_free = false;
                }
            }while(target_free);            
            console.log("breaking the do while");
            console.log("x = " + AI_player.getTargetX() + " y = " + AI_player.getTargetY());
        }
        if(AI_goals_filled.length > 0){
                for(var i = 0; i < AI_goals_filled.length; i++){
                    console.log("GOAL FILLED: " + AI_goals_filled);
                }
            }
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


  


