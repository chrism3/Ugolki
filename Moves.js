/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function findMoves(){
     var board = new Array();
     var possible_moves;
     var possible_jumps;
    
    this.init = function(board_representation){
        // not sure how I will use this yet,but it will be used
        board = board_representation;
        possible_moves = new Array();
        possible_jumps = new Array();
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
    this.jumpRight = function(right, y_coord){
        console.log();
        if(right+1 <= board.length && board[right][y_coord] !== 0 ){
            if(right+1 < board.length && board[right+1][y_coord] === 0){
                console.log("adding jump right");
                var move = new possibleMove;
                move.newMove(right+1, y_coord);
                //possible_moves.push(move);
                possible_jumps.push(move);
            }
        }
    };    

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
                console.log("adding jump left");
                var move = new possibleMove;
                move.newMove(left-1, y_coord);
                possible_jumps.push(move);
            }
        }        
    }; 
    
    this.jumpUp = function(above, x_coord){
        if(above-1 >= 0 && board[x_coord][above] !== 0){
            if(above-1 >= 0 && board[x_coord][above - 1] === 0){
                console.log("adding jump above");
                var move = new possibleMove;
                move.newMove(x_coord, above-1);
                possible_jumps.push(move);
            }
        }
    };
    
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
                console.log("adding jump below");
                var move = new possibleMove;
                move.newMove(x_coord, below+1);
                possible_jumps.push(move);
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
    
    this.multipleJump2 = function(x_coord, y_coord, right, left, above, below){
        var current_x = x_coord;
        var current_y = y_coord;
        
        var current_coords = new Array();
        current_coords[0] = current_x;
        current_coords[1] = current_y;
        var possible_move_coords = new Array(); 
        possible_move_coords.push(current_coords);
       
        
        // need a visited list to keep track of squares all ready checked
        var visited_locations = new Array();
        
        //console.log(possible_move_coords[0][1]);
        while(possible_move_coords.length > 0){
        
//        var count = 0;
//        while(count < 3){
//            //console.log(count);
//            //console.log(possible_move_coords.length);
//            if(possible_move_coords.length > 0){
            var x = possible_move_coords[0][0];
            var y = possible_move_coords[0][1];
            var visited = new Array();
            visited[0] = x;
            visited[1] = y;
//            if(visited_locations.length < 1){
//                visited_locations.push(visited);
//            }
            if(!this.isVisited(visited, visited_locations)){
                //console.log("pushing to visited list");
                visited_locations.push(visited);
            }
            var right = x + 1;
            var left = x - 1;
            var above = y -1;
            var below = y + 1;
//            this.moveRight(right, y);
//            this.moveLeft(left, y);
//            this.moveUp(above, x);
//            this.moveDown(below, x);
            this.jumpRight(right, y);
            this.jumpLeft(left, y);
            this.jumpUp(above, x);
            this.jumpDown(below, x);
            var moves_found = this.getPossibleJumps();
            console.log("length of found moves before function call " + moves_found.length);
            console.log("length of visited squares before function call " + visited_locations.length);
            for(var i = 0; i < moves_found.length; i++){
                    if(!this.containsMove(visited_locations, moves_found)){
                    var new_move_coord = new Array();
                    new_move_coord[0] = moves_found[i].getX();
                    new_move_coord[1] = moves_found[i].getY();
                    possible_move_coords.push(new_move_coord);
                    //visited_locations.push(new_move_coord);
                    var move = new possibleMove;
                    move.newMove(new_move_coord[0], new_move_coord[1]);
                    possible_moves.push(move);
                    console.log("Adding new move with coords: " + new_move_coord[0] + "," + new_move_coord[1]);
                }
            }
            //console.log("before splice " + possible_move_coords.length);
            possible_move_coords.splice(0, 1);
            //console.log("At first index: " + possible_move_coords[0][0] + "," + possible_move_coords[0][1]);
            console.log("after splice " + possible_move_coords.length);
            for(var i = 0; i < possible_move_coords.length; i++){
                console.log("Coords at index: " + i + " = " +possible_move_coords[i][0] + "," + possible_move_coords[i][1]);
            }
            
            
//        }
//        count++;
        }
        
        
        
    };
    
    // method to get all of the possible moves
    this.getPossibleMoves = function(){
        //console.log(possible_moves.length);
        return possible_moves;
    };
    
    this.getPossibleJumps = function(){
        console.log("getting possible jumps");
        return possible_jumps;
    };
    
    /*
     * made this emthod to check if the current square has all ready been visited,
     * bit messy but will hopefully work
     */
//    this.containsMove = function(visited_squares, moves_found, index){
//        
//        console.log("in containsMove length of visited_sqaures = " + visited_squares.length);
//        for(var i = 0; i < visited_squares.length; i++){
//            console.log("values in visited squares: " + visited_squares[i][0] + "," + visited_squares[i][1]);
//        }
//        if(visited_squares[index] === undefined){
//            return false;
//        }
//        
//        console.log("The index is: " + index);
//        var current_x = visited_squares[index][0];
//        var current_y = visited_squares[index][1];
//        var has_been_visited = false;
//        
//        //console.log("called containsMove " + moves_found.length);
//        
//        for(var i = 0; i < moves_found.length; i++){
//            var check_x = moves_found[i].getX();
//            var check_y = moves_found[i].getY();
//            console.log("compareing x values " + current_x + " and " + check_x);
//            console.log("comparing y values " + current_y + " and " + check_y);
//            if(check_x === current_x && check_y === current_y){
//                console.log("all ready visited");
//                has_been_visited = false;
//                return has_been_visited;
//            }
//        }
//        
//        return has_been_visited;
//    };

    this.containsMove = function(visited_squares, moves_found){
        //var has_been_visited = false;
        
        for(var i = 0; i < visited_squares.length; i++){
            var current_x = visited_squares[i][0];
            var current_y = visited_squares[i][1];
            for(var j = 0; j < moves_found.length; j++){
                var check_x = moves_found[j].getX();
                var check_y = moves_found[j].getY();
                console.log("compareing x values " + current_x + " and " + check_x);
                console.log("comparing y values " + current_y + " and " + check_y);
                if(current_x === check_x && current_y === check_y){
                    return true;
                }
            }               
        }
        return false;
    };
    
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

