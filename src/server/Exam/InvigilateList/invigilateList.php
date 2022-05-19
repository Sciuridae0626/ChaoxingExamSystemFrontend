<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'name'：姓名；'number'：学号；'place'：考试地点；'loginIP'：登录IP；'loginTime'：登录时间；'submitTime'：提交时间；'cutting'：切屏次数；'rate'：答题率；'status'：共享状态
        [
          'key' => '1',
          'name' => '秦梦瑶',
          'number' => '2020001',
          'place' => '教学楼A-111',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '',
          'cutting' => 1,
          'rate' => 0.012,
          'status' => '允许'
        ],
        [
          'key' => '2',
          'name' => '王淡真',
          'number' => '2020002',
          'place' => '教学楼B-105',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '',
          'cutting' => 0,
          'rate' => 0.008,
          'status' => '允许'
        ],
        [
          'key' => '3',
          'name' => '师妃喧',
          'number' => '2020003',
          'place' => '教学楼C-213',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '',
          'cutting' => 0,
          'rate' => 0.006,
          'status' => '允许'
        ],
        [
          'key' => '4',
          'name' => '允寒夜',
          'number' => '2020004',
          'place' => '教学楼A-111',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0,
          'status' => '允许'
        ],
        [
          'key' => '5',
          'name' => '樱雪婷',
          'number' => '2020005',
          'place' => '教学楼B-105',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '--:--',
          'cutting' => 5,
          'rate' => 0.008,
          'status' => '强制交卷'
        ],
        [
          'key' => '6',
          'name' => '月韩依',
          'number' => '2020006',
          'place' => '教学楼C-213',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.006,
          'status' => '允许'
        ],
        [
          'key' => '7',
          'name' => '雯欣雨',
          'number' => '2020007',
          'place' => '教学楼A-111',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.012,
          'status' => '允许'
        ],
        [
          'key' => '8',
          'name' => '可一琳',
          'number' => '2020008',
          'place' => '教学楼B-105',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.008,
          'status' => '允许'
        ],
        [
          'key' => '9',
          'name' => '韩语惠',
          'number' => '2020009',
          'place' => '教学楼C- 213',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.006,
          'status' => '允许'
        ],
        [
          'key' => '10',
          'name' => '叶允栗',
          'number' => '2020010',
          'place' => '教学楼A-111',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '--:--',
          'cutting' => 2,
          'rate' => 0.012,
          'status' => '强制交卷'
        ],
        [
          'key' => '11',
          'name' => '安雨痕',
          'number' => '2020011',
          'place' => '教学楼B-105',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.008,
          'status' => '允许'
        ],
        [
          'key' => '12',
          'name' => '颜圣翼',
          'number' => '2020115',
          'place' => '教学楼C-213',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:02',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.006,
          'status' => '允许'
        ],
        [
          'key' => '13',
          'name' => '南黎川',
          'number' => '2020116',
          'place' => '教学楼A-111',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:00',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.012, 
          'status' => '允许'
        ],
        [
          'key' => '14',
          'name' => '车辰希',
          'number' => '2020117',
          'place' => '教学楼B-105',
          'loginIP' => '192.168.1.1',
          'loginTime' => '14:01',
          'submitTime' => '--:--',
          'cutting' => 0,
          'rate' => 0.0080,
          'status' => '允许'        
        ]
      ];
    echo json_encode($result);
?>