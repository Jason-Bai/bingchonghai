import React, { Component } from 'react';
import { Link } from 'react-router';
import { Row, Col, Input, Button } from 'antd';

const Search = Input.Search;

export default class ActionBar extends Component {
  render() {
    const { add, search } = this.props;
    return (
      <div className="action-bar">
        <Row type="flex">
          <Col span={4} order={1}>
            <Search {...search} />
          </Col>
          <Col span={2} order={2} offset={18}>
            <Link to={add.to}>
              <Button type="primary" icon="plus" style={{width: '100%'}}>{add.buttonText}</Button>
            </Link>
          </Col>
        </Row>
      </div>
    )
  }
}
