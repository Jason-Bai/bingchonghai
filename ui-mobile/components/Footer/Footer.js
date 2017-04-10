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
import s from './Footer.css';

function Footer() {
  return (
    <footer className={`footer ${s.footer}`}>
      <div className={`weui-footer__text ${s.text}`}>Copyright © 2008-2017 内蒙古蓝天新农科技服务有限公司</div>
    </footer>
  );
}

export default Footer;
