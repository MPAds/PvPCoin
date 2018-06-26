<?php
$username = $_POST['user'];
$email = $_POST['score'];
$experience = $_POST['exp'];

//the data
$data = "$username | $score | $experience\n";

//open the file and choose the mode
$fh = fopen("hiscore.txt", "a"); // This has to eventually be saved in the database. Do away with the text file.
fwrite($fh, $data);

//close the file
fclose($fh);

//redirect
header("Location: http://www.icardcounting.com/multiplay/");



?>
