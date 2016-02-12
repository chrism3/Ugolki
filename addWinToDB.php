<?php

$user = $_POST['username'];

//echo($user);

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

$query = "select * from Player_Stats where (username = '$user')";
$result = mysqli_query($conn, $query) or die(mysql_error());

// need to figure out how to get the correct info, and then update it. i.e.
//          - no_of_games++
//          - no_of_wins ++
//          - no_of_losses
$results_array = array();

while($row = mysql_fetch_assoc($result)){
    $results_array[] = $row;
    echo($row);
}
    

?>

