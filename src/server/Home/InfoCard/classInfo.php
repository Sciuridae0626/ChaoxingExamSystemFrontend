<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // name：课程名；number：均分增减幅度；icon：均分变化图标（增-up、减-down、不变-unchanged）
        ["name" => "计算机网络", "number" => 1.25, "icon" => "up"],
        ["name" => "计算机网络实践", "number" => 0, "icon" => "unchanged"],
        ["name" => "网络安全", "number" => 0.37, "icon" => "down"],
        ["name" => "网络安全实践", "number" => 0, "icon" => "unchanged"]
    ];
    echo json_encode($result);
?>