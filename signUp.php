<?php

$user = $_POST['username'];
$pass = $_POST['password'];

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

//echo($pass);

$query = "select * from Players where (username = '$user') AND (password = '$pass')";
$result = mysqli_query($conn, $query) or die(mysql_error());
$player_count = mysqli_num_rows($result);

if($player_count === 0){
    // this is where we make the query to add the user to the database
    echo('success');
}
else{
    /* if not echo value other than 'success', can be used to inform user that the username
    and password have already been used. */ 
    echo($player_count);
}

?>

