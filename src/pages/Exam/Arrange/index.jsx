import React, { Component } from 'react'
import { Input, Button, Space } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import NewTest from './components/NewTest'
import Campus from './components/Campus'
import Place from './components/Place'
import InfoTable from '../../../components/InfoTable';
import ArrangeCss from './index.module.css'

export default class Arrange extends Component {

  state = {
    searchText: '',
    searchedColumn: '',
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

  /* 打印试卷的回调 */
  exportPDF = () => {
    window.open("https://api.sciuridae.xyz/download/【打印试卷】计算机网络 2021-2022-2期末A卷.pdf")
  }

  render() {
    const columns = [
      {
        title: '序号',
        dataIndex: 'number',
        key: 'number',
        width: '8%',
        align: 'center'
      },
      {
        title: '考试科目',
        dataIndex: 'subject',
        key: 'subject',
        width: '13%',
        align: 'center'
      },
      {
        title: '考试日期',
        dataIndex: 'date',
        key: 'date',
        width: '10%',
        align: 'center'
      },
      {
        title: '考试时间',
        dataIndex: 'time',
        key: 'time',
        width: '10%',
        align: 'center'
      },
      {
        title: '考试地点',
        dataIndex: 'place',
        key: 'place',
        width: '12%',
        align: 'center'
      },
      {
        title: '考务状态',
        dataIndex: 'status',
        key: 'status',
        width: '12%',
        align: 'center',
        ...this.getColumnSearchProps('status'),
        render: (text) => //text是值，record是当前项对象，index是下标
          text === "已发布"
          ? <span style={{color: "#3EB575"}}>已发布</span>
          : <span>暂时保存</span>
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: () => <div className={ArrangeCss.editButtonWrapper}>
          <p id={ArrangeCss.exportPrinting} onClick={this.exportPDF}><MyIcon type='icon-daochudayin' />&nbsp;打印试卷</p>
          <p id={ArrangeCss.editAgain}><MyIcon type='icon-zaicibianji' />&nbsp;再次编辑</p>
          <p id={ArrangeCss.arrangement}><MyIcon type='icon-xiugaizhuangtai' />&nbsp;考场编排</p>
        </div>
      }
    ]

    /* 考务安排的信息 */
    const data = [
      // key：唯一标识；number：序号；subject：考试科目；date：考试日期；time：考试时间；place：考试地点；status：考务状态
      {
        key: '1',
        number: 1,
        subject: '计算机网络',
        date: '2021-12-25',
        time: '14:00-16:00',
        place: '教学楼A-111',
        status: '暂时保存'
      },
      {
        key: '2',
        number: 2,
        subject: '网络安全',
        date: '2021-12-26',
        time: '14:00-16:00',
        place: '教学楼B-105',
        status: '可查看'
      },
      {
        key: '3',
        number: 3,
        subject: '操作系统',
        date: '2021-12-27',
        time: '14:00-16:00',
        place: '教学楼C-213',
        status: '已发布'
      },
      {
        key: '4',
        number: 4,
        subject: '大学英语基础读写',
        date: '2021-12-25',
        time: '14:00-16:00',
        place: '教学楼A-111',
        status: '暂时保存'
      },
      {
        key: '5',
        number: 5,
        subject: '网络安全',
        date: '2021-12-26',
        time: '14:00-16:00',
        place: '教学楼B-105',
        status: '可查看'
      },
      {
        key: '6',
        number: 6,
        subject: '操作系统',
        date: '2021-12-27',
        time: '14:00-16:00',
        place: '教学楼C-213',
        status: '已发布'
      }
    ]

    return (
      <div className={ArrangeCss.arrangeWrapper}>
        <div className={ArrangeCss.topWrapper}>
          {/* 新建考场 */}
          <NewTest />
          <div className={ArrangeCss.rightWrapper}>
            {/* 新建校区 */}
            <Campus />
            {/* 新建地点 */}
            <Place />
          </div>
        </div>
        <div className={ArrangeCss.bottomWrapper}>
          <InfoTable columns={columns} data={data} pageSize={4} />
        </div>
      </div>
    )
  }
}
