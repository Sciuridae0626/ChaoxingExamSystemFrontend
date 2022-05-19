<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'character'：角色，'detail'：详情
        [
          'key' => '1',
          'number' => 1,
          'character' => '任课教师',
          'detail' => '具有课程、题库、监考、统计模块权限'
        ],
        [
          'key' => '2',
          'number' => 2,
          'character' => '组卷员',
          'detail' => '具有新建试卷、统计模块权限'
        ],
        [
          'key' => '3',
          'number' => 3,
          'character' => '阅卷员',
          'detail' => '具有阅卷模块权限'
        ],
        [
          'key' => '4',
          'number' => 4,
          'character' => '管理员',
          'detail' => '具有考务安排、管理模块权限'
        ]
      ];
    echo json_encode($result);
?>