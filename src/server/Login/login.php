<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    require "../util/connectDatabase.php";
    $data = json_decode(file_get_contents('php://input'), true);
    $usernameValue = $data["usernameValue"];
    $passwordValue = $data["passwordValue"];
    $verify = false;
    $passwordSha256 = hash("sha256", $passwordValue);
    $query = "SELECT passwd FROM account WHERE username = '".$usernameValue."';";
    $passwordMysqli = mysqli_fetch_array(mysqli_query(connectDatabase(), $query))[passwd];
    if($passwordMysqli == $passwordSha256){
        $verify = true;
    }
    $result = [
        "usernameValue" => $usernameValue,
        "verify" => $verify,
        "mysqli_fetch_array" => mysqli_fetch_array(mysqli_query(connectDatabase(), $query))
    ];
    echo json_encode($result);
?>