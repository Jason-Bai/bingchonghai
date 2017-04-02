/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Link from '../Link';

function Footer() {
  return (
    <footer className="mdl-mini-footer">
      <div className="mdl-mini-footer__left-section">
        <div className="mdl-logo">© 内蒙古蓝天新农科技服务有限公司</div>
      </div>
      <div className="mdl-mini-footer__right-section">
        <ul className="mdl-mini-footer__link-list">
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="#" role="button" title="link1">link1</a>
          </li>
          <li className="mdl-mini-footer--social-btn" style={{ backgroundColor: 'transparent' }}>
            <a href="#" role="button" title="link2">link2</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
