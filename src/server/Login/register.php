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
    $username = $data["username"];
    $password = $data["password"];
    $name = $data["name"];
    $idCradNumber = $data["idCradNumber"];
    $email = $data["email"];
    $mobile = $data["mobile"];
    $office = $data["office"];
    $dorm = $data["dorm"];
    $passwordSha256 = hash("sha256", $password);
    $query = "INSERT INTO account (username, passwd, account, docu_no, email, telephone, office_address, campus_address) VALUES ('".$username."', '".$passwordSha256."', '".$name."', '".$idCradNumber."', '".$email."', '".$mobile."', '".$office."', '".$dorm."');";
    mysqli_query(connectDatabase(), $query);
    $verify = true;
    $result = [
        "verify" => $verify,
    ];
    echo json_encode($result);
?>