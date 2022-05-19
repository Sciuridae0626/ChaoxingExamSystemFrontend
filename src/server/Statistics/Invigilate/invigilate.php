<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'name'：姓名；'studentNumber'：学号；'loginIP'：登录IP；'loginTime'：登录时间；'submitTime'：提交时间；'snap'：抓拍次数；'cutting'：切屏次数；'authentication'：认证次数；'face'：人脸
        [
          'key' => '1',
          'number' => '1',
          'name' => '秦梦瑶',
          'studentNumber' => '2020001',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 1,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '2',
          'number' => '2',
          'name' => '王淡真',
          'studentNumber' => '2020002',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '3',
          'number' => '3',
          'name' => '师妃喧',
          'studentNumber' => '2020003',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '15:31',
          'snap' => 2,
          'cutting' => 0,
          'authentication' => 4,
          'face' => '不通过'
        ],
        [
          'key' => '4',
          'number' => '4',
          'name' => '允寒夜',
          'studentNumber' => '2020004',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '5',
          'number' => '5',
          'name' => '樱雪婷',
          'studentNumber' => '2020005',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 5,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '6',
          'number' => '6',
          'name' => '月韩依',
          'studentNumber' => '2020006',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '15:31',
          'snap' => 1,
          'cutting' => 0,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '7',
          'number' => '7',
          'name' => '雯欣雨',
          'studentNumber' => '2020007',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 5,
          'face' => '不通过'
        ],
        [
          'key' => '8',
          'number' => '8',
          'name' => '可一琳',
          'studentNumber' => '2020008',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '15:31',
          'snap' => 5,
          'cutting' => 0,
          'authentication' => 2,
          'face' => '通过'
        ],
        [
          'key' => '9',
          'number' => '9',
          'name' => '韩语惠',
          'studentNumber' => '2020009',
          'loginIP' => '',
          'loginTime' => '',
          'submitTime' => '',
          'snap' => 1,
          'cutting' => 0,
          'authentication' => 0,
          'face' => '缺考'
        ],
        [
          'key' => '10',
          'number' => '10',
          'name' => '叶允栗',
          'studentNumber' => '2020010',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 2,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '11',
          'number' => '11',
          'name' => '安雨痕',
          'studentNumber' => '2020011',
          'loginIP' => '',
          'loginTime' => '',
          'submitTime' => '',
          'snap' => 1,
          'cutting' => 0,
          'authentication' => 0,
          'face' => '缺考'
        ],
        [
          'key' => '12',
          'number' => '12',
          'name' => '颜圣翼',
          'studentNumber' => '2020115',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '13',
          'number' => '13',
          'name' => '南黎川',
          'studentNumber' => '2020116',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '15:31',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 3,
          'face' => '通过'
        ],
        [
          'key' => '14',
          'number' => '14',
          'name' => '车辰希',
          'studentNumber' => '2020117',
          'loginIP' => '',
          'loginTime' => '',
          'submitTime' => '',
          'snap' => 1,
          'cutting' => 0,
          'authentication' => 0,
          'face' => '缺考'
        ]
      ];
    echo json_encode($result);
?>