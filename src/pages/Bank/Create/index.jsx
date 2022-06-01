import React, { Component } from 'react'
import { Input, Button, Space, Modal, message, Table } from 'antd'
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc'
import { arrayMoveImmutable } from 'array-move'
import Highlighter from 'react-highlight-words'
import { SearchOutlined, MenuOutlined } from '@ant-design/icons'
import { MyIcon } from '../../../assets/iconfont.js'
import InfoTable from '../../../components/InfoTable'
import CreateCss from './index.module.css'
import axios from 'axios'
import cookie from 'react-cookies'
import './table.css'

const DragHandle = SortableHandle(() => <MenuOutlined style={{ cursor: 'grab', color: '#999' }} />)
const modalColumns = [
  {
    title: '',
    dataIndex: 'sort',
    width: '5%',
    className: 'drag-visible',
    align: 'center',
    render: () => <DragHandle />
  },
  {
    title: '题干',
    dataIndex: 'stem',
    width: '20%',
    className: 'drag-visible',
    align: 'center',
    ellipsis: true
  },
  {
    title: '题型',
    dataIndex: 'type',
    width: '8%',
    align: 'center'
  },
  {
    title: '考纲',
    dataIndex: 'outline',
    width: '8%',
    align: 'center'
  },
  {
    title: '难易程度',
    dataIndex: 'difficulty',
    width: '10%',
    align: 'center'
  },
  {
    title: '更新时间',
    dataIndex: 'time',
    width: '17%',
    align: 'center',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'edit',
    width: '30%',
    align: 'center',
    render: () => <div className={CreateCss.editButtonWrapper}>
      <p id={CreateCss.editAgain} style={{marginBottom: 0}}><MyIcon type='icon-shanchu' />&nbsp;删除</p>
      <p id={CreateCss.changeStatus} style={{marginBottom: 0}}><MyIcon type='icon-fuzhi' />&nbsp;复制</p>
      <p id={CreateCss.exportPrinting} style={{marginBottom: 0}}><MyIcon type='icon-xiugaichengji' />&nbsp;编辑</p>
    </div>
  }
]
/* 弹窗表格所打开的题库的信息 */
const modalData = [
  // key：唯一标识；stem：题干；type：题型；outline：考纲；difficulty：难易程度；time：更新时间；index：排序号
  {
    key: '1',
    stem: '以下IP地址中，属于C类地址是',
    type: '单选题',
    outline: 1,
    difficulty: '中等',
    time: '2021年12月21日18:03:02',
    index: 0,
  },
  {
    key: '2',
    stem: '在OSI模型中，第N层和其上的N+1层的关系是',
    type: '多选题',
    outline: 2,
    difficulty: '中等',
    time: '2021年12月31日15:59:57',
    index: 1,
  },
  {
    key: '3',
    stem: '数据只能沿一个固定方向传输的的通信方式是',
    type: '单选题',
    outline: 3,
    difficulty: '容易',
    time: '2022年01月01日11:18:25',
    index: 2,
  },
  {
    key: '4',
    stem: 'CSMA/CD协议在站点发送数据时',
    type: '单选题',
    outline: 4,
    difficulty: '中等',
    time: '2021年12月13日03:27:36',
    index: 3,
  },
  {
    key: '5',
    stem: '把网络分为电路交换网、报文交换网、分组交换网属于按什么进行分类',
    type: '判断题',
    outline: 5,
    difficulty: '简单',
    time: '2021年12月13日03:27:36',
    index: 4,
  },
  {
    key: '6',
    stem: 'IP协议是无连接的，其信息传输方式是',
    type: '简答题',
    outline: 6,
    difficulty: '困难',
    time: '2021年12月13日03:27:36',
    index: 5,
  }
]
const SortableItem = SortableElement(props => <tr {...props} />)
const SortableBody = SortableContainer(props => <tbody {...props} />)
export default class Create extends Component {

  state = { searchText: '', searchedColumn: '', isModalVisible: false, modalTitle: '', dataSource: modalData ,data:[]}

  /* 组件挂载完毕的钩子 */
  componentDidMount = () => {
    axios.post('https://api.sciuridae.xyz/chaoxing/server/Bank/Create/create.php', {
      username: cookie.load("username") //用户名
    })
    .then(response => {
      this.setState({data: response.data})
    })
    .catch(error => {
    })
  }

  /* 组件即将卸载的钩子 */
  componentWillUnmount = () => {
    this.setState({activeKey: '1'})
  }

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
  showModal = (title) => {
    this.setState({isModalVisible: true, modalTitle: title})
  }
  /* 点击对话框确定按钮 */
  handleOk = () => {
    this.setState({isModalVisible: false})
    message.success({
        content: '编辑成功！',
        style: {marginTop: '8.5vh'}
    })
  }
  /* 点击对话框取消按钮 */
  handleCancel = () => {
    this.setState({isModalVisible: false})
  }

