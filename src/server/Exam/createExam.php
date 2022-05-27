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
    $subject = $data["subject"];
    $date = $data["date"];
    $time = $data["time"];
    $place = $data["place"];
    $status = $data["status"];
    $type = $data["type"];
    $paper = $data["paper"];
    $score = $data["score"];
    $student = $data["student"];
    $teacher = $data["teacher"];
    $setting = $data["setting"];
    $query = "INSERT INTO exam (subject, date, time, place, status, type, paper, score, student, teacher, setting) VALUES ('".$subject."', '".$date."', '".$time."', '".$place."', '".$status."', '".$type."', '".$paper."', '".$score."', '".$student."', '".$teacher."', '".$setting."');";
    $queryMysqli = mysqli_query(connectDatabase(), $query);
    $verify = true;
    $result = [
        "verify" => $verify,
    ];
    echo json_encode($result);
?>