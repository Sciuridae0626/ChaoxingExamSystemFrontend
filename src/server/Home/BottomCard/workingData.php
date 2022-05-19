<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        "courses" => 4, //任课门数
        "exams" => 3, //出卷次数
        "banks" => 3500, //题库录入
        "invigilations" => 1 //监考次数
    ];
    echo json_encode($result);
?>