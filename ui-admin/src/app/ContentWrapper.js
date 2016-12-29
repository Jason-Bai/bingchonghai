import React, { Component } from 'react';
import { Row, Col } from 'antd';

export default class ContentWrapper extends Component {
  render() {
    return (
      <div id="content" className="main-wrapper">
        <Row>
          <Col className="ant-col-xs-22 ant-col-sm-22 ant-col-md-22 ant-col-lg-22" offset={1}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}
