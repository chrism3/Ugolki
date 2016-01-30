/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function findMoves(){
     var board = new Array();
     var possible_moves;
    
    this.init = function(board_representation){
        // not sure how I will use this yet,but it will be used
        board = board_representation;
        possible_moves = new Array();
    };
    
    // four functions to do the moves left, right, up, and down
    this.moveRight = function(right, y_coord){
        if(right < board.length && board[right][y_coord] === 0){
            var move = new possibleMove;
            move.newMove(right, y_coord);
            possible_moves.push(move);
        }
    };
    this.moveLeft = function(left, y_coord) {
        if (left >= 0 && board[left][y_coord] === 0) {
            var move = new possibleMove;
            move.newMove(left, y_coord);
            possible_moves.push(move);
        }
    };
    this.moveUp = function(above, x_coord) {
        if (above >= 0 && board[x_coord][above] === 0) {
            var move = new possibleMove;
            move.newMove(x_coord, above);
            possible_moves.push(move);
        }
    };
    this.moveDown = function(below, x_coord) {
        if (below < board.length && board[x_coord][below] === 0) {
            //console.log("adding below");
            var move = new possibleMove;
            move.newMove(x_coord, below);
            possible_moves.push(move);
        }
    };
    
    /*
     * the next four functions fine the jump moves...
     * should modify this so that it can find the continuous jump
     * moves
     */
//    this.jumpRight = function(right, y_coord){
//        if(right+1 <= board.length && board[right][y_coord] !== 0 ){
//            if(right+1 < board.length && board[right+1][y_coord] === 0){
//                //console.log("adding jump right");
//                var move = new possibleMove;
//                move.newMove(right+1, y_coord);
//                possible_moves.push(move);
//            }
//        }
//    };    

//    this.jumpRight = function(right, y_coord){
//        var jump = true;
//        while(jump){
//            if(right+1 <= board.length && board[right][y_coord] !== 0 ){
//                if(right+1 < board.length && board[right+1][y_coord] === 0){
//                    //console.log("adding jump right");
//                    var move = new possibleMove;
//                    move.newMove(right+1, y_coord);
//                    possible_moves.push(move);
//                    right = right + 2;
//                }
//                else{
//                    jump = false;
//                }
//            }
//            else{
//                jump = false;
//            }
//        }
//    };
    
    this.jumpLeft = function(left, y_coord){
        if(left-1 >= 0 && board[left][y_coord] !== 0){                
            if(left-1 >= 0 && board[left-1][y_coord] === 0){
                //console.log("adding jump left");
                var move = new possibleMove;
                move.newMove(left-1, y_coord);
                possible_moves.push(move);
            }
        }        
    }; 
    
//    this.jumpUp = function(above, x_coord){
//        if(above-1 >= 0 && board[x_coord][above] !== 0){
//            if(above-1 >= 0 && board[x_coord][above - 1] === 0){
//                //console.log("adding jump above");
//                var move = new possibleMove;
//                move.newMove(x_coord, above-1);
//                possible_moves.push(move);
//            }
//        }
//    };
//    this.jumpUp = function(above, x_coord){
//        var jump_up = true;
//        while(jump_up){
//            if(above-1 >= 0 && board[x_coord][above] !== 0){
//                if(above-1 >= 0 && board[x_coord][above - 1] === 0){
//                    //console.log("adding jump above");
//                    var move = new possibleMove;
//                    move.newMove(x_coord, above-1);
//                    possible_moves.push(move);
//                    above = above-2;
//                }
//                else{
//                    jump_up = false;
//                }
//            }
//            else{
//                jump_up = false;
//            }
//        }
//    };
    
    this.jumpDown = function(below, x_coord){
        if(below+1 < board.length && board[x_coord][below] !== 0){
            if(below+1 < board.length && board[x_coord][below + 1] === 0){
                //console.log("adding jump below");
                var move = new possibleMove;
                move.newMove(x_coord, below+1);
                possible_moves.push(move);
            }
        }        
    };
    
    this.multipleJump = function(x_coord, y_coord, right, left, above, below){
        var jump_right = true;
        var jump_left = true;
        var jump_up = true;
        var jump_down = true;
        var jump = true;
        while(jump){
            //console.log("in the while loop");
            while(jump_right){
                if(right+1 <= board.length && board[right][y_coord] !== 0 ){
                    console.log(board[right][y_coord]);
                    if(right+1 < board.length && board[right+1][y_coord] === 0){
                        console.log("adding jump right");
                        var move = new possibleMove;
                        move.newMove(right+1, y_coord);
                        possible_moves.push(move);
                        right = right + 2;
                    }
                    else{
                        //console.log("in else of second if");
                        jump_right = false;
                    }
                }
                else{
                    //console.log("in else of first if");
                    jump_right = false;
                }
            }
            while(jump_up){
                if(above-1 >= 0 && board[x_coord][above] !== 0){
                    if(above-1 >= 0 && board[x_coord][above - 1] === 0){
                        console.log("adding jump above");
                        var move = new possibleMove;
                        move.newMove(x_coord, above-1);
                        possible_moves.push(move);
                        above = above -2;
                    }
                    else{
                        console.log("in else of second if");
                        jump_up = false;
                    }
                }
                else{
                    console.log("in else of first if");
                    jump_up = false;
                }
            }
            
            
            
            
            if(!jump_right && !jump_up){
                console.log("breaking the loop");
                jump = false;
            }
        }
    };
    
    // method to get all of the possible moves
    this.getPossibleMoves = function(){
        //console.log(possible_moves.length);
        return possible_moves;
    };
}

