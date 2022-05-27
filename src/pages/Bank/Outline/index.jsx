import React, { Component } from 'react'
import { Button, message, Select, Upload } from 'antd'
import { nanoid } from 'nanoid'
import InfoTable from '../../../components/InfoTable'
import './index.css'

const { Option } = Select;
export default class Outline extends Component {

  state = {
    selectedCourse: '计算机网络',
    outlineData: [
      // key：唯一标识；number：序号；chapterIndex：第几章；chapter：章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
      {
        key: '1',
        number: 1,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络的概念、组成与功能',
        mastery: '了解'
      },
      {
        key: '2',
        number: 2,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络的分类',
        mastery: '理解'
      },
      {
        key: '3',
        number: 3,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 1,
        section: '计算机网络概述',
        site: '计算机网络主要性能指标',
        mastery: '掌握'
      },
      {
        key: '4',
        number: 4,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: '计算机网络分层结构',
        mastery: '运用'
      },
      {
        key: '5',
        number: 5,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: '计算机网络协议、接口、服务等概念',
        mastery: '了解'
      },
      {
        key: '6',
        number: 6,
        chapterIndex: 1,
        chapter: '计算机网络体系结构',
        sectionIndex: 2,
        section: '计算机网络体系结构与参考模型',
        site: 'ISO/OSI参考模型和TCP/IP模型',
        mastery: '理解'
      },
      {
        key: '7',
        number: 7,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '信道、信号、带宽、信源与信宿等基本概念',
        mastery: '掌握'
      },
      {
        key: '8',
        number: 8,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '奈奎斯特定理与香农定理',
        mastery: '运用'
      },
      {
        key: '9',
        number: 9,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '编码与调制',
        mastery: '了解'
      },
      {
        key: '10',
        number: 10,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '电路交换、报文交换与分组交换',
        mastery: '理解'
      },
      {
        key: '11',
        number: 11,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 1,
        section: '通信基础',
        site: '数据报与虚电路',
        mastery: '掌握'
      },
      {
        key: '12',
        number: 12,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 2,
        section: '传输介质',
        site: '双绞线、同轴电缆、光纤与无线传输介质',
        mastery: '运用'
      },
      {
        key: '13',
        number: 13,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 2,
        section: '传输介质',
        site: '物理层接口的特性',
        mastery: '了解'
      },
      {
        key: '14',
        number: 14,
        chapterIndex: 2,
        chapter: '物理层',
        sectionIndex: 3,
        section: '物理层设备',
        site: '中继器',
        mastery: '理解'
      }
    ] // 教师所查看的科目的考纲信息
  }

  /* 查看的课程中可选择的课程名（该教师所任教的课程） */
  selectOptions = ["计算机网络", "网络安全", "信息管理", "操作系统"]
  
  /* 动态合并单元格 */  
  changeData = (data, field, tag) => {
    let count = 0;//重复项的第一项
    let indexCount = 1;//下一项
    while (indexCount < data.length) {
      var item = data.slice(count,count+1)[0];//获取没有比较的第一个对象
      if(!item[tag]) item[tag] = 1
      if(item[field] === data[indexCount][field] && data[indexCount]['number'] % 11 !== 1) {//第一个对象与后面的对象相比，有相同项就累加，并且后面相同项设置为0
        item[tag]++
        data[indexCount][tag] = 0
        data[indexCount]['flag'] = true
      }else {
        count = indexCount
      }
      indexCount++;
    }
  }

