import React, { Component } from 'react'
import { Button, Input, Divider, Form, Select, Radio, Modal, Upload, Cascader, message, Space, Checkbox } from 'antd'
import Highlighter from 'react-highlight-words'
import { nanoid } from 'nanoid'
import { UploadOutlined, SearchOutlined } from '@ant-design/icons'
import { exportWord } from 'mhtml-to-word'
import { MyIcon } from '../../../assets/iconfont.js'
import InfoTable from '../../../components/InfoTable'
import BigQ from './components/BigQ'
import JudgeQ from './components/JudgeQ'
import SingleQ from './components/SingleQ'
import BlankQ from './components/BlankQ'
import ConnectQ from './components/ConnectQ'
import ShortQ from './components/ShortQ'
import CalculateQ from './components/CalculateQ'
import BuildCss from './index.module.css'
import './iconfont.css'
import './table.css'
import { Link } from 'react-router-dom'

const { Option } = Select;
export default class Build extends Component {
  
  state = {
    searchText: '',
    searchedColumn: '',
    problemInfo: [],
    isSelectVisible: false,
    isAutomaticVisible: false,
    isTemplateVisible: false,
    haveImported: false
  }

  /* 新建试卷实时统计信息 */
  realTimeData = {
    // cover：考纲覆盖率；same：近三年试卷重复率；year：年份；rate：某年份对应的重复率
    cover: 0,
    same: [
      { year: 2021, rate: 0 },
      { year: 2020, rate: 0 },
      { year: 2019, rate: 0 }
    ]
  }

  /* 所属科目可选列表 */
  courseBelong = ["计算机网络", "网络安全", "信息管理", '操作系统']

  /* 覆盖考纲的信息 */
  outline = [
    // value：数据值；label：页面显示的标签；children：级联的下一层数据（其内对象属性同父层级）
    {
      value: "计算机网络体系结构",
      label: "计算机网络体系结构",
      children: [
        {
          value: "计算机网络概述",
          label: "计算机网络概述",
          children: [
            {
              value: "计算机网络的概念、组成与功能",
              label: "计算机网络的概念、组成与功能"
            },
            {
              value: "计算机网络的分类",
              label: "计算机网络的分类"
            },
            {
              value: "计算机网络主要性能指标",
              label: "计算机网络主要性能指标"
            }
          ]
        },
        {
          value: "计算机网络体系结构与参考模型",
          label: "计算机网络体系结构与参考模型",
          children: [
            {
              value: "计算机网络分层结构",
              label: "计算机网络分层结构"
            },
            {
              value: "计算机网络协议、接口、服务等概念",
              label: "计算机网络协议、接口、服务等概念"
            },
            {
              value: "ISO/OSI参考模型和TCP/IP模型",
              label: "ISO/OSI参考模型和TCP/IP模型"
            }
          ]
        }
      ]
    },
    {
      value: "物理层",
      label: "物理层",
      children: [
        {
          value: "通信基础",
          label: "通信基础",
          children: [
            {
              value: "信道、信号、带宽、信源与信宿等基本概念",
              label: "信道、信号、带宽、信源与信宿等基本概念"
            },
            {
              value: "奈奎斯特定理与香农定理",
              label: "奈奎斯特定理与香农定理"
            },
            {
              value: "编码与调制",
              label: "编码与调制"
            },
            {
              value: "电路交换、报文交换与分组交换",
              label: "电路交换、报文交换与分组交换"
            },
            {
              value: "数据报与虚电路",
              label: "数据报与虚电路"
            }
          ]
        },
        {
          value: "传输介质",
          label: "传输介质",
          children: [
            {
              value: "双绞线、同轴电缆、光纤与无线传输介质",
              label: "双绞线、同轴电缆、光纤与无线传输介质"
            },
            {
              value: "物理层接口的特性",
              label: "物理层接口的特性"
            }
          ]
        },
        {
          value: "物理层设备",
          label: "物理层设备",
          children: [
            {
              value: "中继器",
              label: "中继器"
            }
          ]
        }
      ]
    },
    {
      value: "数据链路层",
      label: "数据链路层",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "网络层",
      label: "网络层",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "传输层",
      label: "传输层",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    },
    {
      value: "应用层",
      label: "应用层",
      children: [
        {
          value: "第一章",
          label: "第一章"
        },
        {
          value: "第二章",
          label: "第二章"
        },
        {
          value: "第三章",
          label: "第三章"
        }
      ]
    }
  ]
  
