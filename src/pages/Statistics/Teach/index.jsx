import React, { Component } from 'react'
import { Input, Button, Space, Select } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import GradeDistribution from './components/GradeDistribution';
import WrongDistribution from './components/WrongDistribution';
import Analysis from './components/Analysis';
import BankRate from './components/BankRate';
import TeachCss from './index.module.css'

const { Option } = Select;

export default class Teach extends Component {

  state = {
    searchText: '',
    searchedColumn: ''
  }

  /* 查看科目的可选列表 */
  subjectChildren = ["计算机网络", "网络安全", "信息管理", "操作系统"]

  /* 具体考试的可选列表 */
  testChildren = ["期末考试A卷", "期末考试B卷", "期中考试A卷", "期中考试B卷"]

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

  /* 下载试卷分析的回调 */
  downloadPDF = () => {
    // window.open("https://api.sciuridae.xyz/chaoxing/download/计算机网络期末考试A卷试卷分析-2022年5月.docx")
    window.open("https://api.sciuridae.xyz/chaoxing/download/计算机网络期末考试A卷试卷分析-2022年5月.pdf")
  }

  /* 导出成绩单的回调 */
  exportExcel = () => {
    window.open("https://api.sciuridae.xyz/chaoxing/download/计算机网络期末考试A卷成绩单-2022年5月.xlsx")
  }

  render() {

    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        width: '7%',
        align: 'center'
      },
      {
        title: '班级',
        dataIndex: 'class',
        width: '10%',
        align: 'center'
      },
      {
        title: '姓名',
        dataIndex: 'name',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '学号',
        dataIndex: 'studentNumber',
        width: '10%',
        align: 'center',
        ...this.getColumnSearchProps('studentNumber')
      },
      {
        title: '试卷名称',
        dataIndex: 'testName',
        width: '25%',
        align: 'center',
      },
      {
        title: '成绩',
        dataIndex: 'grade',
        width: '12.5%',
        align: 'center',
        render: (text) => `${text}分`,
        sorter: (a, b) => a.grade - b.grade,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: '排名',
        dataIndex: 'rank',
        width: '12.5%',
        align: 'center',
        sorter: (a, b) => a.rank - b.rank,
        sortDirections: ['descend', 'ascend']
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={TeachCss.editButtonWrapper}>
          <p id={TeachCss.more}><MyIcon type='icon-chakanxiangqing' />&nbsp;查看详情</p>
        </div>
      }
    ]
    
    /* 监考数据的信息 */
    const data = [
      // key：唯一标识；number：序号；name：class：班级；姓名；studentNumber：testName：试卷名称；grade：成绩；rank：排名
      {
        key: '1',
        number: '1',
        class: '计算机201',
        name: '秦梦瑶',
        studentNumber: '2020001',
        testName: '2021-2022-1计算机网络期末考',
        grade: 100,
        rank: 1
      },
      {
        key: '2',
        number: '2',
        class: '计算机201',
        name: '王淡真',
        studentNumber: '2020002',
        testName: '2021-2022-1计算机网络期末考',
        grade: 99,
        rank: 2
      },
      {
        key: '3',
        number: '3',
        class: '计算机201',
        name: '师妃喧',
        studentNumber: '2020003',
        testName: '2021-2022-1计算机网络期末考',
        grade: 98,
        rank: 3
      }
    ]

    const showTotal = (total) => <div className='showTotalWrapper'>
      <Button shape='round' size='middle' onClick={this.exportExcel}> 导出成绩单 </Button>
      <p> &emsp;&emsp; 共{total}条&emsp; </p>
    </div>

    return (
      <div className={TeachCss.mainWrapper}>
        <div className={TeachCss.infoWrapper}>
          <div className={TeachCss.selectWrapper}>
            <div className={TeachCss.selectItem}>
              <p>查看科目</p>
              <Select className={TeachCss.selectInput} onChange={this.selectChange} defaultValue={1}>
                {this.subjectChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
              </Select>
            </div>
            <div className={TeachCss.selectItem}>
              <p>具体考试</p>
              <Select className={TeachCss.selectInput} onChange={this.selectChange} defaultValue={1}>
                {this.testChildren.map((item, index) => {
                    return <Option key={nanoid()} value={index+1}>{item}</Option>
                  })}
              </Select>
            </div>
          </div>
          <div>
            <Button shape='round' type='primary' ghost style={{marginRight: 15, color: '#8183FF', borderColor: '#8183FF'}}>查看试卷原题</Button>
            <Button shape='round' type='primary' ghost onClick={this.downloadPDF}>下载试卷分析</Button>
          </div>
        </div>

        <div className={TeachCss.chartWrapper}>
          <div className={TeachCss.lineWrapper}>
            <div className={TeachCss.cardWrapper}>
              <GradeDistribution />
            </div>
            <div className={TeachCss.cardWrapper}>
              <WrongDistribution />
            </div>
          </div>
          <div className={TeachCss.lineWrapper}>
            <div className={TeachCss.cardWrapper}>
              <Analysis />
            </div>
            <div className={TeachCss.cardWrapper}>
              <BankRate />
            </div>
          </div>
        </div>

        <div className={TeachCss.tableWrapper}>
          <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={1} />
        </div>
      </div>
    )
  }
}
