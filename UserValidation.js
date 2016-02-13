/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function detailsValidation(){
    var sign_in_status,
        login_status;
    
    // this method validates user input for signing up
    this.signUpValidation = function (user_details){
       // boolean representation of details status
       var details_okay = true;
       for(var i = 0; i < user_details.length; i++){
           if(user_details[i] === ""){
               details_okay = false;
               sign_in_status = false;
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
                sign_in_status = true;
            }
            // else, inform the user that username and password are all ready taken
            else{
                console.log("user all ready exists");
                sign_in_status = false;
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
                login_status = false;
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
        console.log(login_details[0]);
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
            console.log(details.textContent);
            var details_value = parseInt(details.textContent);
            console.log(details_value);
            if(details_value === 1){
                console.log("logging in user with name: " + login_details[0]);
                login_status = true;
            }
            else{
                console.log("not a recognised user");
                login_status = false;
            }
            
        };
        xmlhttp.send(table_entry);
    };
    
    // this is the method that calls the php to update the database after a game has been won
    this.statsUpdateValidation = function(user_details){
        console.log(user_details[0] + "    " + user_details[1]);
        // this if else, validate which player won and calls the correct php
        if(user_details[0] === user_details[1]){
            // call the method to handle the php call for a win
            this.addWin(user_details[0]);
        }
        else{
            // call the method to handle the php call for a loss
            console.log("signed in player has lost")
            this.addLoss(user_details[0]);
        }
    };
    
    // this is where the addWinToDB.php page is called.
    this.addWin = function(player){
        var xmlhttp;
        var username = "username=" + player;
        if(window.XMLHttpRequest){
            // chrome, firefox, safari
            xmlhttp = new XMLHttpRequest();
        }
        else{
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // remember to create the php page
        xmlhttp.open("POST", "addWinToDB.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function () {
            
        };
        xmlhttp.send(username);
    };
    
    // this is where the addLossToDB.php page is called
    this.addLoss = function(player){
        var xmlhttp;
        var username = "username=" + player;
        if(window.XMLHttpRequest){
            // chrome, firefox, safari
            xmlhttp = new XMLHttpRequest();
        }
        else{
            // code for IE6, IE5
            xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
        // remember to create the php page
        xmlhttp.open("POST", "addLossToDB.php", false);
        xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xmlhttp.onreadystatechange = function () {
            
        };
        xmlhttp.send(username);
    };
    
    this.getSignInStatus = function(){
        return sign_in_status;
    };
    
    this.getLoginStatus = function(){
        return login_status;
    };
    
}

