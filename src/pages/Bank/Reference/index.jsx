import React, { Component } from 'react'
import { Input, Button, message, Spin, Alert, Card, Image, Select} from 'antd'
import axios from 'axios'
import { nanoid } from 'nanoid'
import ReferenceCss from './index.module.css'
import './image.css'

const { Option } = Select;

export default class Reference extends Component {

  state = { referenceData: []
    // // name：关键词；url：参考题库来源网站；content：爬虫OCR返回结果
    // name: '计算机网络 //样例关键词',
    // url: [
    //   {id: 1, url: 'https://wenku.so.com //样例网址1'},
    //   {id: 2, url: 'https://wenku.so.com //样例网址3'},
    //   {id: 3, url: 'https://wenku.so.com //样例网址3'}
    // ],
    // content: '样例文字',
    // pic: [
    //   {id: 1, tag: '样例图片-第1页第1张', url: 'https://api.sciuridae.xyz/chaoxing/image/Course/networkSecurity.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Course/icecream.png'},
    //   {id: 3, tag: '样例图片-第1页第3张', url: 'https://api.sciuridae.xyz/chaoxing/image/Course/computerNetwork.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Course/icecream.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Home/sampleAvatar.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Exam/ShiFeixuan.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Exam/KeYilin.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Exam/YunHanye.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Exam/QingMengyao.png'},
    //   {id: 2, tag: '样例图片-第1页第2张', url: 'https://api.sciuridae.xyz/chaoxing/image/Exam/WangDanzhen.png'}
    // ]
  , content: '', keyword: '', url: 'www.shangxueba.com', loading: false, haveNumber: false}

  /* 立即搜索和换一批按钮的回调 */
  clickSearch = () => {
    this.setState({loading: true})
    axios.post('https://api.sciuridae.xyz/chaoxing/server/Bank/Reference/referenceData.php', {
      keyword: this.state.keyword,
      url: this.state.url,
      flag: false
    })
    .then(response => {
      let data = response.data
      console.log(data)
      if(data == null || data.length == 0){
        message.success({
          content: '该网站没有相应题目信息，请更换网站查询！',
          style: {marginTop: '8.5vh'}
        })
        this.setState({loading: false})
        return
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

  /* 关键词文本框值发生变化的回调 */
  keywordOnChange = (event) => {
    this.setState({keyword: event.target.value})
  }

  urlOnChange = (value) => {
    this.setState({url: (`${value}`)})  
  }

  render() {
    return (
      <div className={ReferenceCss.mainWrapper}>
        <div className={ReferenceCss.infoWrapper}>
          <div className={ReferenceCss.searchWrapper}>
            <p>请输入搜索课程的关键词</p>
            <Input onChange = {this.keywordOnChange} className={ReferenceCss.searchInput} placeholder="例：计算机网络" onPressEnter={this.clickSearch} />
            <Select defaultValue="www.zhaotiba.com" onChange={this.urlOnChange} >
              <Option value="www.zhaotiba.com">www.zhaotiba.com</Option>
              <Option value="www.zuoyewuyou.com">www.zuoyewuyou.com</Option>
              <Option value="www.wendaku.com">www.wendaku.com</Option>
              <Option value="www.wenkusou.com">www.wenkusou.com</Option>
              <Option value="www.shangxueba.com">www.shangxueba.com</Option>
              <Option value="www.tikuwang.com">www.tikuwang.com</Option>
            </Select>
            <Button onClick={this.clickSearch} id={ReferenceCss.searchButton} shape='round' size='small'> 立即搜索 </Button>
            <Button onClick={this.clickSearch} id={ReferenceCss.changeButton} shape='round' size='small'> 换&nbsp;一&nbsp;批 </Button>
          </div>
          {/* <Tooltip placement="topLeft" title={`参考题库来源网站：${this.state.referenceData.url===undefined ? '暂未搜索' : this.state.referenceData.url}`}>
            <p className={ReferenceCss.whereIsFrom}>{`参考题库来源网站：${this.state.referenceData.url===undefined ? '暂未搜索' : this.state.referenceData.url}`}</p>
          </Tooltip> */}
        </div>
        <div className={ReferenceCss.returnWrapper}>
          <div className={ReferenceCss.leftWrapper}>
            {this.state.loading ? 
              <Spin spinning={this.state.loading} size='large' style={{alignSelf: 'center'}}>
                <Alert style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}
                  message="加载中，请稍后……"
                  description="参考题库通过在线爬虫获取，网络良好时半分钟内将显示结果，感谢您的理解！"
                  type="info" />
              </Spin>
            : this.state.referenceData.map((item, index) => {
                  return <div><p key={nanoid()}>{item.title}</p><br></br></div>
              })
              }
          </div>
          <div className={ReferenceCss.rightWrapper}>
            <Card title="参考题库来源网址" className={ReferenceCss.sourceWrapper} style={{padding: 0}}
              headStyle={{width: '100%', margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}
              bodyStyle={{overflowY: 'auto', paddingTop: '1em', paddingBottom: '1em', width: '100%'}}>
              {/* {this.state.referenceData.url.map((item) => {
                return <p key={nanoid()}>{item.url}</p>
              })} */}
              {this.state.referenceData.map((item, index) => {
                  return <p key={nanoid()}>{item.url}</p>
              })}
            </Card>
            <Card title="素材原图（单击图片可放大）" className={ReferenceCss.pictureWrapper} style={{padding: 0}}
              headStyle={{width: '100%', margin: 0, display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}
              bodyStyle={{overflowY: 'auto', padding: '0 1em 1em 1em', width: '100%', height: '100%',
                display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap'}}>
              <Image.PreviewGroup>
                {/* {this.state.referenceData.pic.map((item, index) => {
                  return (
                    <div key={nanoid()} style={{width: '23%', height: '43%', marginTop: '1em'}}>
                      <Image src={item.url} height={'100%'} />
                    </div>
                  )
                })} */}
                {this.state.referenceData.map((item, index) => {
                  return (
                    <div key={nanoid()} style={{width: '23%', height: '43%', marginTop: '1em'}}>
                      <Image src={item.image} height={'100%'} />
                    </div>
                  )
                })}
                <div style={{width: '23%', height: 0, visibility: 'hidden'}}></div>
                <div style={{width: '23%', height: 0, visibility: 'hidden'}}></div>
                <div style={{width: '23%', height: 0, visibility: 'hidden'}}></div>
                <div style={{width: '23%', height: 0, visibility: 'hidden'}}></div>
              </Image.PreviewGroup>
            </Card>
          </div>
        </div>
      </div>
    )
  }
}
