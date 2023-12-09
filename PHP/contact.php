<?php
    if(isset($_POST['submit'])){
    $fname = $_POST['fname'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    }
    $con = mysqli_connect('localhost', 'root', '', 'contact_form');
    if (!$con)
    {
        die("Connection failed!" . mysqli_connect_error());
    }
    $mysql = "INSERT INTO contact_data (fname, email, message) Values('$fname','$email','$message')";
    $result = mysqli_query($con,$mysql);
    if($result)
    {
        echo "Entries added!";
    }
    mysqli_close($con);
?>