import React, { Component } from 'react'
import { Input, Button, Tooltip, message, Spin, Alert } from 'antd'
import axios from 'axios'
import ReferenceCss from './index.module.css'

export default class Reference extends Component {

  state = { referenceData:{}, content: '', nameValue: '', loading: false}

  /* 爬虫结果的返回数据 */
  referenceData = {
    // name：关键词；url：参考题库来源网站；content：爬虫OCR返回结果
    "name": "",
    "url": "https://wenku.so.com",
    "content": ""
  }

  clickSearch = () => {
    this.setState({loading: true})
    axios.post('https://api.sciuridae.xyz/server/Bank/Reference/referenceData.php', {
      nameValue: this.state.nameValue
    })
    .then(response => {
      let data = response.data
      while(data.content.indexOf('\\n') >= 0) { 
        data.content = data.content.replace('\\n','\n');
      }
      this.setState({referenceData: data, loading: false})
      message.success({
          content: '搜索成功！',
          style: {marginTop: '8.5vh'}
      })
    })
    .catch(error => {
      console.log(error)
      message.error({
          content: '搜索失败！',
          style: {marginTop: '8.5vh'}
      })
    })
  }

  nameOnChange = (event) => {
    this.setState({nameValue: event.target.value})
  }

  render() {
    return (
      <div className={ReferenceCss.mainWrapper}>
        <div className={ReferenceCss.infoWrapper}>
          <div className={ReferenceCss.searchWrapper}>
            <p>请输入搜索课程的关键词</p>
            <Input onChange = {this.nameOnChange} className={ReferenceCss.searchInput} placeholder="例：计算机网络" onPressEnter={this.clickSearch} />
            <Button onClick={this.clickSearch} id={ReferenceCss.searchButton} shape='round' size='small'> 立即搜索 </Button>
            <Button onClick={this.clickSearch} id={ReferenceCss.changeButton} shape='round' size='small'> 换&nbsp;一&nbsp;批 </Button>
          </div>
          <Tooltip placement="topLeft" title={`参考题库来源网站：${this.state.referenceData.url===undefined ? '暂未搜索' : this.state.referenceData.url}`}>
            <p className={ReferenceCss.whereIsFrom}>{`参考题库来源网站：${this.state.referenceData.url===undefined ? '暂未搜索' : this.state.referenceData.url}`}</p>
          </Tooltip>
        </div>
        <div className={ReferenceCss.detailsWrapper}>
          {this.state.loading ? 
            <Spin spinning={this.state.loading} size='large' style={{alignSelf: 'center'}}>
              <Alert style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                message="加载中，请稍后……"
                description="参考题库通过在线爬虫获取，网络良好时半分钟内将显示结果，感谢您的理解！"
                type="info" />
            </Spin>
          : <p> {this.state.referenceData.content} </p>}
        </div>
      </div>
    )
  }
}
