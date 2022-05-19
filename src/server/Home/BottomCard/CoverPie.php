<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 第二个对象的value值为覆盖率的小数形式
        [ type => '未覆盖', value => 0.15 ],
        [ type => '覆盖', value => 0.85 ]
    ];
    echo json_encode($result);
?>