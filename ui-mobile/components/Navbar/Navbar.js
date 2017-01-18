/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.  * * This source code is licensed under the MIT license found in the * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import weui from 'weui';
import Link from '../Link';
import s from './styles.css';

class Navbar extends React.Component {

  static propTypes = {
		items: PropTypes.array
  };

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {

    const weuiNavbarHd = s['weui-navbar__hd'],
          weuiNavbarBd = s['weui-navbar__bd'],
          weuiNavbar = weui['weui-navbar'],
          weuiNavbarItem = weui['weui-navbar__item'];


    const { items } = this.props;


    return (
      <div className="bch-navbar">
        <div className={weuiNavbarHd}>
          图文组合列表
        </div>
        <div className={weuiNavbarBd}>
          <div className={weuiNavbar}>
            <div className={weuiNavbarItem}>选项一</div>
            <div className={weuiNavbarItem}>选项二</div>
            <div className={weuiNavbarItem}>选项三</div>
          </div>
        </div>
      </div>
    )
  }

}

export default Navbar;
