import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import FormModal from '../FormModal';

const Search = Input.Search;

export default class ActionBar extends Component {
  render() {
    const { add } = this.props;
    return (
      <div className="action-bar">
        <Row type="flex">
          <Col span={4} order={1}>
            <Search placeholder="请输入名称搜索" onSearch={(v) => console.log(v)}/>
          </Col>
          <Col span={2} order={2} offset={18}>
            <FormModal {...add} />
          </Col>
        </Row>
      </div>
    )
  }
}
