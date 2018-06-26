
<?php
include '../include/db.php';
// session_start();
$data = null;
try {
// if ($_SESSION['userid'])
  if ( isset($_POST['x']) ){
    $data = $_POST['x']; 
}

//  var_dump($_POST['x']); // nothing is being displayed
var_dump($_POST);
  
//  $json = $_POST['data']; // "1975" = console.log
//   $credits = json_decode($json);  // The TRUE returns an array instead of an object.
    $pdo->beginTransaction();{

$stmt = $pdo->prepare("UPDATE usersystem SET money=:data");
$stmt->bindValue(':data', $data, PDO::PARAM_STR);
$stmt->execute();  // passes 0 to database field


}
}
catch(PDOException $e)
{
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();	
}
?>