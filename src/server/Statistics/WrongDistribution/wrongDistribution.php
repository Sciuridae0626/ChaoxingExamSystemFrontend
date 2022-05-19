<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'point'：考点；'rate'：错误率
        [
            'point' => '数据链路层',
            'rate' => 0.05
        ],
        [
            'point' => '网络协议',
            'rate' => 0.20
        ],
        [
            'point' => '分组交换技术',
            'rate' => 0.15
        ],
        [
            'point' => '网络体系结构',
            'rate' => 0.25
        ],
        [
            'point' => '拓扑结构',
            'rate' => 0.35
        ]
    ];
    echo json_encode($result);
?>