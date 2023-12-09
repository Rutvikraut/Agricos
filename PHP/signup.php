<?php
    if(isset($_POST['submit'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $cpassword = $_POST['cpassword'];
    $passqword_hash=password_hash($password,PASSWORD_DEFAULT);
    $errors = array();
    if(empty($email) OR empty($password) OR empty($cpassword)){
        array_push($errors,"All fields are required");
    }
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        array_push($errors,"Email is not valid");
    }
    if(strlen($password)<8){
        array_push($errors,"Password must be at least 8 character string");
    }
    if($password!==$cpassword){
        array_push($errors,"Password does not match");
    }
    require_once "database.php";
    $mysql="SELECT * FROM register_data WHERE email='$email'";
    $result= mysqli_query($con,$mysql);
    $rowcout = mysqli_num_rows($result);
    if($rowcout>0){
        array_push($errors,"Email already exists !");
    }
    if(count($errors)>0){
        foreach($errors as $error){
            echo"<div class='alert alert=danger'>$error</div>";
        }
    }
    else{
        $mysql = "INSERT INTO register_data (email, password) VALUES(?,?)";
        // $result = mysqli_query($con,$mysql);
        // mysqli_close($con);
        $stmt = mysqli_stmt_init($con);
        $preparestmt=mysqli_stmt_prepare($stmt,$mysql);
        if($preparestmt){
            mysqli_stmt_bind_param($stmt,"ss",$email,$passqword_hash);
            mysqli_stmt_execute($stmt);
            echo "You are registered successfully";
        }
        else{
            die("something went wrong");
        }
    }
    }
