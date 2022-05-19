<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'testNumber'：考号；'studentNumber'：学号；'loginIP'：登录IP；'loginTime'：登录时间；'submitTime'：提交时间；'cutting'：切屏次数；'rate'：答题率；'grade'：成绩；'edit'：操作（0开始阅卷，1继续阅卷，2误判修正）
        [
          'key' => '1',
          'number' => 1,
          'testNumber' => '2022110101',
          'studentNumber' => '2020001',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '2',
          'number' => 2,
          'testNumber' => '2022110102',
          'studentNumber' => '2020002',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '3',
          'number' => 3,
          'testNumber' => '2022110103',
          'studentNumber' => '2020003',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 1
        ],
        [
          'key' => '4',
          'number' => 4,
          'testNumber' => '2022110104',
          'studentNumber' => '2020004',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '5',
          'number' => 5,
          'testNumber' => '2022110105',
          'studentNumber' => '2020005',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => 87,
          'edit' => 2
        ],
        [
          'key' => '6',
          'number' => 6,
          'testNumber' => '2022110106',
          'studentNumber' => '2020006',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '7',
          'number' => 7,
          'testNumber' => '2022110107',
          'studentNumber' => '2020007',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '8',
          'number' => 8,
          'testNumber' => '2022110108',
          'studentNumber' => '2020008',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 1
        ],
        [
          'key' => '9',
          'number' => 9,
          'testNumber' => '2022110109',
          'studentNumber' => '2020009',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '10',
          'number' => 10,
          'testNumber' => '2022110110',
          'studentNumber' => '2020010',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => 65,
          'edit' => 2
        ],
        [
          'key' => '11',
          'number' => 11,
          'testNumber' => '2022110111',
          'studentNumber' => '2020011',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '12',
          'number' => 12,
          'testNumber' => '2022110112',
          'studentNumber' => '2020012',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ],
        [
          'key' => '13',
          'number' => 13,
          'testNumber' => '2022110113',
          'studentNumber' => '2020013',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 1
        ],
        [
          'key' => '14',
          'number' => 14,
          'testNumber' => '2022110114',
          'studentNumber' => '2020014',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'cutting' => 1,
          'rate' => 0.962,
          'grade' => null,
          'edit' => 0
        ]
      ];
    echo json_encode($result);
?>