  /* 下拉选择框的value变化时的回调 */
  handleChange = (value) => {
    this.setState({selectedCourse: value},() => {
      if(value === '计算机网络') {
        const computerData = [
          // key：唯一标识；number：序号；chapterIndex：第几章；chapter：章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
          {
            key: '1',
            number: 1,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 1,
            section: '计算机网络概述',
            site: '计算机网络的概念、组成与功能',
            mastery: '了解'
          },
          {
            key: '2',
            number: 2,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 1,
            section: '计算机网络概述',
            site: '计算机网络的分类',
            mastery: '理解'
          },
          {
            key: '3',
            number: 3,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 1,
            section: '计算机网络概述',
            site: '计算机网络主要性能指标',
            mastery: '掌握'
          },
          {
            key: '4',
            number: 4,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 2,
            section: '计算机网络体系结构与参考模型',
            site: '计算机网络分层结构',
            mastery: '运用'
          },
          {
            key: '5',
            number: 5,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 2,
            section: '计算机网络体系结构与参考模型',
            site: '计算机网络协议、接口、服务等概念',
            mastery: '了解'
          },
          {
            key: '6',
            number: 6,
            chapterIndex: 1,
            chapter: '计算机网络体系结构',
            sectionIndex: 2,
            section: '计算机网络体系结构与参考模型',
            site: 'ISO/OSI参考模型和TCP/IP模型',
            mastery: '理解'
          },
          {
            key: '7',
            number: 7,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 1,
            section: '通信基础',
            site: '信道、信号、带宽、信源与信宿等基本概念',
            mastery: '掌握'
          },
          {
            key: '8',
            number: 8,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 1,
            section: '通信基础',
            site: '奈奎斯特定理与香农定理',
            mastery: '运用'
          },
          {
            key: '9',
            number: 9,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 1,
            section: '通信基础',
            site: '编码与调制',
            mastery: '了解'
          },
          {
            key: '10',
            number: 10,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 1,
            section: '通信基础',
            site: '电路交换、报文交换与分组交换',
            mastery: '理解'
          },
          {
            key: '11',
            number: 11,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 1,
            section: '通信基础',
            site: '数据报与虚电路',
            mastery: '掌握'
          },
          {
            key: '12',
            number: 12,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 2,
            section: '传输介质',
            site: '双绞线、同轴电缆、光纤与无线传输介质',
            mastery: '运用'
          },
          {
            key: '13',
            number: 13,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 2,
            section: '传输介质',
            site: '物理层接口的特性',
            mastery: '了解'
          },
          {
            key: '14',
            number: 14,
            chapterIndex: 2,
            chapter: '物理层',
            sectionIndex: 3,
            section: '物理层设备',
            site: '中继器',
            mastery: '理解'
          }
        ] // 计算机网络的考纲信息
        this.setState({outlineData: computerData})
      }
      else this.setState({outlineData: []})
    })
  }

