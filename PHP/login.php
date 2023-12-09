<?php
    if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    require_once "database.php";
    $sql = "SELECT * FROM register_data WHERE email = '$email'";
    $result = mysqli_query($con,$sql);
    $user = mysqli_fetch_array($result,MYSQLI_ASSOC);
    if($user){
        if(password_verify($password,$user('password'))){
            header("location: ../HTML/index.html");
            die();
        }else{
            echo "Password doest not exist";
        }
    }else{
        echo "Email doest not exist";
    }
    }
