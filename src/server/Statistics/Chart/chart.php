<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'grade'：分数；'frequency'：频数；'curve'：正态分布
        [
            'grade' => 15,
            'frequency' => 3,
            'curve' => 0.05
        ],
        [
            'grade' => 25,
            'frequency' => 2,
            'curve' => 0.04
        ],
        [
            'grade' => 35,
            'frequency' => 3,
            'curve' => 0.05
        ],
        [
            'grade' => 42,
            'frequency' => 7,
            'curve' => 0.07
        ],
        [
            'grade' => 45,
            'frequency' => 5,
            'curve' => 0.07
        ],
        [
            'grade' => 49,
            'frequency' => 5,
            'curve' => 0.08
        ],
        [
            'grade' => 52,
            'frequency' => 7,
            'curve' => 0.09
        ],
        [
            'grade' => 62,
            'frequency' => 10,
            'curve' => 0.14
        ],
        [
            'grade' => 66,
            'frequency' => 12,
            'curve' => 0.15
        ],
        [
            'grade' => 71,
            'frequency' => 10,
            'curve' => 0.17
        ],
        [
            'grade' => 73,
            'frequency' => 18,
            'curve' => 0.19
        ],
        [
            'grade' => 79,
            'frequency' => 25,
            'curve' => 0.3
        ],
        [
            'grade' => 84,
            'frequency' => 38,
            'curve' => 0.48
        ],
        [
            'grade' => 88,
            'frequency' => 28,
            'curve' => 0.3
        ],
        [
            'grade' => 91,
            'frequency' => 19,
            'curve' => 0.22
        ],
        [
            'grade' => 95,
            'frequency' => 12,
            'curve' => 0.13
        ],
        [
            'grade' => 100,
            'frequency' => 5,
            'curve' => 0.07
        ]
    ];
    echo json_encode($result);
?>