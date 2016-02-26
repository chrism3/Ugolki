<?php

/*
 * This php page is responsible for getting the stats for the player who is
 * currently signed in. 
 */

$user = $_POST['username'];
//echo($user);

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

$query = "select * from Player_Stats where (username = '$user')";
$result = mysqli_query($conn, $query);

if($result->num_rows > 0){
    //echo("maybe working?");
    while($row = $result->fetch_assoc()){
        echo($row['played']."$123".$row['won']."$123".$row['lost']);
    }
}
else{
    echo("not working");
}

//echo($games_played);

?>