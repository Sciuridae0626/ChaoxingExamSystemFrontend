<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-'Type'");
        exit;
    }
    $result = [
        // 'key'：唯一标识；'stem'：题干；'type'：题型；'outline'：考纲；'difficulty'：难易程度；'time'：更新时间；'index'：排序号
        [
            'key' => '1',
            'stem' => '以下IP地址中，属于C类地址是',
            'type' => '单选题',
            'outline' => 1,
            'difficulty' => '中等',
            'time' => '2021年12月21日18 =>03 =>02',
            'index' => 0,
        ],
        [
            'key' => '2',
            'stem' => '在OSI模型中，第N层和其上的N+1层的关系是',
            'type' => '多选题',
            'outline' => 2,
            'difficulty' => '中等',
            'time' => '2021年12月31日15 =>59 =>57',
            'index' => 1,
        ],
        [
            'key' => '3',
            'stem' => '数据只能沿一个固定方向传输的的通信方式是',
            'type' => '单选题',
            'outline' => 3,
            'difficulty' => '容易',
            'time' => '2022年01月01日11 =>18 =>25',
            'index' => 2,
        ],
        [
            'key' => '4',
            'stem' => 'CSMA/CD协议在站点发送数据时',
            'type' => '单选题',
            'outline' => 4,
            'difficulty' => '中等',
            'time' => '2021年12月13日03 =>27 =>36',
            'index' => 3,
        ],
        [
            'key' => '5',
            'stem' => '把网络分为电路交换网、报文交换网、分组交换网属于按什么进行分类',
            'type' => '判断题',
            'outline' => 5,
            'difficulty' => '简单',
            'time' => '2021年12月13日03 =>27 =>36',
            'index' => 4,
        ],
        [
            'key' => '6',
            'stem' => 'IP协议是无连接的，其信息传输方式是',
            'type' => '简答题',
            'outline' => 6,
            'difficulty' => '困难',
            'time' => '2021年12月13日03 =>27 =>36',
            'index' => 5,
        ]
    ];
    echo json_encode($result);
?>