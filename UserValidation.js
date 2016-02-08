/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function detailsValidation(){
    
    // this method validates user input for signing up
    this.signUpValidation = function (user_details){
       // boolean representation of details status
       var details_okay = true;
       for(var i = 0; i < user_details.length; i++){
           if(user_details[i] === ""){
               details_okay = false;
               break;
           }
       }
       
       if(user_details[1] !== user_details[2]){
           details_okay = false;
       }
       
       console.log(details_okay);
       
       // if details_okay call the php
    };
    
}

