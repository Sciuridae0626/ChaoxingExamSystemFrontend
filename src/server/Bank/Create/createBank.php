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
    $nickname = $data["nickname"];
    $belongSubject = $data["belongSubject"];
    $sharingWay = $data["sharingWay"];
    $query = "INSERT INTO que_library (que_name, que_course, que_count, share_status, que_id, landline_binding) VALUES ('".$nickname."', '".$belongSubject."', 0, '".$sharingWay."', '".$username."', '未绑定');";
    $queryMysqli = mysqli_query(connectDatabase(), $query);
    $verify = true;
    $result = [
        "verify" => $verify,
    ];
    echo json_encode($result);
?>