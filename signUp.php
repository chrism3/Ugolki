<?php

$user = $_POST['username'];
$pass = $_POST['password'];
$initial_stat = 0;

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

//echo($pass);

$query = "select * from Players where (username = '$user') and (password = '$pass')";
$result = mysqli_query($conn, $query) or die(mysql_error());
$player_count = mysqli_num_rows($result);

$query3 = "select * from Player_Stats where (username = '$user')";
$result3 = mysqli_query($conn, $query3);
$stats_count = mysqli_num_rows($result3);

if($player_count === 0 && $stats_count === 0){
    // this is where we make the query to add the user to the database
    $query2 = "insert into Players (username, password) values ('$user','$pass')";
    $result2 = mysqli_query($conn, $query2);
    
    // also make a new entry in the player_stats table for the new user
    $query4 = "insert into Player_Stats (username, played, won, lost) values ('$user', '$initial_stat', '$initial_stat', '$initial_stat')";
    $result4 = mysqli_query($conn, $query4);
    
    // echo 0, to signify that no users with this username and password already exist
    echo(0);
}
else{
    /* if not echo value other than 'success', can be used to inform user that the username
    and password have already been used. */ 
    echo($player_count);
}

?>

