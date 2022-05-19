<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'index'：考纲序号；'rate'：错误率
        [
          'index' => '1',
          'rate' => 0.4
        ],
        [
          'index' => '2',
          'rate' => 0.29
        ],
        [
          'index' => '3',
          'rate' => 0.32
        ],
        [
          'index' => '4',
          'rate' => 0.2
        ],
        [
          'index' => '5',
          'rate' => 0.6
        ],
        [
          'index' => '6',
          'rate' => 0.55
        ],
        [
          'index' => '7',
          'rate' => 0.23
        ],
        [
          'index' => '8',
          'rate' => 0.17
        ],
        [
          'index' => '9',
          'rate' => 0.22
        ],
        [
          'index' => '10',
          'rate' => 0.38
        ],
        [
          'index' => '11',
          'rate' => 0.36
        ],
        [
          'index' => '12',
          'rate' => 0.56
        ],
        [
          'index' => '13',
          'rate' => 0.6
        ]
      ];
    echo json_encode($result);
?>