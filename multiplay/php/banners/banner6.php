<?php
include '../include/db.php';
session_start();

$allowedExts = array("gif", "jpeg", "jpg", "png");
$temp = explode(".", $_FILES["url"]["name"]);
$extension = end($temp);

if ((($_FILES["url"]["type"] == "image/gif") || ($_FILES["url"]["type"] == "image/jpeg") || ($_FILES["url"]["type"] == "image/jpg")
|| ($_FILES["url"]["type"] == "image/pjpeg") || ($_FILES["url"]["type"] == "image/x-png") || ($_FILES["url"]["type"] == "image/png"))
&& ($_FILES["url"]["size"] < 18000) && in_array($extension, $allowedExts)) {
  if ($_FILES["url"]["error"] > 0) {
   // echo "Return Code: " . $_FILES["url"]["error"] . "<br>";
  } else {
   // echo "Upload: " . $_FILES["url"]["name"] . "<br>";
   // echo "Type: " . $_FILES["url"]["type"] . "<br>";
   // echo "Size: " . ($_FILES["url"]["size"] / 1024) . " kB<br>";
   // echo "Temp file: " . $_FILES["url"]["tmp_name"] . "<br>";
    if (file_exists("upload/" . $_FILES["url"]["name"])) {
   //   echo $_FILES["url"]["name"] . " already exists. ";
    } else {
	$full_path = $_FILES["url"]["name"];
      move_uploaded_file($_FILES["url"]["tmp_name"],
      "../upload/" . $_FILES["url"]["name"]);
   
    //  echo "Stored in: " . "../upload/" . $_FILES["url"]["name"];
    //  echo "This is the full path: " . $full_path;

    }
  }

} else {
  // echo "Invalid file, or file too big!";
}

try {
if ($_SESSION['userid'])
    $pdo->beginTransaction();

        {	
       
        echo "<table align=center  border=0 cellpadding=0 cellspacing=0 width=\"100%\" height=\"100%\" style=\"background-image: url('../images/bannerback.png'); background-repeat: no-repeat; background-position: top;\"><tr>";
		echo '<form method="POST" action="" enctype="multipart/form-data">';
		echo "<tr><td align=center><font color=\"white\"><h1>Banner 6 Upload</h1><br><br><b>File size must be under 18 kB otherwise<br>the file will not upload<br>when you submit!</b></td></tr>";
        echo "<tr><td align=center><font color=\"white\"><input type=\"file\" maxlength=\"100\" name=\"url\" id=\"url\" /></font></td></tr>";
		echo "<tr><td align=center><font color=\"white\"> Type the file name from above, into the space below<br><input type=\"text\" maxlength=\"100\" name=\"url\" /></font></tr></td>";
		echo "<tr><td align=center><font color=\"white\"><input type=\"submit\" value=\"Submit Banner 6\" name=\"submit\" /></font></td></tr>";
		echo '</form>';
		echo "</table>";
		
		$stmt = $pdo->prepare("UPDATE banners SET gfxsix=:url");
        $stmt->bindValue(':url', $_POST['url'], PDO::PARAM_STR);
	    $stmt->execute();
        }	
        if($_POST)
        header('Location:index.php');//To redirect
		exit;	
}
catch(PDOException $e)
{
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
}
?>
</center>