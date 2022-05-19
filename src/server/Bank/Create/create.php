<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-'Type'");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'name'：名称；'course'：课程；'type'：题型；'quantity'：题量；'status'：共享状态
        [
          'key' => '1',
          'number' => 1,
          'name' => '第一单元练习题',
          'course' => '计算机网络',
          'type' => '混合',
          'quantity' => 35,
          'status' => '私有'
        ],
        [
          'key' => '2',
          'number' => 2,
          'name' => '第二单元练习题',
          'course' => '计算机网络',
          'type' => '填空题',
          'quantity' => 25,
          'status' => '可查看'
        ],
        [
          'key' => '3',
          'number' => 3,
          'name' => '计网名词解析汇总',
          'course' => '计算机网络',
          'type' => '名词解析',
          'quantity' => 30,
          'status' => '可组卷'
        ],
        [
          'key' => '4',
          'number' => 4,
          'name' => '实验材料分析题',
          'course' => '网络安全',
          'type' => '混合',
          'quantity' => 45,
          'status' => '可组卷'
        ],
        [
          'key' => '5',
          'number' => 5,
          'name' => '第一章复习题',
          'course' => '网络安全',
          'type' => '单选题',
          'quantity' => 15,
          'status' => '私有'
        ],
        [
          'key' => '6',
          'number' => 6,
          'name' => '第二章复习题',
          'course' => '网络安全',
          'type' => '多选题',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '7',
          'number' => 7,
          'name' => '2021-2022-1复习',
          'course' => '信息管理',
          'type' => '混合',
          'quantity' => 50,
          'status' => '可查看'
        ],
        [
          'key' => '8',
          'number' => 8,
          'name' => '信管名词解析汇总',
          'course' => '信息管理',
          'type' => '名词解析',
          'quantity' => 25,
          'status' => '可查看'
        ],
        [
          'key' => '9',
          'number' => 9,
          'name' => '第六单元练习题',
          'course' => '操作系统',
          'type' => '计算题',
          'quantity' => 25,
          'status' => '私有'
        ],
        [
          'key' => '10',
          'number' => 10,
          'name' => '第七单元练习题',
          'course' => '操作系统',
          'type' => '论述题',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '11',
          'number' => 11,
          'name' => '测试题1',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '12',
          'number' => 12,
          'name' => '测试题2',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '13',
          'number' => 13,
          'name' => '测试题3',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '14',
          'number' => 14,
          'name' => '测试题4',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '15',
          'number' => 15,
          'name' => '测试题5',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '16',
          'number' => 16,
          'name' => '测试题6',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '17',
          'number' => 17,
          'name' => '测试题7',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '18',
          'number' => 18,
          'name' => '测试题8',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ],
        [
          'key' => '19',
          'number' => 19,
          'name' => '测试题9',
          'course' => '操作系统',
          'type' => '综合',
          'quantity' => 50,
          'status' => '可组卷'
        ]
      ];
    echo json_encode($result);
?>