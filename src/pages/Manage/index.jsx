import React, { Component } from 'react'
import { Button, Tabs, Modal, message, Form, Input, Select, Upload } from 'antd'
import { UploadOutlined } from '@ant-design/icons'
import { MyIcon } from '../../assets/iconfont'
import Teacher from './Teacher'
import Student from './Student'
import Character from './Character'
import Handle from './Handle'
import Notice from './Notice'
import './index.css'

const { TabPane } = Tabs
const { Option } = Select

/* 创建新角色对话框 */
const CreateRoleForm = ({ visible, onOk, onCancel }) => {
  const [roleForm] = Form.useForm()
  return (
    <Modal visible={visible} title="创建新角色" okText="确定" cancelText="取消" onCancel={onCancel} centered bodyStyle={{
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}
      onOk={() => {
        roleForm.validateFields()
          .then((values) => {
            roleForm.resetFields()
            onOk()
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
      }}
    >
      <Form form={roleForm} name="newRoleInfo" style={{width: '80%'}} labelCol={{ span: 8 }} autoComplete="true">

        <Form.Item label="角色名称" name="name" required
          rules={[{ required: true, message: '必填' }]}
          ><Input />
        </Form.Item>
        
        <Form.Item label="权限模块" name="jurisdiction" required
          rules={[{ required: true, message: '必填' }]}
          ><Select mode="multiple" allowClear style={{width: '100%'}} placeholder="可多选具有权限的模块">
            <Option value='course'>课程</Option>
            <Option value='bank'>题库</Option>
            <Option value='arrange'>考务安排</Option>
            <Option value='build'>考试组卷</Option>
            <Option value='mark'>阅卷</Option>
            <Option value='statistics'>统计</Option>
            <Option value='manage'>管理</Option>
          </Select>
        </Form.Item>
      </Form>
    </Modal>
  )
}

/* 创建新用户对话框 */
const CreateUserForm = ({ visible, onOk, onCancel, showModal }) => {
  const [userForm] = Form.useForm()
  return (
    <Modal visible={visible} title="创建新用户" okText="确定" cancelText="取消" onCancel={onCancel} centered bodyStyle={{
      display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center'}}
      onOk={() => {
        userForm.validateFields()
          .then((values) => {
            userForm.resetFields()
            onOk()
          })
          .catch((info) => {
            console.log('Validate Failed:', info);
          })
      }}
    >
      <Form form={userForm} name="newUserInfo" style={{width: '80%'}} labelCol={{ span: 8 }} autoComplete="true" >

        <Form.Item label="用&nbsp;&nbsp;户&nbsp;&nbsp;名" name="registerUsername" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input autoComplete="off" /></Form.Item>

        <Form.Item label="密&emsp;&emsp;码" name="registerPassword" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input type="password" autoComplete="new-password" /></Form.Item>

        <Form.Item label="确认密码" name="verify" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input type="password" autoComplete="off" /></Form.Item>

        <Form.Item label="姓&emsp;&emsp;名" name="name" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input autoComplete="off" /></Form.Item>

        <Form.Item label="身份证号" name="idCradNumber" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input autoComplete="off" /></Form.Item>

        <Form.Item label="手&emsp;&emsp;机" name="mobile" required style={{alignSelf: 'flex-start', width: '100%'}}
          rules={[{ required: true, message: '必填' }]}
        ><Input autoComplete="off" /></Form.Item>

        <Form.Item label="角&emsp;&emsp;色" name="role" required
          rules={[{ required: true, message: '必填' }]}
          ><Select mode="multiple" allowClear style={{width: '100%'}} placeholder="可多选所属的角色">
            <Option value='course'>任课教师</Option>
            <Option value='build'>组卷员</Option>
            <Option value='mark'>阅卷员</Option>
            <Option value='manage'>管理员</Option>
          </Select>
        </Form.Item>

        <Form.Item label="批量导入" name="import"
          ><Button onClick={showModal}> &nbsp;Go To Now <MyIcon type='icon-fangzuobishezhi' /> </Button>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default class Manage extends Component {

  state = { searchText: '', searchedColumn: '', isRoleVisible: false, isUserVisible: false, isImportVisible: false }

  onCreate = (values) => {
    console.log('Received values of form: ', values)
  }
  /* 显示对话框 */
  showModal = (type) => {
    if(type === 'role') this.setState({isRoleVisible: true})
    else if(type === 'user') this.setState({isUserVisible: true})
    else if(type === 'import') {
      this.setState({isUserVisible: false})
      this.setState({isImportVisible: true})
    }
  }
  /* 点击对话框确定按钮 */
  handleOk = (type) => {
    if(type === 'role') {
      this.setState({isRoleVisible: false})
      message.success({
          content: '创建新角色成功！',
          style: {marginTop: '8.5vh'}
      })
    }
    else if(type === 'user') {
      this.setState({isUserVisible: false})
      message.success({
          content: '创建新用户成功！',
          style: {marginTop: '8.5vh'}
      })
    }
    else if(type === 'import') {
      this.setState({isImportVisible: false})
      message.success({
          content: '批量导入成功！',
          style: {marginTop: '8.5vh'}
      })
    }
  }
  /* 点击对话框取消按钮 */
  handleCancel = (type) => {
    if(type === 'role') this.setState({isRoleVisible: false})
    else if(type === 'user') this.setState({isUserVisible: false})
    else if(type === 'import') this.setState({isImportVisible: false})
  }

  render() {
    const {isRoleVisible, isUserVisible, isImportVisible} = this.state

    return (
      <div className="manageContainer">
        <div className='createButtonWrapper'>
          <Button id='createNewCharacter' shape='round' size='middle' onClick={() => this.showModal('role')}> 创建新角色 </Button>
          <Button id='createNewUser' shape='round' size='middle' onClick={() => this.showModal('user')}> 创建新用户 </Button>
        </div>
        <Tabs type="card">
          <TabPane tab="教师用户" key="1">
              <Teacher />
          </TabPane>
          <TabPane tab="学生用户" key="2">
              <Student />
          </TabPane>
          <TabPane tab="角色管理" key="3">
              <Character />
          </TabPane>
          <TabPane tab="操作审批" key="4">
              <Handle />
          </TabPane>
          <TabPane tab="系统公告" key="5">
              <Notice />
          </TabPane>
        </Tabs>
        
        {/* 创建新角色对话框 */}
        <CreateRoleForm visible={isRoleVisible}
          onOk={() => this.handleOk('role')} onCancel={() => this.handleCancel('role')}/>

        {/* 创建新用户对话框 */}
        <CreateUserForm visible={isUserVisible}
          onOk={() => this.handleOk('user')} onCancel={() => this.handleCancel('user')} showModal={() => this.showModal('import')}/>
      
        {/* 批量导入对话框 */}
        <Modal title="批量导入" maskClosable={false} visible={isImportVisible} onOk={() => this.handleOk('import')} okText='开始导入'
            onCancel={() => this.handleCancel('import')} cancelText='取消' centered bodyStyle={{
                display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start'
            }}>
              <p>您可以通过 Word 或 Excel 文件批量导入用户信息，请按照我们提供的模板格式进行导入，请点击链接下载模板
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
