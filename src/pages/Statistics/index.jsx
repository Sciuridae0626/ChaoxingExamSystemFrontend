import React, { Component } from 'react';
import { Tabs } from 'antd';
import Teach from './Teach'
import Build from './Build';
import Invigilate from './Invigilate'
import './index.css';

const { TabPane } = Tabs;
export default class Statistics extends Component {
  render() {
    return (
      <div className="statisticsContainer">
        <img id='formula' src='https://api.sciuridae.xyz/chaoxing/image/Statistics/formula.png' alt="计算公式" style={{height: '20px'}} />
        <Tabs type="card">
          <TabPane tab="任课成绩" key="1">
              <Teach />
          </TabPane>
          <TabPane tab="组卷评判" key="2">
              <Build />
          </TabPane>
          <TabPane tab="监考数据" key="3">
              <Invigilate />
          </TabPane>
        </Tabs>
      </div>
  )
  }
}
