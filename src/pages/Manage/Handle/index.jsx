import React, { Component } from 'react'
import { Input, Button, Space, Radio, Popconfirm } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import InfoTable from '../../../components/InfoTable';
import HandleCss from './index.module.css'

export default class Handle extends Component {

  state = {
    searchText: '',
    searchedColumn: '',
    data: [ // key：唯一标识；number：序号；send：发送方；content：操作内容；status：状态
      {
        key: '1',
        number: 1,
        send: '刘一',
        content: '创建《Web服务器端程序设计》课程',
        status: '待审批'
      },
      {
        key: '2',
        number: 2,
        send: '陈二',
        content: '提交《思想道德修养与法律基础》课程期末考核组卷',
        status: '待审批'
      },
      {
        key: '3',
        number: 3,
        send: '李四',
        content: '将《计算机网络》课程的《计网名词解析汇总》题库共享状态设为可组卷',
        status: '待审批'
      },
      {
        key: '4',
        number: 4,
        send: '王五',
        content: '创建《UI设计与交互设计》课程',
        status: '待审批'
      },
      {
        key: '5',
        number: 5,
        send: '赵六',
        content: '创建《人机交互与虚拟现实》课程',
        status: '待审批'
      },
      {
        key: '6',
        number: 6,
        send: '孙七',
        content: '提交《数据库原理》课程期末考核组卷',
        status: '待审批'
      },
      {
        key: '7',
        number: 7,
        send: '周八',
        content: '提交《高等数学C1》课程期末考核组卷',
        status: '待审批'
      },
      {
        key: '8',
        number: 8,
        send: '吴九',
        content: '提交《概率论与数理统计》课程期末考核阅卷结果',
        status: '待审批'
      }
    ],
    buffer: {index: -1, value: ''}
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

  /* 单选框组发生变化时的回调 */
  radioChange = (index, event) => {
    console.log(index, event.target.value)
    if(event.target.value === 'agree') this.setState({buffer: {index: index, value: '已通过'}})
    else this.setState({buffer: {index: index, value: '已驳回'}})
    if(this.state.isConfirmed) {
      const newData = this.state.data.map((item, i) => {
        if(i === index) item.status = event.target.value
        return item
      })
      this.setState({isConfirmed: false, data: newData})
    }
  }

  /* 点击确认的回调 */
  onConfirm = () => {
    const {index, value} = this.state.buffer
    const newData = this.state.data.map((item, i) => {
      if(i === index) item.status = value
      return item
    })
    this.setState({data: newData})
  }

  /* 点击取消的回调 */
  onCancel = () => {
    // this.setState({buffer: {index: -1, value: ''}})
  }
  
  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '7%',
        align: 'center'
      },
      {
        title: '发送方',
        dataIndex: 'send',
        key: 'send',
        width: '15%',
        align: 'center',
        ...this.getColumnSearchProps('send')
      },
      {
        title: '操作内容',
        dataIndex: 'content',
        key: 'content',
        width: '45%',
        align: 'center',
        ...this.getColumnSearchProps('content')
      },
      {
        title: '状态',
        dataIndex: 'status',
        key: 'status',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('status'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "待审批"
          ? <span style={{color: "#FF4D4F"}}>待审批</span>
          : text === "已通过" ? <span style={{color: "#3EB575"}}>已通过</span>
          : <span>已驳回</span>
      },
      {
        title: '审批',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record, index) => 
        <Radio.Group name="radioGroup" disabled={record.status !== '待审批'}
          onChange={(event) => this.radioChange(index, event)}>
          <Popconfirm placement="top" title="提交后不可更改，是否确认" okText="是" cancelText="否"
            onConfirm={this.onConfirm} onCancel={this.onCancel}>
            <Radio value='agree'>通过</Radio>
          </Popconfirm>
          <Popconfirm placement="top" title="提交后不可更改，是否确认" okText="是" cancelText="否"
            onConfirm={this.onConfirm} onCancel={this.onCancel}>
            <Radio value='reject'>驳回</Radio>
          </Popconfirm>
        </Radio.Group>
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    return (
      <div className={HandleCss.mainWrapper}>
        <InfoTable columns={columns} data={this.state.data} showTotal={showTotal} pageSize={12} />
      </div>
    )
  }
}
