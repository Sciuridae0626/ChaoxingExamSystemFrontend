<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'name'：真实姓名；'character'：角色
        [
          'key' => '1',
          'number' => 1,
          'name' => '刘一',
          'character' => ['任课教师']
        ],
        [
          'key' => '2',
          'number' => 2,
          'name' => '陈二',
          'character' => ['组卷员']
        ],
        [
          'key' => '3',
          'number' => 3,
          'name' => '张三',
          'character' => ['任课教师', '组卷员', '阅卷员', '管理员']
        ],
        [
          'key' => '4',
          'number' => 4,
          'name' => '李四',
          'character' => ['任课教师']
        ],
        [
          'key' => '5',
          'number' => 5,
          'name' => '王五',
          'character' => ['任课教师']
        ],
        [
          'key' => '6',
          'number' => 6,
          'name' => '赵六',
          'character' => ['阅卷员', '管理员']
        ],
        [
          'key' => '7',
          'number' => 7,
          'name' => '孙七',
          'character' => ['任课教师', '组卷员']
        ],
        [
          'key' => '8',
          'number' => 8,
          'name' => '周八',
          'character' => ['组卷员']
        ],
        [
          'key' => '9',
          'number' => 9,
          'name' => '吴九',
          'character' => ['任课教师', '阅卷员']
        ],
        [
          'key' => '10',
          'number' => 10,
          'name' => '郑十',
          'character' => ['任课教师']
        ],
        [
          'key' => '11',
          'number' => 11,
          'name' => '乔流逸',
          'character' => ['管理员']
        ],
        [
          'key' => '12',
          'number' => 12,
          'name' => '胡初瑶',
          'character' => ['任课教师', '阅卷员']
        ],
        [
          'key' => '13',
          'number' => 13,
          'name' => '邱逸致',
          'character' => ['任课教师', '阅卷员']
        ],
        [
          'key' => '14',
          'number' => 14,
          'name' => '贡悦书',
          'character' => ['任课教师']
        ],
        [
          'key' => '15',
          'number' => 15,
          'name' => '段嘉美',
          'character' => ['任课教师', '阅卷员']
        ],
        [
          'key' => '16',
          'number' => 16,
          'name' => '蔚叶农',
          'character' => ['任课教师']
        ]
      ];
    echo json_encode($result);
?>