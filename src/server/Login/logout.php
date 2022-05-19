<?php 
    session_start();
    $code = 1;
    $message = "";
    $verify = false;
    unset($_SESSION["username"]);
    if(!isset($_SESSION["username"])){
        $code = 0;
        $verify = true;
    }
    $data=[
        "code" => $code,
        "message" => $message,
        "result" => [
            "verify" => $verify,
        ]
    ];
    echo json_encode($data);
?>