import React, { Component } from 'react'
import { Input, Tooltip, InputNumber  } from 'antd'
import { MyIcon } from '../../../../../assets/iconfont.js';
import BigQCss from './index.module.css'

export default class BigQ extends Component {

    /* 转换大题题号序号为中文 */
    countBigQ = (num) => {
        if(num === 1) return '一'
        else if(num === 2) return '二'
        else if(num === 3) return '三'
        else if(num === 4) return '四'
        else if(num === 5) return '五'
        else if(num === 6) return '六'
        else if(num === 7) return '七'
        else if(num === 8) return '八'
        else if(num === 9) return '九'
        else if(num === 10) return '十'
        else return 'n*'
    }

    /* 执行删除大题的回调 */
	handleDelete = (id) => {
		if(window.confirm(`确定删除第${this.countBigQ(this.props.index)}大题吗？`)){
			this.props.deleteBigQ(id)
		}
	}

    /* 执行保存大题的回调 */
	handleSave = (id) => {
        let title = this.title.input.defaultValue;
        let number = this.number.value;
        let grade = this.grade.value;
        this.props.saveBigQ(id, title, number, grade)
	}

    /* 执行增加小题的回调 */
	handleAdd = (id) => {
        this.props.addSmallQ(id)
	}

    /* 执行结束增加小题的回调 */
	handleOver = (id) => {
        this.props.overSmallQ(id)
	}

    render() {
        return (
            <div className={this.props.isSave ? BigQCss.mainWrapper : BigQCss.mainWrapperShadow}>
                {/* 大题题干行 */}
                <div className={BigQCss.lineWrapper} style={{color: '#7B7B7B', fontWeight: 'bold', justifyContent: 'space-between'}}>
                    {this.countBigQ(this.props.index)}.
                    {this.props.isSave ? <nobr>{this.props.title}</nobr>
                        : <Input ref={ c => this.title = c } placeholder="请输入大题名称" bordered={false} style={{width: 'auto'}} />}
                    <div className={BigQCss.lineWrapper} style={{width: '45%'}}>
                        （共&nbsp;{this.props.isSave ? <nobr>{this.props.number}</nobr> 
                        : <InputNumber ref={ c => this.number = c } min={1} max={100} />}&nbsp;题<span>&emsp;</span>
                        共&nbsp;{this.props.isSave ? <nobr>{this.props.grade}</nobr> 
                        : <InputNumber ref={ c => this.grade = c } min={1} max={100} />}&nbsp;分）
                    </div>
                    {/* 右上角按钮组 */}
                    <div className={BigQCss.lineWrapper} style={{ width: '30%', justifyContent: 'flex-end' }}>
                        {this.props.index > 1 ? <Tooltip title="上移">
                            <MyIcon style={{ marginRight: '5%', cursor: 'pointer' }} type='icon-shangyi' /></Tooltip>
                         : ''}
                        <Tooltip title="下移"><MyIcon style={{ marginRight: '5%', cursor: 'pointer' }} type='icon-xiayi' /></Tooltip>
                        <Tooltip title="删除"><MyIcon style={{ cursor: 'pointer' }} type='icon-shanchu'
                            onClick={() => {this.handleDelete(this.props.id)}} /></Tooltip>
                        {!this.props.isSave ? <Tooltip title="保存"><MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-baocun'
                            onClick={() => {this.handleSave(this.props.id)}} /></Tooltip>
                            : (this.props.isOverSQ ? <Tooltip title="增加小题"><MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-jiaxiaoti'
                            onClick={() => {this.handleAdd(this.props.id)}} /></Tooltip>
                            : <Tooltip title="结束增加"><MyIcon style={{ marginLeft: '5%', cursor: 'pointer' }} type='icon-jieshuzengjia'
                            onClick={() => {this.handleOver(this.props.id)}} /></Tooltip>)}
                    </div>
                </div>
            </div>
        )
    }
}
