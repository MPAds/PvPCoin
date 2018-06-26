<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title>Login Page Test Script.</title>
</head>
<body>
<form method="post" action="login.php" >
enter name:
<input type="text" name="name" />
<br/>
<br/>
enter email:
<input type="text" name="email" />
<br/>
<br/>
<input type="submit" value="login" name="submit"/>
</form>
</body>
</html>
<?PHP
if (isset($_POST['submit']))
{
$name = $_POST['name'];
$email = $_POST['email'];
$file = file_get_contents("users.txt"); // This will eventually be pointing to the database and not a text file.
if(!strstr($file, "$name||$email"))
{
echo "Sorry! You Insert an Invalid Name & Email. Please Use a Valid name & email and Try Again.";
}
else
{
echo "Welcome $name.<br/>You have successfully logged in.";
}
}
//redirect
header("Location: http://www.icardcounting.com/munltiplay/");
?>