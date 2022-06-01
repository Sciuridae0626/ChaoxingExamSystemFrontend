import React, { Component } from 'react';
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import ShareCss from './index.module.css'
import axios from 'axios'

export default class Share extends Component {

  state = {
    searchText: '',
    searchedColumn: '',
    isCollected: new Array(1000).fill(false),
    data: []
  }

  /* 组件挂载完毕的钩子 */
  componentDidMount = () => {
    axios.post('https://api.sciuridae.xyz/chaoxing/server/Bank/Share/share.php', {
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

  /* 改变收藏状态的函数 */
  changeCollect = (text, record) => {
    const isCollected = [...this.state.isCollected]
    const isCollectedChanged = isCollected.map((item, index) => {
      if(index === parseInt(record.key)) return !item
      else return item
    })
    this.setState({isCollected: isCollectedChanged})
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
        title: '考纲绑定',
        dataIndex: 'binding',
        key: 'binding',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('binding'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "未绑定" ? <span style={{color: "#FA5151"}}>未绑定</span>
          : text === "已绑定" ? <span style={{color: "#3EB575"}}>已绑定</span>
          : <span>部分绑定</span>
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record) => <div className={ShareCss.editButtonWrapper}>
          <p id={ShareCss.collection} onClick={() => this.changeCollect(text, record)}>
            <MyIcon type={ this.state.isCollected[record.key] === false ? 'icon-yijianshoucang' : 'icon-quxiaoshoucang' } />
            &nbsp;一键收藏
          </p>
          <p id={ShareCss.details}><MyIcon type='icon-chakanxiangqing' />&nbsp;查看详情</p>
        </div>
      }
    ]

    /* 我创建的题库的信息 */
    // const data = [
    //   // key：唯一标识；number：序号；name：名称；course：课程；type：题型；quantity：题量；status：共享状态；binding：考纲绑定
    //   {
    //     key: '1',
    //     number: 1,
    //     name: '第一单元练习题',
    //     course: '高等数学C1',
    //     type: '计算题',
    //     quantity: 35,
    //     status: '可查看',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '2',
    //     number: 2,
    //     name: '第二单元练习题',
    //     course: '高等数学C1',
    //     type: '填空题',
    //     quantity: 40,
    //     status: '可查看',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '3',
    //     number: 3,
    //     name: '2021-06四级真题',
    //     course: '大学英语听说',
    //     type: '混合',
    //     quantity: 28,
    //     status: '可组卷',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '4',
    //     number: 4,
    //     name: '2021-06六级真题',
    //     course: '大学英语听说',
    //     type: '混合',
    //     quantity: 28,
    //     status: '可组卷',
    //     binding: '部分绑定'
    //   },
    //   {
    //     key: '5',
    //     number: 5,
    //     name: '2021-06四级真题',
    //     course: '大学英语读写',
    //     type: '单选题',
    //     quantity: 28,
    //     status: '可查看',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '6',
    //     number: 6,
    //     name: '2021-06六级真题',
    //     course: '大学英语读写',
    //     type: '多选题',
    //     quantity: 28,
    //     status: '可组卷',
    //     binding: '部分绑定'
    //   },
    //   {
    //     key: '7',
    //     number: 7,
    //     name: 'C语言的输入输出',
    //     course: '程序设计基础',
    //     type: '单选题',
    //     quantity: 50,
    //     status: '可查看',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '8',
    //     number: 8,
    //     name: 'C语言的逻辑判断',
    //     course: '程序设计基础',
    //     type: '程序题',
    //     quantity: 50,
    //     status: '可查看',
    //     binding: '已绑定'
    //   },
    //   {
    //     key: '9',
    //     number: 9,
    //     name: '中国新民主革命史',
    //     course: '近代史',
    //     type: '判断题',
    //     quantity: 25,
    //     status: '可查看',
    //     binding: '部分绑定'
    //   },
    //   {
    //     key: '10',
    //     number: 10,
    //     name: '中国改革开放史',
    //     course: '近代史',
    //     type: '论述题',
    //     quantity: 30,
    //     status: '可组卷',
    //     binding: '已绑定'
    //   },
    //   {
    //     key: '11',
    //     number: 11,
    //     name: '视觉配色原理',
    //     course: '美术鉴赏',
    //     type: '名词解析',
    //     quantity: 15,
    //     status: '可组卷',
    //     binding: '未绑定'
    //   },
    //   {
    //     key: '12',
    //     number: 12,
    //     name: '名家画作赏析',
    //     course: '美术鉴赏',
    //     type: '资料题',
    //     quantity: 10,
    //     status: '可组卷',
    //     binding: '已绑定'
    //   },
    //   {
    //     key: '13',
    //     number: 13,
    //     name: '中国国防发展史',
    //     course: '国防教育',
    //     type: '多选题',
    //     quantity: 20,
    //     status: '可查看',
    //     binding: '部分绑定'
    //   },
    //   {
    //     key: '14',
    //     number: 14,
    //     name: '典型武器的基础认知',
    //     course: '国防教育',
    //     type: '连线题',
    //     quantity: 10,
    //     status: '可查看',
    //     binding: '已绑定'
    //   },
    //   {
    //     key: '15',
    //     number: 15,
    //     name: '2020年机经',
    //     course: '雅思综合',
    //     type: '综合',
    //     quantity: 65,
    //     status: '可组卷',
    //     binding: '部分绑定'
    //   },
    //   {
    //     key: '16',
    //     number: 16,
    //     name: '2021年机经',
    //     course: '雅思综合',
    //     type: '综合',
    //     quantity: 65,
    //     status: '可组卷',
    //     binding: '未绑定'
    //   }
    // ]

    const showTotal = (total) => <div className='showTotalWrapper'>
      <Button shape='round' size='middle'> 我的收藏 </Button>
      <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    return (
      <div className={ShareCss.mainWrapper}>
        <InfoTable columns={columns} data={this.state.data} showTotal={showTotal} pageSize={12} />
      </div>
    );
  }
}
