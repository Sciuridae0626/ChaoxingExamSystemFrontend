import React, { Component } from 'react'
import { Input, Button, Space, Modal } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { MyIcon } from '../../../assets/iconfont.js';
import InfoTable from '../../../components/InfoTable';
import TeacherCss from './index.module.css'

export default class Teacher extends Component {

  state = {searchText: '', searchedColumn: '', isCodeVisible: false, whoseCode: ''}

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
  showModal = (name) => {
    this.setState({isCodeVisible: true, whoseCode: name})
  }
  /* 点击对话框确定按钮 */
  handleOk = () => {
    this.setState({isCodeVisible: false})
  }
  /* 点击对话框取消按钮 */
  handleCancel = () => {
    this.setState({isCodeVisible: false})
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
        title: '用户名',
        dataIndex: 'nickname',
        key: 'nickname',
        width: '12.5%',
        align: 'center'
      },
      {
        title: '真实姓名',
        dataIndex: 'name',
        key: 'name',
        width: '12.5%',
        align: 'center',
        ...this.getColumnSearchProps('name')
      },
      {
        title: '工号',
        dataIndex: 'teacherNumber',
        key: 'teacherNumber',
        width: '12.5%',
        align: 'center',
        ...this.getColumnSearchProps('teacherNumber')
      },
      {
        title: '座机号码',
        dataIndex: 'landline',
        key: 'landline',
        width: '10%',
        align: 'center'
      },
      {
        title: '手机号码',
        dataIndex: 'telephone',
        key: 'telephone',
        width: '12.5%',
        align: 'center'
      },
      {
        title: '办公室',
        dataIndex: 'office',
        key: 'office',
        width: '10%',
        align: 'center'
      },
      {
        title: '操作',
        dataIndex: 'edit',
        key: 'edit',
        align: 'center',
        render: (text, record) => <div className={TeacherCss.editButtonWrapper}>
          <p id={TeacherCss.resetPassword} onClick={() => this.showModal(record.name)}><MyIcon type='icon-chongzhimima' />&nbsp;重置密码</p>
          <p id={TeacherCss.deleteAccount}><MyIcon type='icon-shanchuzhanghao' />&nbsp;删除账号</p>
        </div>
      }
    ]

    /* 教师用户的信息 */
    const data = [
      // key：唯一标识；number：序号；nickname：用户名；name：真实姓名；teacherNumber：工号；landline：座机号码；telephone：手机号码；office：办公室
      {
        key: '1',
        number: 1,
        nickname: 'Liu Yi',
        name: '刘一',
        teacherNumber: '20191520',
        landline: '28861520',
        telephone: '15315201520',
        office: '办公楼A-520'
      },
      {
        key: '2',
        number: 2,
        nickname: 'Chen Er',
        name: '陈二',
        teacherNumber: '20191521',
        landline: '28861521',
        telephone: '15315201521',
        office: '办公楼A-521'
      },
      {
        key: '3',
        number: 3,
        nickname: 'Zhang San',
        name: '张三',
        teacherNumber: '20191522',
        landline: '28861522',
        telephone: '15315201522',
        office: '办公楼A-522'
      },
      {
        key: '4',
        number: 4,
        nickname: 'Li Si',
        name: '李四',
        teacherNumber: '20191523',
        landline: '28861523',
        telephone: '15315201523',
        office: '办公楼A-523'
      },
      {
        key: '5',
        number: 5,
        nickname: 'Wang Wu',
        name: '王五',
        teacherNumber: '20191524',
        landline: '28861524',
        telephone: '15315201524',
        office: '办公楼A-524'
      },
      {
        key: '6',
        number: 6,
        nickname: 'Zhao Liu',
        name: '赵六',
        teacherNumber: '20191525',
        landline: '28861525',
        telephone: '15315201525',
        office: '办公楼A-525'
      },
      {
        key: '7',
        number: 7,
        nickname: 'Sun Qi',
        name: '孙七',
        teacherNumber: '20191526',
        landline: '28861526',
        telephone: '15315201526',
        office: '办公楼A-526'
      },
      {
        key: '8',
        number: 8,
        nickname: 'Zhou Ba',
        name: '周八',
        teacherNumber: '20191527',
        landline: '28861527',
        telephone: '15315201527',
        office: '办公楼A-527'
      },
      {
        key: '9',
        number: 9,
        nickname: 'Wu Jiu',
        name: '吴九',
        teacherNumber: '20191528',
        landline: '28861528',
        telephone: '15315201528',
        office: '办公楼A-528'
      },
      {
        key: '10',
        number: 10,
        nickname: 'Zheng Shi',
        name: '郑十',
        teacherNumber: '20191529',
        landline: '28861529',
        telephone: '15315201529',
        office: '办公楼A-529'
      },
      {
        key: '11',
        number: 11,
        nickname: 'Qiao Liuyi',
        name: '乔流逸',
        teacherNumber: '20191530',
        landline: '28861530',
        telephone: '15315201530',
        office: '办公楼A-530'
      },
      {
        key: '12',
        number: 12,
        nickname: 'Hu Chuyao',
        name: '胡初瑶',
        teacherNumber: '20191531',
        landline: '28861531',
        telephone: '15315201531',
        office: '办公楼A-531'
      },
      {
        key: '13',
        number: 13,
        nickname: 'Qiu Yizhi',
        name: '邱逸致',
        teacherNumber: '20191532',
        landline: '28861532',
        telephone: '15315201532',
        office: '办公楼A-532'
      },
      {
        key: '14',
        number: 14,
        nickname: 'Gong Yueshu',
        name: '贡悦书',
        teacherNumber: '20191533',
        landline: '28861533',
        telephone: '15315201533',
        office: '办公楼A-533'
      },
      {
        key: '15',
        number: 15,
        nickname: 'Duan Jiamei',
        name: '段嘉美',
        teacherNumber: '20191534',
        landline: '28861534',
        telephone: '15315201534',
        office: '办公楼A-534'
      },
      {
        key: '16',
        number: 16,
        nickname: 'Wei Yenong',
        name: '蔚叶农',
        teacherNumber: '20191535',
        landline: '28861535',
        telephone: '15315201535',
        office: '办公楼A-535'
      }
    ]

    const showTotal = (total) => <p> 共{total}条&emsp; </p>

    const {isCodeVisible, whoseCode} = this.state
    return (
      <div className={TeacherCss.mainWrapper}>
        <InfoTable columns={columns} data={data} showTotal={showTotal} pageSize={12} />
        
        {/* 重置密码验证码对话框 */}
        <Modal title={`${whoseCode}的重置密码验证码`} maskClosable={false} visible={isCodeVisible} onOk={this.handleOk}
          onCancel={this.handleCancel} centered bodyStyle={{
            display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
          }} footer={<Button key="submit" type="primary" onClick={this.handleOk}>确定</Button>}>
            <p style={{margin: 0}}>重置密码验证码：gnlhazs，有效期至：2022-5-30</p>
        </Modal>
      </div>
    )
  }
}
