import React, { Component } from 'react';
import { Table } from 'antd';
import './index.css';

export default class InfoTable extends Component {

  render() {

    const {columns, data, rowSelection, showTotal, pageSize, noneMarginBottom} = this.props
    var pagination

    noneMarginBottom ? pagination = {
      showTotal: showTotal,
      total: data.length,
      pageSize: pageSize,
      showQuickJumper: true,
      showSizeChanger: false,
      position: ['bottomCenter'],
      style: {marginTop: '1.5%', marginBottom: 0}
    } : pagination = {
      showTotal: showTotal,
      total: data.length,
      pageSize: pageSize,
      showQuickJumper: true,
      showSizeChanger: false,
      position: ['bottomCenter'],
      style: {marginTop: '1.5%'}
    }

    const rowClassName = (record, index) => {
      let className = index % 2 ? 'even_row' : 'odd_row';
      return className
    }

    return <Table style={{width: '100%'}} bordered columns={columns} dataSource={data}
      pagination={pagination} rowClassName={rowClassName} rowSelection={rowSelection} />;
  }
}