<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'number'：序号；'receiver'：接收对象；'title'：任务标题
        [
          'key' => '1',
          'number' => 1,
          'receiver' => '刘一',
          'title' => '请参与《数据库原理》课程监考'
        ],
        [
          'key' => '2',
          'number' => 2,
          'receiver' => '陈二',
          'title' => '请参与《中国近代史》课程期末考核组卷'
        ],
        [
          'key' => '3',
          'number' => 3,
          'receiver' => '张三',
          'title' => '请为《计算机网络》题库扩充100题'
        ],
        [
          'key' => '4',
          'number' => 4,
          'receiver' => '李四',
          'title' => '请参与《计算机网络》课程监考'
        ],
        [
          'key' => '5',
          'number' => 5,
          'receiver' => '王五',
          'title' => '请参与《信息管理》课程期末考核组卷'
        ]
      ];
    echo json_encode($result);
?>