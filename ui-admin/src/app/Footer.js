import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
 	return (
    <footer id="footer">
      <Row>
        <Col className="ant-col-xs-22 ant-col-sm-22 ant-col-md-22 ant-col-lg-22" offset={1}>
          <div className="copyright">
            Copyright © 内蒙古蓝天新农科技服务有限公司 2017
          </div>
        </Col>
      </Row>
    </footer>
	)
}

export default Footer;
