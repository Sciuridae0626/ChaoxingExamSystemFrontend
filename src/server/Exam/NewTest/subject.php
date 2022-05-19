<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");
    header("Access-Control-Allow-Credentials: true");
    if($_SERVER["REQUEST_METHOD"] == "OPTIONS") {
        header("Access-Control-Allow-Headers: X-Requested-With, Content-Type");
        exit;
    }
    $result = [
        // 'value'：数据值；'label'：页面显示的标签；'children'：级联的下一层数据（其内对象属性同父层级）
        [
          'value' => "计算机网络",
          'label' => "计算机网络",
          'children' => [
            [
              'value' => "第一章",
              'label' => "第一章"
            ],
            [
              'value' => "第二章",
              'label' => "第二章"
            ],
            [
              'value' => "第三章",
              'label' => "第三章"
            ]
          ]
        ],
        [
          'value' => "网络安全",
          'label' => "网络安全",
          'children' => [
            [
              'value' => "第一章",
              'label' => "第一章"
            ],
            [
              'value' => "第二章",
              'label' => "第二章"
            ],
            [
              'value' => "第三章",
              'label' => "第三章"
            ]
          ]
        ],
        [
          'value' => "信息管理",
          'label' => "信息管理",
          'children' => [
            [
              'value' => "第一章",
              'label' => "第一章"
            ],
            [
              'value' => "第二章",
              'label' => "第二章"
            ],
            [
              'value' => "第三章",
              'label' => "第三章"
            ]
          ]
        ],
        [
          'value' => "操作系统",
          'label' => "操作系统",
          'children' => [
            [
              'value' => "第一章",
              'label' => "第一章"
            ],
            [
              'value' => "第二章",
              'label' => "第二章"
            ],
            [
              'value' => "第三章",
              'label' => "第三章"
            ]
          ]
        ]
      ];
    echo json_encode($result);
?>