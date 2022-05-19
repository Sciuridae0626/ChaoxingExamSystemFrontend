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
          'value' => "计算机网络体系结构",
          'label' => "计算机网络体系结构",
          'children' => [
            [
              'value' => "计算机网络概述",
              'label' => "计算机网络概述",
              'children' => [
                [
                  'value' => "计算机网络的概念、组成与功能",
                  'label' => "计算机网络的概念、组成与功能"
                ],
                [
                  'value' => "计算机网络的分类",
                  'label' => "计算机网络的分类"
                ],
                [
                  'value' => "计算机网络主要性能指标",
                  'label' => "计算机网络主要性能指标"
                ]
              ]
            ],
            [
              'value' => "计算机网络体系结构与参考模型",
              'label' => "计算机网络体系结构与参考模型",
              'children' => [
                [
                  'value' => "计算机网络分层结构",
                  'label' => "计算机网络分层结构"
                ],
                [
                  'value' => "计算机网络协议、接口、服务等概念",
                  'label' => "计算机网络协议、接口、服务等概念"
                ],
                [
                  'value' => "ISO/OSI参考模型和TCP/IP模型",
                  'label' => "ISO/OSI参考模型和TCP/IP模型"
                ]
              ]
            ]
          ]
        ],
        [
          'value' => "物理层",
          'label' => "物理层",
          'children' => [
            [
              'value' => "通信基础",
              'label' => "通信基础",
              'children' => [
                [
                  'value' => "信道、信号、带宽、信源与信宿等基本概念",
                  'label' => "信道、信号、带宽、信源与信宿等基本概念"
                ],
                [
                  'value' => "奈奎斯特定理与香农定理",
                  'label' => "奈奎斯特定理与香农定理"
                ],
                [
                  'value' => "编码与调制",
                  'label' => "编码与调制"
                ],
                [
                  'value' => "电路交换、报文交换与分组交换",
                  'label' => "电路交换、报文交换与分组交换"
                ],
                [
                  'value' => "数据报与虚电路",
                  'label' => "数据报与虚电路"
                ]
              ]
            ],
            [
              'value' => "传输介质",
              'label' => "传输介质",
              'children' => [
                [
                  'value' => "双绞线、同轴电缆、光纤与无线传输介质",
                  'label' => "双绞线、同轴电缆、光纤与无线传输介质"
                ],
                [
                  'value' => "物理层接口的特性",
                  'label' => "物理层接口的特性"
                ]
              ]
            ],
            [
              'value' => "物理层设备",
              'label' => "物理层设备",
              'children' => [
                [
                  'value' => "中继器",
                  'label' => "中继器"
                ]
              ]
            ]
          ]
        ],
        [
          'value' => "数据链路层",
          'label' => "数据链路层",
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
          'value' => "网络层",
          'label' => "网络层",
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
          'value' => "传输层",
          'label' => "传输层",
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
          'value' => "应用层",
          'label' => "应用层",
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