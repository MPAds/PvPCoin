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
    echo "Return Code: " . $_FILES["url"]["error"] . "<br>";
  } else {
    echo "Upload: " . $_FILES["url"]["name"] . "<br>";
    echo "Type: " . $_FILES["url"]["type"] . "<br>";
    echo "Size: " . ($_FILES["url"]["size"] / 1024) . " kB<br>";
    echo "Temp file: " . $_FILES["url"]["tmp_name"] . "<br>";
    if (file_exists("upload/" . $_FILES["url"]["name"])) {
      echo $_FILES["url"]["name"] . " already exists. ";
    } else {
	//$full_path = $_FILES["url"]["name"];
	$full_path = $_FILES["url"]["name"];
      move_uploaded_file($_FILES["url"]["tmp_name"],
      "../upload/" . $_FILES["url"]["name"]);
   
      echo "Stored in: " . "../upload/" . $_FILES["url"]["name"];
      echo "This is the full path: " . $full_path;

    }
  }

} else {
  echo "Invalid file, or file too big!";
}

try {
if ($_SESSION['userid'])
    $pdo->beginTransaction();

        {	

?>
		<center>
		<td><h1><b>Testing Upload</b></h1><br><br>
        <b>File size must be under 18 kB otherwise<br>the page will look as if nothing happened</b><br>
        <b>when you submit!</b><br></td>
        <br><br><br>
<?php		
        echo '<form method="POST" action="" enctype="multipart/form-data">';
		echo "<table border=1 bordercolor=black cellpadding=5 cellspacing=0><tr>";
		echo "<td><input type=\"file\" maxlength=\"100\" name=\"url\" id=\"url\" /></td>";
		echo "<td>After you select the file to upload, type the file name exactly as it appears here >>>  <input type=\"text\" maxlength=\"100\" name=\"url\" /></td>";
		echo "<td><input type=\"submit\" value=\"Submit Banner 1\" name=\"submit\" /></td>";
		
		echo '</form>';
		$stmt = $pdo->prepare("UPDATE banners SET gfx=:url");
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