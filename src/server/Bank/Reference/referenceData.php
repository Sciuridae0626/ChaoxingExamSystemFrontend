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
    $nameValue = $data["nameValue"];
    $name = "";
    $url = "";
    $content = "";
    $name = $nameValue;
    $url = "https://wenku.so.com";
    exec("python 360.py ".$nameValue);
    exec("python educate.py ".$nameValue, $array);
    $content = implode('\n', $array);
    $result = [
        "name" => $name,
        "url" => $url,
        "content" => $content
    ];
    echo json_encode($result);
?>