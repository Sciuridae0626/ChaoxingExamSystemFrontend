<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, 'Content'-Type");
        exit;
    }
    $result = [ // 'key'：唯一标识；'number'：序号；'send'：发送方；'content'：操作内容；'status'：状态
        'data' => [
        [
          'key' => '1',
          'number' => 1,
          'send' => '刘一',
          'content' => '创建《Web服务器端程序设计》课程',
          'status' => '待审批'
        ],
        [
          'key' => '2',
          'number' => 2,
          'send' => '陈二',
          'content' => '提交《思想道德修养与法律基础》课程期末考核组卷',
          'status' => '待审批'
        ],
        [
          'key' => '3',
          'number' => 3,
          'send' => '李四',
          'content' => '将《计算机网络》课程的《计网名词解析汇总》题库共享状态设为可组卷',
          'status' => '待审批'
        ],
        [
          'key' => '4',
          'number' => 4,
          'send' => '王五',
          'content' => '创建《UI设计与交互设计》课程',
          'status' => '待审批'
        ],
        [
          'key' => '5',
          'number' => 5,
          'send' => '赵六',
          'content' => '创建《人机交互与虚拟现实》课程',
          'status' => '待审批'
        ],
        [
          'key' => '6',
          'number' => 6,
          'send' => '孙七',
          'content' => '提交《数据库原理》课程期末考核组卷',
          'status' => '待审批'
        ],
        [
          'key' => '7',
          'number' => 7,
          'send' => '周八',
          'content' => '提交《高等数学C1》课程期末考核组卷',
          'status' => '待审批'
        ],
        [
          'key' => '8',
          'number' => 8,
          'send' => '吴九',
          'content' => '提交《概率论与数理统计》课程期末考核阅卷结果',
          'status' => '待审批'
        ]
      ],
      'buffer' => ['index' => -1, 'value' => '']
    ];
    echo json_encode($result);
?>