  /* 列筛选框 */
  getColumnSearchProps = dataIndex => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#3B90FF' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: text =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  })
  /* 搜索 */
  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  }
  /* 重置 */
  handleReset = clearFilters => {
    clearFilters();
    this.setState({ searchText: '' });
  }

  /* 显示对话框 */
  showModal = (type) => {
    if(type === 'select') this.setState({isSelectVisible: true})
    else if(type === 'automatic') this.setState({isAutomaticVisible: true})
    else if(type === 'template') this.setState({isTemplateVisible: true})
  }
  /* 点击对话框确定按钮 */
  handleOk = (type) => {
    if(type === 'select') {
      this.setState({isSelectVisible: false})
      message.success({
          content: '选择的题目已导入成功！',
          style: {marginTop: '8.5vh'}
      })
    }
    else if(type === 'automatic') {
      this.setState({isAutomaticVisible: false})
      message.success({
          content: '自动组卷成功！',
          style: {marginTop: '8.5vh'}
      })
    }
    else if(type === 'template') {
      this.setState({isTemplateVisible: false})
      
      message.loading({
        content: '加载中...',
        key: 'updatable',
        style: {marginTop: '8.5vh'}
      })
      
      setTimeout(() => {
        this.setState({haveImported: true})
        message.success({
          content: '模板导入成功！',
          key: 'updatable',
          duration: 2,
          style: {marginTop: '8.5vh'}
        })
      }, 1500);
    }
  }
  /* 点击对话框取消按钮 */
  handleCancel = (type) => {
    if(type === 'select') this.setState({isSelectVisible: false})
    else if(type === 'automatic') this.setState({isAutomaticVisible: false})
    else if(type === 'template') this.setState({isTemplateVisible: false})
  }

  /* 选择器发生变化时的回调 */
  selectChange = (value) => {
    console.log(`selected ${value}`)
  }

  /* 创建大题的回调 */
  addBigQ = () => {
    var total = this.state.problemInfo.length
    var newProblem = this.state.problemInfo.slice()
    newProblem.push({
      id: total+1, title: '', number: 0, grade: 0,
      isSave: false, isAddSQ: false, isOverSQ: true, judgeQ: []})
    this.setState({problemInfo: newProblem})
  }
  /* 删除大题的回调 */
	deleteBigQ = (id) => {
		const {problemInfo} = this.state
		const newProblemInfo = problemInfo.filter((problemInfoObj)=>{
			return problemInfoObj.id !== id
		})
		this.setState({problemInfo: newProblemInfo})
    message.success({
        content: '删除成功！',
        style: {marginTop: '8.5vh'}
    })
	}
  /* 保存卡片后，去除阴影的回调 */
  saveBigQ = (id, title, number, grade) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isSave = true
        item.title = title
        item.number = number
        item.grade = grade
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }

  /* 增加小题的回调 */
	addSmallQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isAddSQ = true
        item.isOverSQ = false
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
	}
  /* 结束增加小题的回调 */
	overSmallQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.id === id) {
        item.isAddSQ = false
        item.isOverSQ = true
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
	}

  /* 增加判断题的回调 */
  addJudgeQ = () => {
    var newProblem = this.state.problemInfo
    newProblem.map((item) => {
      if(item.isAddSQ) {
        var total = item.judgeQ.length
        item.judgeQ.push({id: total+1, title: '', answer: '', grade: 0, isSave: false})
      }
      return item
    })
    this.setState({problemInfo: newProblem})
  }
  /* 删除判断题的回调 */
	deleteJudgeQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newJudgeQ = item.judgeQ.filter((judgeQObj)=>{
          return judgeQObj.id !== id
        })
        item.judgeQ = newJudgeQ
      }
      return item
    })
		this.setState({problemInfo: newProblemInfo})
    message.success({
        content: '删除成功！',
        style: {marginTop: '8.5vh'}
    })
	}
  /* 保存判断题后，去除阴影的回调 */
  saveJudgeQ = (id, title, answer, grade) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newQ = item.judgeQ.map((Q) => {
          if(Q.id === id){
            Q.isSave = true
            Q.title = title
            Q.answer = answer
            Q.grade = grade
          }
          return Q
        })
        item.judgeQ = newQ
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }
  /* 重新编辑判断题的回调 */
  editJudgeQ = (id) => {
		const {problemInfo} = this.state
    const newProblemInfo = problemInfo.map((item) => {
      if(item.isAddSQ) {
        const newQ = item.judgeQ.map((Q) => {
          if(Q.id === id){
            Q.isSave = false
          }
          return Q
        })
        item.judgeQ = newQ
      }
      return item
    })
    this.setState({problemInfo: newProblemInfo})
  }

  /* 刷新的回调 */
  refresh = () => {
    const hide = message.loading({
      content: '刷新中',
      duration: 0,
      style: {marginTop: '8.5vh'}
    });
    setTimeout(hide, 1000);
  }
  /* 完成创建的回调 */
  finish = () => {
    if(window.confirm("已更新该卷考纲覆盖率和近三年重复率，是否确认完成创建？")){
      // console.log(document.querySelector('.paper'))
      // let blob = new Blob([document.querySelector('.paper')],{type:"application/msword;charset=utf-8"});
      // saveAs(blob, "test.doc");
      exportWord({
        selector: ".paper",
        style: "p{whiteSpace: 'nowrap';}",
        filename: "exportTest"
      })
      message.success({
          content: '创建成功！已提交管理员审核',
          style: {marginTop: '8.5vh'}
      })
    }
  }

  render() {
    const {problemInfo, isSelectVisible, isAutomaticVisible, isTemplateVisible, haveImported} = this.state
    const showTotal = (total) => <p> 共{total}条&emsp; </p>
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center',
        render: (text, record, index) => <div><Checkbox></Checkbox>&nbsp;{index+1}</div>
      },
      {
        title: '题库名称',
        dataIndex: 'name',
        key: 'name',
        width: '20%',
        align: 'center',
        ...this.getColumnSearchProps('name'),
        render: (text) => <div><i class="iconfont icon-dictionary linearMyIcon"></i>&nbsp;{text}</div>
      },
      {
        title: '题型',
        dataIndex: 'type',
        key: 'type',
        width: '30%',
        align: 'center',
        ellipsis: true
      },
      {
        title: '题量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        align: 'center',
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ['descend', 'ascend'],
        render: (text) => text > 1000 ? <p style={{marginBottom: 0}}>1000+</p> : <p style={{marginBottom: 0}}>{text}</p>
      },
      {
        title: '更新时间',
        dataIndex: 'time',
        key: 'time',
        width: '30%',
        align: 'center'
      }
    ]
    /* 待导入题目的题库信息 */
    const data = [
      // key：唯一标识；name：题库名称；type：题型；quantity：题量；time：更新时间
      {
        key: '1',
        name: '我创建的',
        type: '名词解析、多选、论述、解答、计算题',
        quantity: 175,
        time: '2021年12月21日18:03:02'
      },
      {
        key: '2',
        name: '全校共享',
        type: '单选、多选、判断、连线、名词解析、解答、计算、程序、口语题',
        quantity: 317,
        time: '2021年12月31日15:59:57'
      },
      {
        key: '3',
        name: '参考题库',
        type: '单选、多选、判断、名词解析、解答题',
        quantity: 1520,
        time: '2022年01月01日11:18:25'
      },
      {
        key: '4',
        name: '我的收藏',
        type: '单选、多选、判断、名词解析、解答题',
        quantity: 52,
        time: '2021年12月13日03:27:36'
      }
    ]
    
    /* 弹窗底部内容 */
    const footerNode = (
      <div className={BuildCss.footerWrapper}>
        <p style={{alignSelf: 'flex-start', color: '#999999'}}>您已经从题库中选择了2道单选题、1道判断题、1道简答题、2道计算题</p>
        <div>
          <Button type='primary' ghost onClick={() => this.handleCancel('select')}>取消选题</Button>
          <Button type='primary' onClick={() => this.handleOk('select')}>导入选题</Button>
        </div>
      </div>
    )

    return (
      <div className={BuildCss.mainWrapper}>
        {/* 左列 */}
        <div className={BuildCss.leftWrapper}>
          {/* 添加题目 */}
          <div className={BuildCss.leftTopWrapper}>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}> <p style={{fontSize: 16}}>添加题目</p> </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-danxuan' style={{color: '#7B7B7B'}} />}>单选题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-duoxuan' style={{color: '#7B7B7B'}} />}>多选题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-tiankong' style={{color: '#7B7B7B'}} />}>填空题</Button>
              <Button onClick={this.addJudgeQ} size='small' type="ghost" icon={<MyIcon type='icon-panduan' style={{color: '#7B7B7B'}} />}>判断题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jisuan' style={{color: '#7B7B7B'}} />}>计算题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-lianxian' style={{color: '#7B7B7B'}} />}>连线题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-paixu' style={{color: '#7B7B7B'}} />}>排序题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-jieda' style={{color: '#7B7B7B'}} />}>解答题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-fenduan' style={{color: '#7B7B7B'}} />}>分段题</Button>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-chengxu' style={{color: '#7B7B7B'}} />}>程序题</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
              <Button size='small' type="ghost" icon={<MyIcon type='icon-kouyu' style={{color: '#7B7B7B'}} />}>口语题</Button>
            </div>
          </div>
          {/* 实时统计 */}
          <div className={BuildCss.leftBottomWrapper}>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p style={{fontSize: 16}}>实时统计</p>
              <Button size='small' type="primary" ghost onClick={this.refresh}>&nbsp;刷&nbsp;新&nbsp;</Button>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p>考纲覆盖率：<span style={{color: '#FF4D4F'}}> {this.realTimeData.cover*100}% </span></p>
            </div>
            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%' }}>
              <p>近三年试卷重复率</p>
            </div>
            {this.realTimeData.same.map((item) => {
                return (
                  <div key={nanoid()} className={BuildCss.lineWrapper} style={{ width: '100%', justifySelf: 'center', marginBottom: 5 }}>
                    <p style={{width: '100%', textAlign: 'center'}}>
                      {item.year}年&emsp;&emsp;&emsp;
                      <span style={{color: '#FF4D4F'}}>{item.rate*100}%</span>
                    </p>
                  </div>
                )
              })}
          </div>
        </div>

        {/* 中部 */}
        {haveImported ? <div id='middle' className={BuildCss.middleWrapper} onClick={this.deleteShadow}>
          {/* 试卷头部 */}
          <Input id={BuildCss.title} value="计算机网络 2021-2022-2期末A卷" bordered={false}
            style={{ fontSize: '1.5em', width: '100%', textAlign: 'center', color: '#181818', fontWeight: 'bold' }} />
          <Input value="本卷用于《计算机网络》课程2021-2022学年第2学期期末测试" bordered={false}
            style={{ fontSize: '1em', width: '100%', textAlign: 'center', marginTop: '1%' }} />
          <Divider dashed style={{ borderColor: 'black', marginTop: '10px', marginBottom: '3%' }}/>
          {/* 试卷快捷按钮 */}
          <div className={BuildCss.lineWrapper} style={{ width: '90%', marginBottom: '4%' }}>
            <Button size='small' type='primary' ghost onClick={this.addBigQ}>&emsp;创建大题&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('select')}>&emsp;从题库中选择&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('automatic')}>&emsp;自动组卷&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('template')}>&emsp;模板导入&emsp;</Button>
          </div>
          {/* 试题 */}
            <div key={nanoid()} style={{width: '100%'}} className="paper">
              <BigQ index={1} title="判断题" number={5} grade={10} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <JudgeQ index={1} title="目前使用的广域网基本都采用星型拓扑结构。" answer="false" grade={2} isSave={true}
                deleteJudgeQ={this.deleteJudgeQ} saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
              <JudgeQ index={2} title="数据报服务是一种面向连接服务。" answer="false" grade={2} isSave={true}
                deleteJudgeQ={this.deleteJudgeQ} saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
              <JudgeQ index={3} title="物理层需要完成的基本任务是封装成帧、透明传输、差错检测等。" answer="false" grade={2} isSave={true}
                deleteJudgeQ={this.deleteJudgeQ} saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
              <JudgeQ index={4} title="数据链路不等同于链路，它是在链路基础上增加了控制传输的规程。" answer="true" grade={2} isSave={true}
                deleteJudgeQ={this.deleteJudgeQ} saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
              <JudgeQ index={5} title="局域网具有结构简单、咸本低、速度快、可靠性高等优点。" answer="true" grade={2} isSave={true}
                deleteJudgeQ={this.deleteJudgeQ} saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />

              <BigQ index={2} title="选择题" number={5} grade={15} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <SingleQ index={1} title="采用异步传输方式，设数据位为7位，1位校验位，1位停止位，则其通信效率为（   ）" answer="B"
                A="30%" B="70%" C="80%" D="20%" grade={3} isSave={true}/>
              <SingleQ index={2} title="T1载波的数据传输率为（   ）" answer="D"
                A="1Mbps" B="10Mbps" C="2.048Mbps" D="1.544Mbps" grade={3} isSave={true}/>
              <SingleQ index={3} title="采用相位幅度调制PAM技术，可以提高数据传输速率，例如采用8种相位，每种相位取2种幅度值，可使一个码元表示的二进制数的位数为（   ）" answer="D"
                A="2位" B="8位" C="16位" D="4位" grade={3} isSave={true}/>
              <SingleQ index={4} title="若网络形状是由站点和连接站点的链路组成的一个闭合环，则称这种拓扑结构为（   ）" answer="C"
                A="星形拓扑" B="总线拓扑" C="环形拓扑" D="树形拓扑" grade={3} isSave={true}/>
              <SingleQ index={5} title="采用海明码纠正一位差错，若信息位为4位，则冗余位至少应为（   ）" answer="B"
                A="2位" B="3位" C="5位" D="4位" grade={3} isSave={true}/>

              <BigQ index={3} title="填空题" number={5} grade={20} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <BlankQ index={1} title="在SI体系结构中，PDU是由（   ）和（   ）两部分构成。" answer={["UD", "PCI"]} grade={4} isSave={true} />
              <BlankQ index={2} title="衡量计算机网络性能的指标很多，但最主要的两个性能指标分别是（   ）和（   ）。" answer={["带宽", "时延"]} grade={4} isSave={true} />
              <BlankQ index={3} title="RIP协议使用的（   ）算法，OSPF使用的是（   ）算法。" answer={["基于距离矢量", "最短路径优先"]} grade={4} isSave={true} />
              <BlankQ index={4} title="DNS的主要功能有两个：一是确定网络主机域名的定义规则，二是将（   ）转换成（   ）。" answer={["域名", "实际IP地址"]} grade={4} isSave={true} />
              <BlankQ index={5} title="使用FTP进行文件传输时，FTP的客户和服务器进程之间要建立两个连接，即（   ）和（   ）。" answer={["控制连接", "数据连接"]} grade={4} isSave={true} />

              <BigQ index={4} title="连线题" number={5} grade={5} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <p style={{padding: "2% 5%"}}>备选项：A.地址解析协议&emsp;B.用户数据报协议&emsp;C.传输控制协议&emsp;D.外部网关协议&emsp;E.内部网关协议</p>
              <ConnectQ index={1} title="UDP" answer="B" isSave={true} grade={1} />
              <ConnectQ index={2} title="TCP" answer="C" isSave={true} grade={1} />
              <ConnectQ index={3} title="ARP" answer="A" isSave={true} grade={1} />
              <ConnectQ index={4} title="IGP" answer="E" isSave={true} grade={1} />
              <ConnectQ index={5} title="BGP" answer="D" isSave={true} grade={1} />

              <BigQ index={5} title="简答题" number={3} grade={30} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <ShortQ index={1} title="OSI七层模型包括哪些？" keyword="应用层；表示层；会话层；传输层；网络层；数据链路层；物理层" answer="OSI七层模型从上到下依次为：应用层；表示层；会话层；传输层；网络层；数据链路层；物理层" isSave={true} grade={10} />
              <ShortQ index={2} title="简述CSMA技术的P—坚持算法规则。" keyword="" answer="(1)监听总线，如果总线空闲，则以P的概率发送，而以（1-P）的概率延迟一个时间单位（最大传播时延的2倍）；&#13;&#10;(2)延迟了一个时间单位后，再重复步骤(1)；&#13;&#10;(3)如果总线是忙的，继续监听直至总线空闲并重复步骤(1)。" isSave={true} grade={10} />
              <ShortQ index={3} title="简述Novell NetWare对文件服务器的共享硬盘提供的5级可靠性措施。" keyword="" answer="(1)第一级：对硬盘目录和文件分配表（FAT）的保护；&#13;&#10;(2)第二级：对硬盘表面损坏时的数据保护；&#13;&#10;(3)第三级：采用磁盘镜像的方法实现对磁盘驱动器损坏的保护；&#13;&#10;(4)第四级：采用磁盘双工，对磁盘通道或磁盘驱动器损坏起到保护作用。&#13;&#10;(5)第五级：采用事务跟踪系统TTS的附加容错功能。" isSave={true} grade={10} />
              
              <BigQ index={6} title="计算题" number={1} grade={20} isSave={true}
                deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ} addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
              <CalculateQ index={1} title="1.收发两端之间的传输距离为1000km，信号在媒体上的传播速率为2×108m/s。试计算以下两种情况的发送时延和传播时延：&#13;&#10;(1)数据长度为107bit，数据发送速率为100kb/s；&#13;&#10;(2)数据长度为103bit，数据发送速率为1Gb/s。"
                answer="100s、0.005s；1μs、0.005s" process="(1)发送时延= 数据长度（比特）/ 发送速率（比特/每秒）= 107 / 100000 = 107 / 105 = 100s；&#13;&#10;传播时延= 信道长度（米）/ 信号在信道上的传播速率（米/每秒）= 106 / (2 × 108) = 0.005s；&#13;&#10;
                  (2)发送时延= 数据长度（比特）/ 发送速率（比特/每秒）= 103/1000 000 000 = 103 / 109 = 1μs；&#13;&#10;传播时延= 信道长度（米）/ 信号在信道上的传播速率（米/每秒）= 106 / (2 × 108) = 0.005s。" isSave={true} grade={20} />
            </div>
        </div>
        
        : <div id='middle' className={BuildCss.middleWrapper} onClick={this.deleteShadow}>
          {/* 试卷头部 */}
          <Input id={BuildCss.title} placeholder="请输入试卷名称" bordered={false}
            style={{ fontSize: '1.5em', width: '100%', textAlign: 'center', color: '#181818', fontWeight: 'bold' }} />
          <Input placeholder="点击设置描述" bordered={false}
            style={{ fontSize: '1em', width: '100%', textAlign: 'center', marginTop: '1%' }} />
          <Divider dashed style={{ borderColor: 'black', marginTop: '10px', marginBottom: '3%' }}/>
          {/* 试卷快捷按钮 */}
          <div className={BuildCss.lineWrapper} style={{ width: '90%', marginBottom: '4%' }}>
            <Button size='small' type='primary' ghost onClick={this.addBigQ}>&emsp;创建大题&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('select')}>&emsp;从题库中选择&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('automatic')}>&emsp;自动组卷&emsp;</Button>
            <Button size='small' type='primary' ghost onClick={() => this.showModal('template')}>&emsp;模板导入&emsp;</Button>
          </div>
          {/* 试题 */}
          {problemInfo.map((item, index) => {
              return (
                <div key={nanoid()} style={{width: '100%'}}>
                  <BigQ index={index+1} {...item} deleteBigQ={this.deleteBigQ} saveBigQ={this.saveBigQ}
                    addSmallQ={this.addSmallQ} overSmallQ={this.overSmallQ} />
                  {item.judgeQ.map((item, index) => {
                    return <JudgeQ index={index+1} {...item} deleteJudgeQ={this.deleteJudgeQ} 
                      saveJudgeQ={this.saveJudgeQ} editJudgeQ={this.editJudgeQ} />
                  })}
                </div>
                )
            })}
        </div>}

        {/* 右列 */}
        <div className={BuildCss.rightWrapper}>
          <div className={BuildCss.lineWrapper} style={{ width: '80%' }}>
            <p style={{ fontSize: '16px' }}>基本信息</p>
          </div>
          {/* 基本信息 */}
          <Form name="basicInfo" style={{width: '80%'}}>
            <Form.Item label="所属科目" name="courseBelong"
            style={{ marginTop: '5%', marginBottom: '5%' }}
            // rules={[{ required: true, message: '必选'}]} validateStatus="error"
            required 
            >
              <Select onChange={this.selectChange}  placeholder="请选择">
                  {this.courseBelong.map((item, index) => {
                      return <Option key={nanoid()} value={`belong${index}`}>{item}</Option>
                  })}
              </Select>
            </Form.Item>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;查看该科考纲&nbsp;</Button>
            </div>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;查看该科往年试卷&nbsp;</Button>
            </div>

            <Form.Item label="试卷型号" name="paperType"
            wrapperCol={{ offset: 1, span: 16 }}
            style={{ marginTop: '4%', marginBottom: '4%' }}
            // rules={[{ required: true, message: '必选'}]}
            required validateStatus="error"
            >
              <Radio.Group>
                <Radio value='A'>A</Radio>
                <Radio value='B'>B</Radio>
              </Radio.Group>
            </Form.Item>

            <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '8%', justifyContent: 'flex-end' }}>
              <Button size='small' type='primary' ghost>&nbsp;预览&nbsp;</Button>
            </div>

            <Form.Item>
              <div className={BuildCss.lineWrapper} style={{ width: '100%', marginBottom: '4%', justifyContent: 'flex-end' }}>
                <Button size='small' type="primary" htmlType="submit" style={{ lineHeight: '1.5em' }}
                  onClick={this.finish}><Link to="/teacher/home">&nbsp;完成创建&nbsp;</Link></Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        
        {/* 从题库中导入对话框 */}
        <Modal title='从题库中导入' maskClosable={false} visible={isSelectVisible} onOk={() => this.handleOk('select')} okText='完成'
          onCancel={() => this.handleCancel('select')} cancelText='返回' centered width={800} footer={footerNode} bodyStyle={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
            <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={4} noneMarginBottom={true} />
        </Modal>
        
        {/* 自动组卷对话框 */}
        <Modal title="自动组卷" maskClosable={false} visible={isAutomaticVisible} onOk={() => this.handleOk('automatic')} okText='开始组卷'
            onCancel={() => this.handleCancel('automatic')} cancelText='取消' centered bodyStyle={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'
            }}>
              <Form style={{width: '80%'}}>
                <Form.Item label="覆盖题型" name="qType" style={{ marginBottom: '5%', width: '100%' }} >
                  <Select mode="multiple" allowClear style={{width: '100%'}} placeholder="不选则默认任意题型">
                    <Option value='single'>单选题</Option>
                    <Option value='multiple'>多选题</Option>
                    <Option value='blank'>判断题</Option>
                    <Option value='calculate'>计算题</Option>
                    <Option value='connect'>连线题</Option>
                    <Option value='order'>排序题</Option>
                    <Option value='answer'>解答题</Option>
                    <Option value='subsection'>分段题</Option>
                    <Option value='program'>程序题</Option>
                    <Option value='oral'>口语题</Option>
                  </Select>
                </Form.Item>
                <Form.Item label="覆盖考纲" name="qOutline" style={{ marginBottom: '5%', width: '100%' }} >
                  <Cascader multiple options={this.outline} placeholder="请进行级联选择，不选则默认任意考点" />
                </Form.Item>
                <Form.Item label="覆盖难度" name="qDifficulty" style={{ marginBottom: '5%', width: '100%' }} >
                  <Select mode="multiple" allowClear style={{width: '100%'}} placeholder="不选则默认任意难度">
                    <Option value='simple'>简单</Option>
                    <Option value='easy'>容易</Option>
                    <Option value='medium'>中等</Option>
                    <Option value='difficult'>困难</Option>
                  </Select>
                </Form.Item>
              </Form>
              <p style={{color: '#ACACAC', marginBottom: 0}}>注：系统将根据设置在您的题库及共享题库中搜索符合要求的题目自动组卷，您所创建的题库优先，且组卷后仍可修改。</p>
        </Modal>
        
        {/* 模板导入对话框 */}
        <Modal title="模板导入" maskClosable={false} visible={isTemplateVisible} onOk={() => this.handleOk('template')} okText='开始导入'
            onCancel={() => this.handleCancel('template')} cancelText='取消' centered bodyStyle={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
            }}>
              <p>您可以通过 Word 或 Excel 文件导入整套试卷，请按照我们提供的模板格式来导入您的试卷，请点击链接下载模板
                &emsp;<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">Word试卷模板</a>
                &emsp;<a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">Excel试卷模板</a>
              </p>
              <Upload action="https://www.mocky.io/v2/5cc8019d300000980a055e76">
                <Button icon={<UploadOutlined />}>上传文件</Button>
              </Upload>
        </Modal>
      </div>
    )
  }
}
