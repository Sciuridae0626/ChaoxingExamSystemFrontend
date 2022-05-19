<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'nickname'：用户名；'college'：学院；'class'：班级；'name'：真实姓名；'studentNumber'：学号；'telephone'：手机号码
        [
          'key' => '1',
          'number' => 1,
          'nickname' => 'Qing Mengyao',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '秦梦瑶',
          'studentNumber' => '2020001',
          'telephone' => '19815201520'
        ],
        [
          'key' => '2',
          'number' => 2,
          'nickname' => 'Wang Danzhen',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '王淡真',
          'studentNumber' => '2020002',
          'telephone' => '19815201521'
        ],
        [
          'key' => '3',
          'number' => 3,
          'nickname' => 'Shi Feixuan',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '师妃喧',
          'studentNumber' => '2020003',
          'telephone' => '19815201522'
        ],
        [
          'key' => '4',
          'number' => 4,
          'nickname' => 'Yun Hanye',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '允寒夜',
          'studentNumber' => '2020004',
          'telephone' => '19815201523'
        ],
        [
          'key' => '5',
          'number' => 5,
          'nickname' => 'Ying Xueting',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '樱雪婷',
          'studentNumber' => '2020005',
          'telephone' => '19815201524'
        ],
        [
          'key' => '6',
          'number' => 6,
          'nickname' => 'Yue Hanyi',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '月韩依',
          'studentNumber' => '2020006',
          'telephone' => '19815201525'
        ],
        [
          'key' => '7',
          'number' => 7,
          'nickname' => 'Wen Xinyu',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '雯欣雨',
          'studentNumber' => '2020007',
          'telephone' => '19815201526'
        ],
        [
          'key' => '8',
          'number' => 8,
          'nickname' => 'Ke Yilin',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '可一琳',
          'studentNumber' => '2020008',
          'telephone' => '19815201527'
        ],
        [
          'key' => '9',
          'number' => 9,
          'nickname' => 'Han Yuhui',
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '韩语惠',
          'studentNumber' => '2020009',
          'telephone' => '19815201528'
        ],
        [
          'key' => '10',
          'nickname' => 'Ye Yunli',
          'number' => 10,
          'college' => '信息学院',
          'class' => '计算机201',
          'name' => '叶允栗',
          'studentNumber' => '2020010',
          'telephone' => '19815201529'
        ],
        [
          'key' => '11',
          'nickname' => 'An Yuhen',
          'number' => 11,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '安雨痕',
          'studentNumber' => '2020011',
          'telephone' => '19815201530'
        ],
        [
          'key' => '12',
          'nickname' => 'Yan Shengyi',
          'number' => 12,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '颜圣翼',
          'studentNumber' => '2020012',
          'telephone' => '19815201531'
        ],
        [
          'key' => '13',
          'nickname' => 'Nan Lichuan',
          'number' => 13,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '南黎川',
          'studentNumber' => '2020013',
          'telephone' => '19815201532'
        ],
        [
          'key' => '14',
          'nickname' => 'Che chenxi',
          'number' => 14,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '车辰希',
          'studentNumber' => '2020014',
          'telephone' => '19815201533'
        ],
        [
          'key' => '15',
          'nickname' => 'Ming Yiyao',
          'number' => 15,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '明伊耀',
          'studentNumber' => '2020015',
          'telephone' => '19815201534'
        ],
        [
          'key' => '16',
          'nickname' => 'Feng Lihen',
          'number' => 16,
          'college' => '信息学院',
          'class' => '计算机203',
          'name' => '风离痕',
          'studentNumber' => '2020016',
          'telephone' => '19815201535'
        ]
      ];
    echo json_encode($result);
?>