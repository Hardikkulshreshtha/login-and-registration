<?php 

include 'connect.php';

function validatePassword($password) {
    if (strlen($password) < 8) return false;
    if (!preg_match('/[A-Z]/', $password)) return false;
    if (!preg_match('/[a-z]/', $password)) return false;
    if (!preg_match('/\d/', $password)) return false;
    if (!preg_match('/[!@#$%^&*(),.?":{}|<>]/', $password)) return false;
    return true;
}

if(isset($_POST['signUp'])){
    $firstName = $_POST['fName'];
    $lastName = $_POST['lName'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    if (!validatePassword($password)) {
        echo "Password does not meet the criteria!";
    } else {
        $password = md5($password);

        $checkEmail = "SELECT * FROM users WHERE email='$email'";
        $result = $conn->query($checkEmail);
        if($result->num_rows > 0){
            echo "Email Address Already Exists!";
        } else {
            $insertQuery = "INSERT INTO users(firstName,lastName,email,password)
                            VALUES ('$firstName','$lastName','$email','$password')";
            if($conn->query($insertQuery) === TRUE){
                header("location: index.php");
            } else {
                echo "Error:".$conn->error;
            }
        }
    }
}

if(isset($_POST['signIn'])){
    $email = $_POST['email'];
    $password = $_POST['password'];
    $password = md5($password);

    $sql = "SELECT * FROM users WHERE email='$email' and password='$password'";
    $result = $conn->query($sql);
    if($result->num_rows > 0){
        session_start();
        $row = $result->fetch_assoc();
        $_SESSION['email'] = $row['email'];
        header("Location: homepage.php");
        exit();
    } else {
        echo "Not Found, Incorrect Email or Password";
    }
}
?>
