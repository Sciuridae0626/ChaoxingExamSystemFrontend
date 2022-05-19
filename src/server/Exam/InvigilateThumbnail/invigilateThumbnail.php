<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'pic'：照片地址；'name'：真实姓名；'number'：学号；'snap'：抓拍；'cutting'：切屏；'authentication'：认证；'tag'：1考试中，2已交卷，3缺考，4人脸识别失败
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/QingMengyao.png',
          'name' => '秦梦瑶',
          'number' => '2020001',
          'snap' => 3,
          'cutting' => 1,
          'authentication' => 3,
          'tag' => 4
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/WangDanzhen.png',
          'name' => '王淡真',
          'number' => '2020002',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 2,
          'tag' => 2
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/ShiFeixuan.png',
          'name' => '师妃喧',
          'number' => '2020003',
          'snap' => 2,
          'cutting' => 0,
          'authentication' => 4,
          'tag' => 1
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/YunHanye.png',
          'name' => '允寒夜',
          'number' => '2020004',
          'snap' => 0,
          'cutting' => 0,
          'authentication' => 0,
          'tag' => 3
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/YingXueting.png',
          'name' => '樱雪婷',
          'number' => '2020005',
          'snap' => 3,
          'cutting' => 5,
          'authentication' => 2,
          'tag' => 2
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/YueHanyi.png',
          'name' => '月韩依',
          'number' => '2020006',
          'snap' => 1,
          'cutting' => 0,
          'authentication' => 3,
          'tag' => 4
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/WenXinyu.png',
          'name' => '雯欣雨',
          'number' => '2020007',
          'snap' => 3,
          'cutting' => 0,
          'authentication' => 6,
          'tag' => 1
        ],
        [
          'pic' => 'http://api.sciuridae.xyz/image/Exam/KeYilin.png',
          'name' => '可一琳',
          'number' => '2020008',
          'snap' => 5,
          'cutting' => 0,
          'authentication' => 5,
          'tag' => 1
        ]
      ];
    echo json_encode($result);
?>