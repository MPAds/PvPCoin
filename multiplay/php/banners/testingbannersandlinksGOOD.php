<?php
include '../include/db.php';

session_start();
try {
if ($_SESSION['userid'])
    $pdo->beginTransaction();
    $sql = "SELECT * FROM banners";
	
    foreach ($pdo->query($sql) as $row)
        {
    echo '<form method="POST" action="" enctype="multipart/form-data">';		

?>
		<center>
		<td><h1><b>Your Banner Campaign</b></h1>
        <p><b>YOUR CURRENT GAME CREDITS: 2000</b><br><h6>20 Credit = 1 Impression (100 Impressions = 3.25 rounds/100 hands of play)</h6></p>
        <br>
        <p><b>"You have 623 banner impressions in your account."</b></p><br></td>
		</center>
<?php		

		echo "<table border=1 bordercolor=black cellpadding=5 cellspacing=0><tr>";
		echo "<td>Account ID: " .$row['userid'] . ".....  " . $row['fname'] . " " . $row['lname'] . "<br /></td><td></td><td>Website URL The Banner Is Marketing</td><td></td></tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnk'] . "\">       <img src=\"" . $row['gfx'] . "\"></a></td>      <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnk\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
		echo "</tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnktwo'] . "\">    <img src=\"" . $row['gfxtwo'] . "\"></a></td>   <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnktwo\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
        echo "</tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnkthree'] . "\">  <img src=\"" . $row['gfxthree'] . "\"></a></td> <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnkthree\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
        echo "</tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnkfour'] . "\">   <img src=\"" . $row['gfxfour'] . "\"></a></td>  <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnkfour\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
        echo "</tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnkfive'] . "\">   <img src=\"" . $row['gfxfive'] . "\"></a></td>  <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnkfive\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
        echo "</tr><tr>";
		echo "<td>                           <a href=\"" .$row['lnksix'] . "\">    <img src=\"" . $row['gfxsix'] . "\"></a></td>   <td></td><td>>Change Link: <input type=\"text\" maxlength=\"125\" name=\"lnksix\" placeholder=\"http://iCardCounting.com\"/></td><td></td>";
		echo "</tr></table>";
    echo '<input type="submit" value="Update Links" name="submit" /></form>';
        }	

$stmt = $pdo->prepare("UPDATE banners SET lnk=:lnk, lnktwo=:lnktwo, lnkthree=:lnkthree, lnkfour=:lnkfour, lnkfive=:lnkfive, lnksix=:lnksix");
$stmt->bindValue(':lnk', $_POST['lnk'], PDO::PARAM_STR);
$stmt->bindValue(':lnktwo', $_POST['lnktwo'], PDO::PARAM_STR);
$stmt->bindValue(':lnkthree', $_POST['lnkthree'], PDO::PARAM_STR);
$stmt->bindValue(':lnkfour', $_POST['lnkfour'], PDO::PARAM_STR);
$stmt->bindValue(':lnkfive', $_POST['lnkfive'], PDO::PARAM_STR);
$stmt->bindValue(':lnksix', $_POST['lnksix'], PDO::PARAM_STR);
	$stmt->execute();

	$pdo = null;  /*** close the database connection ***/
}
catch(PDOException $e)
{
	$stmt->rollback();
	$pdo = null;  /*** close the database connection ***/
	echo $e->getMessage();
}
?>

<center>

<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
<tr height=30><td align=left>
<center><p><b>Quick Assign</b></p>
<form style="margin:0px" action="mybanners.php?quickassign=yes" method="post">
<p>Evenly distribute <input type=text name=quickcrds value=0 size=3> impressions to my active banners.<br><br><input type=submit value="Assign"></p>
</form>
</td></tr>
</table>
<br><br><table border=0 cellpadding=0 cellspacing=0>
<tr><td valign=top>

<table border=1 bordercolor=black cellpadding=5 cellspacing=0><tr height=30><td align=center>Banner</td><td align=center>Stats</td><td align=center>Views<br>Assigned</td></tr><form style="margin:0px" action="mybanners.php?editbanner=yes&bannerid=3358" method="post">
	<tr bgcolor=#EEEEEE height=157>
	<td align=center valign=center><a target=_blank href="http://"><img border=0 width=225 height=29 src="http://surfingguard.com/hcsgshield125.png"></a><br>
	Image: <input type=text size=25 name=editimg value="http://surfingguard.com/hcsgshield125.png"><br>Target: <input type=text size=25 name=edittarget value="http://"><br><input type=submit value="Save"><br /><br /><center><font size=1><b>Active<br><a href=mybanners.php?stateop=2&bannerid=3358>Pause Ad</a></b></font></center></td>
	
	<td align=left><font size=2>0 Views<br>0 Clicks<br><br>0% CTR<br><br><center><a href=mybanners.php?resethits=yes&bannerid=3358>Reset</a></center></font></td>
	<td align=center><font size=2>0</font></td>
	</tr>
	</form><form style="margin:0px" action="mybanners.php?addbanner=yes" method="post">
	<tr bgcolor=#EEEEEE>
	<td align=left colspan=4 height=157>Image: <input type=text size=25 name=newimg value="http://"><br>Target: <input type=text size=25 name=newtarget value="http://"><input type=submit value="Add"></td>
	</tr>
	</form></table>
</td>

<td valign=top>
<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
<tr height=30><td align=center>Assign<br>Credits</td></tr>
<form style="margin:0px" action="mybanners.php?assigncredits=yes" method="post"><tr bgcolor=#EEEEEE height=157><td align=center><input type=text size=3 name=assignamount3358 value=0></td></tr><tr bgcolor=#EEEEEE height=157><td align=center><input type=submit value=Assign></td></tr></form>
</table>
</td><td valign=top>
<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
<tr height=30><td align=center>Assign<br>Imps</td></tr>
<form style="margin:0px" action="mybanners.php?assignimps=yes" method="post"><tr bgcolor=#EEEEEE height=157><td align=center><input type=text size=3 name=assignimps3358 value=0></td></tr><tr bgcolor=#EEEEEE height=157><td align=center><input type=submit value=Assign></td></tr></form>
</table>
</td><td valign=top>
<table border=1 bordercolor=black cellpadding=5 cellspacing=0>
<tr height=30><td align=center>Delete<br>Banner</td></tr><form style="margin:0px" action="mybanners.php?deletebanner=yes&bannerid=3358" method="post">
	<tr bgcolor=#EEEEEE height=157><td align=center><input type=submit value="Delete"></td></tr>
	</form></form>
</table>
</td></table><br><br></td></tr>
</table>