import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
 	return (
    <footer id="footer">
      <Row>
        <Col className="ant-col-xs-22 ant-col-sm-22 ant-col-md-22 ant-col-lg-22" offset={1}>
          <div className="copyright">
            Copyright © 病虫害有限责任公司 2017
          </div>
        </Col>
      </Row>
    </footer>
	)
}

export default Footer;
