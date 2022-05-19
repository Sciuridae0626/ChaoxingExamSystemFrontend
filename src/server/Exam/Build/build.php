<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'name'：题库名称；'type'：题型；'quantity'：题量；'time'：更新时间
        [
          'key' => '1',
          'name' => '我创建的',
          'type' => '名词解析、多选、论述、解答、计算题',
          'quantity' => 175,
          'time' => '2021年12月21日18:03:02'
        ],
        [
          'key' => '2',
          'name' => '全校共享',
          'type' => '单选、多选、判断、连线、名词解析、解答、计算、程序、口语题',
          'quantity' => 317,
          'time' => '2021年12月31日15:59:57'
        ],
        [
          'key' => '3',
          'name' => '参考题库',
          'type' => '单选、多选、判断、名词解析、解答题',
          'quantity' => 1520,
          'time' => '2022年01月01日11:18:25'
        ],
        [
          'key' => '4',
          'name' => '我的收藏',
          'type' => '单选、多选、判断、名词解析、解答题',
          'quantity' => 52,
          'time' => '2021年12月13日03:27:36'
        ]
      ];
    echo json_encode($result);
?>