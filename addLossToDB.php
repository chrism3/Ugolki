<?php
$user = $_POST['username'];

//echo($user);

$conn = mysqli_connect("devweb2014.cis.strath.ac.uk", "wjb12175", "ellsamie");
mysqli_select_db($conn, "wjb12175") or die(mysql_error());

$query = "select * from Player_Stats where (username = '$user')";
$result = mysqli_query($conn, $query) or die(mysql_error());
if($result){
    //echo("no error occured");
    $row = mysqli_fetch_assoc($result);
    //echo($row['played']. "     ".$row['won']);    
    $games_played = $row['played'];
    $games_lost = $row['lost'];
    
}
else{
    echo("error occured");
}

if(isset($games_played, $games_lost)){
    //echo("seems to be working");
    $games_played++;
    $games_lost++;
    $query2 = "update Player_Stats set played = '$games_played', lost = '$games_lost' where username = '$user'";
    $result2 = mysqli_query($conn, $query2);
}
?>

