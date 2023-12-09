<?php
$hostname="localhost";
$dbuser="root";
$dbpassword="";
$dbname="signup";
$con = mysqli_connect($hostname, $dbuser,$dbpassword, $dbname);
if (!$con)
{
    die("Connection failed!" . mysqli_connect_error());
}

?>