  /* 导入Excel的回调 */
  fileOnChange = () => {
    message.loading({
      content: '加载中...',
      key: 'updatable',
      style: {marginTop: '8.5vh'}
    })
    
    setTimeout(() => {
      if(this.state.selectedCourse === '信息管理') {
        const informationData = [
          // key：唯一标识；number：序号；chapterIndex：第几章；chapter：章节；sectionIndex：第几节；section：节次；site：考点；mastery：掌握程度
          {
            key: '1',
            number: 1,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 1,
            section: '数制及其转换',
            site: '常用数制及其相互转换',
            mastery: '了解'
          },
          {
            key: '2',
            number: 2,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 2,
            section: '数据表示',
            site: '数的表示：原码、补码、反码的机内表示方法',
            mastery: '理解'
          },
          {
            key: '3',
            number: 3,
            chapterIndex: 2,
            chapter: '信息系统基础知识',
            sectionIndex: 1,
            section: '数据表示',
            site: '非数值表示：字符和汉字、声音和图像的机内表示',
            mastery: '掌握'
          },
          {
            key: '4',
            number: 4,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 2,
            section: '数据表示',
            site: '校验方法和校验编码',
            mastery: '掌握'
          },
          {
            key: '5',
            number: 5,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 3,
            section: '算术运算和逻辑运算',
            site: '计算机中二进制数的运算方法',
            mastery: '运用'
          },
          {
            key: '6',
            number: 6,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 3,
            section: '算术运算和逻辑运算',
            site: '逻辑代数基本运算',
            mastery: '了解'
          },
          {
            key: '7',
            number: 7,
            chapterIndex: 1,
            chapter: '信息系统基础知识',
            sectionIndex: 4,
            section: '数据结构与算法基本概念',
            site: '数据结构与算法基本概念',
            mastery: '掌握'
          },
          {
            key: '8',
            number: 8,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 1,
            section: '计算机硬件知识',
            site: '计算机系统组成和主要设备的基本工作原理',
            mastery: '运用'
          },
          {
            key: '9',
            number: 9,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 1,
            section: '计算机硬件知识',
            site: '存储系统',
            mastery: '了解'
          },
          {
            key: '10',
            number: 10,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 2,
            section: '计算机软件知识',
            site: '操作系统知识',
            mastery: '理解'
          },
          {
            key: '11',
            number: 11,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 2,
            section: '计算机软件知识',
            site: '程序设计语言和语言处理程序基础知识',
            mastery: '掌握'
          },
          {
            key: '12',
            number: 12,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 3,
            section: '系统配置和方法',
            site: '系统配置技术',
            mastery: '运用'
          },
          {
            key: '13',
            number: 13,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 3,
            section: '系统配置和方法',
            site: '系统性能',
            mastery: '了解'
          },
          {
            key: '14',
            number: 14,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 3,
            section: '系统配置和方法',
            site: '系统可靠性',
            mastery: '理解'
          },
          {
            key: '15',
            number: 15,
            chapterIndex: 2,
            chapter: '计算机系统知识',
            sectionIndex: 3,
            section: '系统配置和方法',
            site: '计算机应用基础知识',
            mastery: '理解'
          },
          {
            key: '16',
            number: 16,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 1,
            section: '协议和传输',
            site: '网络体系结构（网络拓扑、0SI/RM、通信协议）',
            mastery: '理解'
          },
          {
            key: '17',
            number: 17,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 1,
            section: '协议和传输',
            site: 'TCP/IP协议基础',
            mastery: '理解'
          },
          {
            key: '18',
            number: 18,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 1,
            section: '协议和传输',
            site: '传输介质、传输技术、传输方法、传输控制',
            mastery: '掌握'
          },
          {
            key: '19',
            number: 19,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: 'LAN的组网、LAN间连接、LAN-WAN连接',
            mastery: '运用'
          },
          {
            key: '20',
            number: 20,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: '互联网基础知识及其应用',
            mastery: '理解'
          },
          {
            key: '21',
            number: 21,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: '网络性能分析（传输速度、线路利用率、线路容量）',
            mastery: '理解'
          },
          {
            key: '22',
            number: 22,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: '网络有关的法律、法规要点',
            mastery: '掌握'
          },
          {
            key: '23',
            number: 23,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: '网络安全（加密解密、授权、防火墙、安全协议）',
            mastery: '理解'
          },
          {
            key: '24',
            number: 24,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 2,
            section: '局域网和广域网',
            site: '远程传输服务',
            mastery: '掌握'
          },
          {
            key: '25',
            number: 25,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 3,
            section: '网络管理与网络软件基础知识',
            site: '网络管理',
            mastery: '掌握'
          },
          {
            key: '26',
            number: 26,
            chapterIndex: 3,
            chapter: '计算机网络知识',
            sectionIndex: 3,
            section: '网络管理与网络软件基础知识',
            site: '网络软件',
            mastery: '运用'
          },
          {
            key: '27',
            number: 27,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 1,
            section: '数据库系统基本概念',
            site: '数据库系统基本概念',
            mastery: '理解'
          },
          {
            key: '28',
            number: 28,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 2,
            section: '数据库系统体系结构',
            site: '集中式、Client/Server、分布式数据库系统',
            mastery: '理解'
          },
          {
            key: '29',
            number: 29,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 3,
            section: '关系数据库标准语言（SQL）',
            site: 'SQL的功能与特点',
            mastery: '掌握'
          },
          {
            key: '30',
            number: 30,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 3,
            section: '关系数据库标准语言（SQL）',
            site: '用SQL进行数据定义（表、视图、索引、约束）',
            mastery: '运用'
          },
          {
            key: '31',
            number: 31,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 3,
            section: '关系数据库标准语言（SQL）',
            site: '用SQL进行数据操作（数据增删改查、触发控制）',
            mastery: '运用'
          },
          {
            key: '32',
            number: 32,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 3,
            section: '关系数据库标准语言（SQL）',
            site: '安全控制和授权',
            mastery: '了解'
          },
          {
            key: '33',
            number: 33,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 3,
            section: '关系数据库标准语言（SQL）',
            site: '应用程序中的API、嵌入SQL',
            mastery: '了解'
          },
          {
            key: '34',
            number: 34,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 4,
            section: '数据库的管理与控制',
            site: '数据库管理系统的功能和特征',
            mastery: '理解'
          },
          {
            key: '35',
            number: 35,
            chapterIndex: 4,
            chapter: '数据库基础知识',
            sectionIndex: 4,
            section: '数据库的管理与控制',
            site: '数据库事务管理、备份与恢复技术、并发控制',
            mastery: '掌握'
          }
        ] // 信息管理的考纲信息
        this.setState({outlineData: informationData})
      }
      if(this.state.selectedCourse !== '信息管理') {
        message.error({
          content: '加载失败',
          key: 'updatable',
          duration: 2,
          style: {marginTop: '8.5vh'}
        })
      }
      else message.success({
        content: '加载成功',
        key: 'updatable',
        duration: 2,
        style: {marginTop: '8.5vh'}
      })
    }, 1500);
  }

