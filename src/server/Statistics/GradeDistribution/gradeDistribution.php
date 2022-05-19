<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'grade'：分数；'student'：学生人数
        [
            'grade' => '0-19分',
            'student' => 2
        ],
        [
            'grade' => '20-39分',
            'student' => 3
        ],
        [
            'grade' => '40-59分',
            'student' => 20
        ],
        [
            'grade' => '60-79分',
            'student' => 30
        ],
        [
            'grade' => '80-99分',
            'student' => 45
        ],
        [
            'grade' => '100分',
            'student' => 5
        ]
    ];
    echo json_encode($result);
?>