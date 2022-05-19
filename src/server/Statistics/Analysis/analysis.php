<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // highest：最高分；lowest：最低分；average：平均分；passRate：及格率；total：考生总数；excellentRate：优秀率；difficulty：难度系数；discrimination：成绩区分度
        'highest' => 100,
        'lowest' => 15,
        'average' => 73.5,
        'passRate' => 0.7619,
        'total' => 105,
        'excellentRate' => 0.333,
        'difficulty' => 0.52,
        'discrimination' => 0.44
    ];
    echo json_encode($result);
?>