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
    $query = "DELETE FROM account WHERE username = '".$username."';";
    $mysqli = mysqli_query(connectDatabase(), $query);
    $verify = true;
    $result = [
        "verify" => $verify,
    ];
    echo json_encode($result);
?>