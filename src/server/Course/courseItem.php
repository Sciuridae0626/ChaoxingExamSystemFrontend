<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // "name"：课程名称；picURL：课程图片地址；code：课程代码；"class"：班级；time：时间；year：学年；semester：学期；belong：课程归属；data：课程数据
        [
            "name" => "计算机网络",
            "picURL" => "http://api.sciuridae.xyz/image/Course/computerNetwork.png",
            "code" => "224105001",
            "class" => "计算机（师范）201",
            "time" => "星期一4-5节",
            "year" => "2021-2022",
            "semester" => "第二学期",
            "belong" => "专业选修课",
            "data" => [
                [
                    "key" => "1",
                    "number" => 1,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "秦梦瑶",
                    "studentNumber" => "2020001",
                    "telephone" => "19815201520",
                    "grade" => 89
                ],
                [
                    "key" => "2",
                    "number" => 2,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "王淡真",
                    "studentNumber" => "2020002",
                    "telephone" => "19815201521",
                    "grade" => 90
                ],
                [
                    "key" => "3",
                    "number" => 3,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "师妃喧",
                    "studentNumber" => "2020003",
                    "telephone" => "19815201522",
                    "grade" => 77
                ],
                [
                    "key" => "4",
                    "number" => 4,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "允寒夜",
                    "studentNumber" => "2020004",
                    "telephone" => "19815201523",
                    "grade" => 69
                ],
                [
                    "key" => "5",
                    "number" => 5,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "樱雪婷",
                    "studentNumber" => "2020005",
                    "telephone" => "19815201524",
                    "grade" => 58
                ],
                [
                    "key" => "6",
                    "number" => 6,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "月韩依",
                    "studentNumber" => "2020006",
                    "telephone" => "19815201525",
                    "grade" => 55
                ],
                [
                    "key" => "7",
                    "number" => 7,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "雯欣雨",
                    "studentNumber" => "2020007",
                    "telephone" => "19815201526",
                    "grade" => 87
                ],
                [
                    "key" => "8",
                    "number" => 8,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "可一琳",
                    "studentNumber" => "2020008",
                    "telephone" => "19815201527",
                    "grade" => 92
                ],
                [
                    "key" => "9",
                    "number" => 9,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "韩语惠",
                    "studentNumber" => "2020009",
                    "telephone" => "19815201528",
                    "grade" => 63
                ],
                [
                    "key" => "10",
                    "number" => 10,
                    "college" => "信息学院",
                    "class" => "计算机201",
                    "name" => "叶允栗",
                    "studentNumber" => "2020010",
                    "telephone" => "19815201529",
                    "grade" => 81
                ]
            ]
        ],
        [
            "name" => "网络安全",
            "picURL" => "http://api.sciuridae.xyz/image/Course//networkSecurity.png",
            "code" => "224105001",
            "class" => "计算机203、软工201",
            "time" => "星期三6-7节",
            "year" => "2021-2022",
            "semester" => "第二学期",
            "belong" => "专业选修课",
            "data" => []
        ],
        [
            "name" => "信息管理",
            "picURL" => "http://api.sciuridae.xyz/image/Course/icecream.png",
            "code" => "224105001",
            "class" => "计算机（师范）201",
            "time" => "星期一4-5节",
            "year" => "2021-2022",
            "semester" => "第二学期",
            "belong" => "专业选修课",
            "data" => []
        ],
        [
            "name" => "操作系统",
            "picURL" => "http://api.sciuridae.xyz/image/Course/icecream.png",
            "code" => "224105001",
            "class" => "计算机（师范）201",
            "time" => "星期一4-5节",
            "year" => "2021-2022",
            "semester" => "第二学期",
            "belong" => "专业选修课",
            "data" => []
        ]
    ];
    echo json_encode($result);
?>