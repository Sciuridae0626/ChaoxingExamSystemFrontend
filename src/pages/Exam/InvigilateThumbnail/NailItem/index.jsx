import React, { Component } from 'react'
import { Checkbox, Button } from 'antd'
import ThumbnailItemCss from './index.module.css'

export default class ThumbnailItem extends Component {
  render() {

    const {pic, name, number, snap, cutting, authentication, tag} = this.props
    
    return (
      <div className={ThumbnailItemCss.itemWrapper}>
        <Checkbox.Group>
          <Checkbox value={number}></Checkbox>
        </Checkbox.Group>
        <div className={ThumbnailItemCss.infoCard}>
          {/* 标签 */}{
            tag === 1 ? <div className={ThumbnailItemCss.tag} style={{backgroundColor: '#3B90FF'}}>考试中</div>
            : tag === 2 ? <div className={ThumbnailItemCss.tag} style={{backgroundColor: '#07C160'}}>已交卷</div>
            : tag === 3 ? <div className={ThumbnailItemCss.tag} style={{backgroundColor: '#181818'}}>缺考</div>
            : tag === 4 ? <div className={ThumbnailItemCss.tag} style={{backgroundColor: '#FF4D4F'}}>人脸识别失败</div>
            : ''}
          <img src={pic} alt="照片" />
          {/* 信息卡片中文本信息 */}
          <div className={ThumbnailItemCss.textWrapper}>
            <p style={{marginBottom: '2%', fontWeight: 'bold'}}>{name}</p>
            <p style={{marginBottom: '2%'}}>学号：{number}</p>
            <p style={{marginBottom: '5%'}}>{snap}次抓拍 | {cutting}次切屏 | {authentication}次认证</p>
            {tag === 4 ? <Button size='small' type='primary' shape='round'>设为通过人脸</Button>
              : <Button size='small' type='dashed' shape='round' danger>设为未通过人脸</Button>}
          </div>
        </div>
      </div>
    )
  }
}
