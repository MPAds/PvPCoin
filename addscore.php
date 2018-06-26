<?php
$username = $_POST['user'];
$email = $_POST['score'];
$experience = $_POST['exp'];

//the data
$data = "$username | $score | $experience\n";

//open the file and choose the mode
$fh = fopen("hiscore.txt", "a");
fwrite($fh, $data);

//close the file
fclose($fh);

//redirect
header("Location: http://www.icardcounting.com/");



?>
