<?php
session_start();
include 'banner_select.php';
include '../include/db.php';

if(isset($_SESSION['username']) && !empty($_POST['submit'])){
    echo "You are currently logged in as: " . $_SESSION['username'];
    echo "<hr />";
 
 
?>
	
<html>
<head> 
<TITLE>Link Management</TITLE>
<link rel="stylesheet" type="text/css" href="member.css">			
</head>
    <body>

	<script type="text/javascript" src="banner.js"></script>
	    </body>
</html>

<?php
$stmt = $pdo->prepare("INSERT INTO players.banners (banner_link) VALUES (:banner_link)");
$stmt->bindValue(':banner_link', $_POST['banner_link'], PDO::PARAM_STR);

$stmt->execute();


    echo '<form method="POST" action="" enctype="multipart/form-data">';
    echo '<table><tr><td>
Link To Website 1 URL: <input type="text" maxlength="125" name="banner_link" placeholder="http://iCardCounting.com"/><br>
Link To Website 2 URL: <input type="text" maxlength="125" name="lnktwo" placeholder="http://iCardCounting.com"/><br>
Link To Website 3 URL: <input type="text" maxlength="125" name="lnkthree" placeholder="http://iCardCounting.com"/><br>
Link To Website 4 URL: <input type="text" maxlength="125" name="lnkfour" placeholder="http://iCardCounting.com"/><br>
Link To Website 5 URL: <input type="text" maxlength="125" name="lnkfive" placeholder="http://iCardCounting.com"/><br>
Link To Website 6 URL: <input type="text" maxlength="125" name="lnksix" placeholder="http://iCardCounting.com"/><br>
</td></tr></table><br>';
    echo '<input type="submit" value="Insert" name="submit" /></form>';
    echo 'Below is your current campaign.<br>
Link 1: <?php echo "<a href=\"".$_POST["banner_link"]."\">banner_image_url </a>";?> <?php $banner_link = htmlspecialchars("<a href=\"".$_POST["banner_link"]."\">Click </a>");
echo $banner_link; ?><br>

Link 2: <?php echo "<a href=\"".$_POST["lnktwo"]."\">gfxtwo </a>";?> <?php $lnktwo = htmlspecialchars("<a href=\"".$_POST["lnktwo"]."\">Click </a>");
echo $lnktwo; ?><br>

Link 3: <?php echo "<a href=\"".$_POST["lnkthree"]."\">gfxthree </a>";?> <?php $lnkthree = htmlspecialchars("<a href=\"".$_POST["lnkthree"]."\">Click </a>");
echo $lnkthree; ?><br>

Link 4: <?php echo "<a href=\"".$_POST["lnkfour"]."\">gfxfour </a>";?> <?php $lnkfour = htmlspecialchars("<a href=\"".$_POST["lnkfour"]."\">Click </a>");
echo $lnkthree; ?><br>

Link 5: <?php echo "<a href=\"".$_POST["lnkfive"]."\">gfxfive </a>";?> <?php $lnkfive = htmlspecialchars("<a href=\"".$_POST["lnkfive"]."\">Click </a>");
echo $lnkthree; ?><br>

Link 6: <?php echo "<a href=\"".$_POST["lnksix"]."\">gfxsix </a>";?> <?php $lnksix = htmlspecialchars("<a href=\"".$_POST["lnksix"]."\">Click </a>");
echo $lnkthree; ?><br>
<br><br><br><br><br><br><br><br><br><br>
<a href="logout.php"><h2>Logout</h2></a>';
	

echo $_POST["banner_link"];
echo $_POST["lnktwo"];
echo $_POST["lnkthree"];
echo $_POST["lnkfour"];
echo $_POST["lnkfive"];
echo $_POST["lnksix"];


}
else {echo "You must become a member in order to ... ";
    include("register.php");
	if (!empty($_POST['submit']))
	
$pdo = null;  /*** close the database connection ***/
}
?>
     
