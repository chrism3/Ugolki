<?php

$user = $_POST['username'];
$pass = $_POST['password'];

//echo($user);

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

$query = "select * from Players where (username = '$user') and (password = '$pass')";
$result = mysqli_query($conn, $query) or die(mysql_error());
$player_count = mysqli_num_rows($result);

echo($player_count);

?>