  /* 导出考纲文件的回调 */
  exportPDF = () => {
    window.open("https://api.sciuridae.xyz/download/《信息管理》考纲.pdf")
  }
  
  render() {
    
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '5%',
        align: 'center',
        onCell: (text) => {
          if(text.sectionIndex % 2 === 1) return {
            style: {backgroundColor: 'white'}
          }
          else return {
            style: {backgroundColor: 'rgba(112, 112, 112, 0.1)'}
          }
        }
      },
      {
        title: '章节',
        dataIndex: 'chapter',
        key: 'chapter',
        width: '20%',
        align: 'center',
        onCell: (record) => {
          if(record.chapterIndex % 2 !== 1) return {
            rowSpan: record.chapterRowSpan,
            id: 'chapterMergedCell'
          }
          else return {
            rowSpan: record.chapterRowSpan,
            id: 'chapterWhiteCell'
          }
        }
      },
      {
        title: '节次',
        dataIndex: 'section',
        key: 'section',
        width: '20%',
        align: 'center',
        onCell: (record) => {
          if(record.sectionIndex % 2 !== 1) return {
            rowSpan: record.sectionRowSpan,
            id: 'sectionMergedCell'
          }
          else return {
            rowSpan: record.sectionRowSpan,
            id: 'sectionWhiteCell'
          }
        }
      },
      {
        title: '考点',
        dataIndex: 'site',
        key: 'site',
        width: '35%',
        align: 'center'
      },
      {
        title: '掌握程度',
        dataIndex: 'mastery',
        key: 'mastery',
        width: '10%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className='editButtonWrapper'> <p>修改</p> </div>
      }
    ]
    
    const showTotal = (total) => <div className='showTotalWrapper'>
    <Button shape='round' size='middle' onClick={this.exportPDF}> 导出考纲文件 </Button>
    <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    this.changeData(this.state.outlineData, 'chapter', 'chapterRowSpan') // 合并章节
    this.changeData(this.state.outlineData, 'section', 'sectionRowSpan') // 合并节次

    /* 上传文件的参数 */
    const props = {
      name: 'file',
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      headers: {
        authorization: 'authorization-text',
      },
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    }

    return (
      <div className='outlineMainWrapper'>
        <div className='topWrapper'>
          <div className='selectWrapper'>
            <p>查看的课程&emsp;</p>
            <Select defaultValue={this.selectOptions[0]} style={{ width: 120 }} onChange={this.handleChange}>
              {this.selectOptions.map((item) => {
                return <Option key={nanoid()} value={item}>{item}</Option>
              })}
            </Select>
          </div>
          <Upload {...props} showUploadList={false} onChange={this.fileOnChange}>
            <Button shape='round' size='middle' style={{color: 'white', backgroundColor: '#3B90FF'}}> 导入Excel </Button>
          </Upload>
        </div>
        <div className='tableWrapper'>
          <InfoTable columns={columns} data={this.state.outlineData} showTotal={showTotal} pageSize={11} />
        </div>
      </div>
    )
  }
}