  /* 弹窗内表格拖拽排序的相关函数 */
  onSortEnd = ({ oldIndex, newIndex }) => {
    const { dataSource } = this.state;
    if (oldIndex !== newIndex) {
      const newData = arrayMoveImmutable([].concat(dataSource), oldIndex, newIndex).filter(
        el => !!el,
      )
      this.setState({ dataSource: newData })
    }
  }
  DraggableContainer = props => (
    <SortableBody
      useDragHandle
      disableAutoscroll
      helperClass="row-dragging"
      onSortEnd={this.onSortEnd}
      {...props}
    />
  )
  DraggableBodyRow = ({ className, style, ...restProps }) => {
    const { dataSource } = this.state
    // function findIndex base on Table rowKey props and should always be a right array index
    const index = dataSource.findIndex(x => x.index === restProps['data-row-key'])
    return <SortableItem index={index} {...restProps} />
  }
  
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '10%',
        align: 'center'
      },
      {
        title: '名称',
        dataIndex: 'name',
        key: 'name',
        width: '15%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '课程',
        dataIndex: 'course',
        key: 'course',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('course')
      },
      {
        title: '题型',
        dataIndex: 'type',
        key: 'type',
        width: '10%',
        align: 'center'
      },
      {
        title: '题量',
        dataIndex: 'quantity',
        key: 'quantity',
        width: '10%',
        align: 'center',
        sorter: (a, b) => a.quantity - b.quantity,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: '共享状态',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('status'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "可组卷"
          ? <span style={{color: "#3B90FF"}}>可组卷</span>
          : text === "可查看" ? <span>可查看</span>
          : <span>私有</span>
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record) => <div className={CreateCss.editButtonWrapper}>
          <p id={CreateCss.editAgain} onClick={() => this.showModal(record.name)}><MyIcon type='icon-zaicibianji' />&nbsp;编辑题库</p>
          <p id={CreateCss.changeStatus}><MyIcon type='icon-xiugaizhuangtai' />&nbsp;修改状态</p>
          <p id={CreateCss.exportPrinting}><MyIcon type='icon-daochudayin' />&nbsp;导出打印</p>
        </div>
      }
    ]
    /* 我创建的题库的信息 */
    // const data = [
    //   // key：唯一标识；number：序号；name：名称；course：课程；type：题型；quantity：题量；status：共享状态
    //   {
    //     key: '1',
    //     number: 1,
    //     name: '第一单元练习题',
    //     course: '计算机网络',
    //     type: '混合',
    //     quantity: 35,
    //     status: '私有'
    //   },
    //   {
    //     key: '2',
    //     number: 2,
    //     name: '第二单元练习题',
    //     course: '计算机网络',
    //     type: '填空题',
    //     quantity: 25,
    //     status: '可查看'
    //   },
    //   {
    //     key: '3',
    //     number: 3,
    //     name: '计网名词解析汇总',
    //     course: '计算机网络',
    //     type: '名词解析',
    //     quantity: 30,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '4',
    //     number: 4,
    //     name: '实验材料分析题',
    //     course: '网络安全',
    //     type: '混合',
    //     quantity: 45,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '5',
    //     number: 5,
    //     name: '第一章复习题',
    //     course: '网络安全',
    //     type: '单选题',
    //     quantity: 15,
    //     status: '私有'
    //   },
    //   {
    //     key: '6',
    //     number: 6,
    //     name: '第二章复习题',
    //     course: '网络安全',
    //     type: '多选题',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '7',
    //     number: 7,
    //     name: '2021-2022-1复习',
    //     course: '信息管理',
    //     type: '混合',
    //     quantity: 50,
    //     status: '可查看'
    //   },
    //   {
    //     key: '8',
    //     number: 8,
    //     name: '信管名词解析汇总',
    //     course: '信息管理',
    //     type: '名词解析',
    //     quantity: 25,
    //     status: '可查看'
    //   },
    //   {
    //     key: '9',
    //     number: 9,
    //     name: '第六单元练习题',
    //     course: '操作系统',
    //     type: '计算题',
    //     quantity: 25,
    //     status: '私有'
    //   },
    //   {
    //     key: '10',
    //     number: 10,
    //     name: '第七单元练习题',
    //     course: '操作系统',
    //     type: '论述题',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '11',
    //     number: 11,
    //     name: '测试题1',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '12',
    //     number: 12,
    //     name: '测试题2',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '13',
    //     number: 13,
    //     name: '测试题3',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '14',
    //     number: 14,
    //     name: '测试题4',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '15',
    //     number: 15,
    //     name: '测试题5',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '16',
    //     number: 16,
    //     name: '测试题6',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '17',
    //     number: 17,
    //     name: '测试题7',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '18',
    //     number: 18,
    //     name: '测试题8',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   },
    //   {
    //     key: '19',
    //     number: 19,
    //     name: '测试题9',
    //     course: '操作系统',
    //     type: '综合',
    //     quantity: 50,
    //     status: '可组卷'
    //   }
    // ]
    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    const {isModalVisible, modalTitle} = this.state
    /* 弹窗底部内容 */
    const footerNode = (
      <div className={CreateCss.footerWrapper}>
        <p style={{alignSelf: 'flex-start', color: '#999999'}}>该题库中现有4道单选题、1道判断题、1道简答题、2道计算题，总计8题，总题型属于混合</p>
        <Button type='primary' ghost onClick={this.handleCancel}>返回主页面</Button>
      </div>
    )
    const pagination = {
      showTotal: showTotal,
      total: modalData.length,
      pageSize: 4,
      showQuickJumper: true,
      showSizeChanger: false,
      position: ['bottomCenter'],
      style: {marginTop: '1.5%', marginBottom: 0}
    }

    return (
      <div className={CreateCss.mainWrapper}>
        <InfoTable columns={columns} data={this.state.data} showTotal={showTotal} pageSize={12} />
        
        {/* 编辑题库对话框 */}
        <Modal title={modalTitle} maskClosable={false} visible={isModalVisible} onOk={this.handleOk} okText='完成'
          onCancel={this.handleCancel} cancelText='返回' centered width={800} footer={footerNode} bodyStyle={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}>
              <Table pagination={pagination} dataSource={this.state.dataSource} columns={modalColumns} rowKey="index" 
                components={{ body: { wrapper: this.DraggableContainer, row: this.DraggableBodyRow } }}
                style={{width: '100%'}} />
        </Modal>
      </div>
    )
  }
}
