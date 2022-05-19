<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'receiver'：接收对象；'title'：公告标题
        [
          'key' => '1',
          'number' => 1,
          'receiver' => '全选',
          'title' => '关于做好近期本科在线教学管理的通知'
        ],
        [
          'key' => '2',
          'number' => 2,
          'receiver' => '全选',
          'title' => '具有新建试卷、统计模块权限'
        ],
        [
          'key' => '3',
          'number' => 3,
          'receiver' => '全选',
          'title' => '课程免考申请通知'
        ],
        [
          'key' => '4',
          'number' => 4,
          'receiver' => '李四',
          'title' => '请修改课程名，以符合教学标准'
        ],
        [
          'key' => '5',
          'number' => 5,
          'receiver' => '王五',
          'title' => '请修改课程名，以符合教学标准'
        ]
      ];
    echo json_encode($result);
?>