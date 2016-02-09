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
               // will also need to check the lengths of the input so they are not too long/short              
           }
       }
       
       if(user_details[1] !== user_details[2]){
           details_okay = false;
       }
       
       console.log(details_okay);
       
       // if details_okay call the php
       if(details_okay){
           this.signUp(user_details);
       }
    };
    
    // this is the function that calls the php for signing up
    this.signUp = function(user_details){        
        var table_entry = "username=" + user_details[0] + "&password=" + user_details[1];
        var xmlhttp;
        if(window.XMLHttpRequest){
            // chrome, firefox, safari
            xmlhttp = new XMLHttpRequest();
        }
        else{
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // remember to create the php page
        xmlhttp.open("POST", "signUp.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function () {
            // in here we can use the response text to check if the sign up worked
            var details = document.getElementById("hidden_su_details");
            details.innerHTML = xmlhttp.responseText;
            var details_value = parseInt(details.textContent);
            console.log(details_value);
            // if the details report success... call the code to log in
            if(details_value < 1){
                console.log("i should log in now");
                // will make a method in the model to handle the login of user
            }
            // else, inform the user that username and password are all ready taken
            else{
                console.log("user all ready exists");
            }
        };
        xmlhttp.send(table_entry);
    };
    
    
    /*
     * This is the method to check the login details. Currently only checks that the details are
     * set, will eventually check they are of the correct length...
     */
    this.loginValidation = function(login_details){
        // variable to hold boolean values to signify if the details are okay
        var details_okay = true;
        
        for(var i = 0; i < login_details.length; i++){
            if(login_details[i] === ""){
                details_okay = false;
                break;
            }
        }
        console.log(details_okay);
        
        if(details_okay){
            this.loginUser(login_details);
        }
    };
    
    /*
     * This is the function that calls the login php
     */
    this.loginUser = function(login_details){
        var table_entry = "username=" + login_details[0] + "&password=" + login_details[1];
        var xmlhttp;
        if(window.XMLHttpRequest){
            // chrome, firefox, safari
            xmlhttp = new XMLHttpRequest();
        }
        else{
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // remember to create the php page
        xmlhttp.open("POST", "login.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function () {
            var details = document.getElementById("hidden_li_details");
            details.innerHTML = xmlhttp.responseText;
            var details_value = parseInt(details.textContent);
            console.log(details_value);
        };
        xmlhttp.send(table_entry);
    };
    
}

