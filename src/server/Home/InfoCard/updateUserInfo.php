<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../../util/connectDatabase.php";
    $data = json_decode(file_get_contents('php://input'), true);
    $username = $data["username"];
    $nicknameValue = $data["nicknameValue"];
    $titleValue = $data["titleValue"];
    $emailValue = $data["emailValue"];
    $landlineValue = $data["landlineValue"];
    $mobileValue = $data["mobileValue"];
    $officeValue = $data["officeValue"];
    $dormValue = $data["dormValue"];
    $query = "UPDATE account SET username = '".$nicknameValue."', job_title = '".$titleValue."', email = '".$emailValue."', landline = '".$landlineValue."', telephone = '".$mobileValue."', office_address = '".$officeValue."', campus_address = '".$dormValue."' WHERE username = '".$username."';";
    $queryMysqli = mysqli_query(connectDatabase(), $query);
    return $dormValue;
?> 