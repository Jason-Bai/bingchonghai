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
import Navigation from './Navigation';
import Link from '../Link';
import s from './Drawer.css';

import config from '../../tools/config';

const { title, utl } = config;

class Header extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }
  render() {
    return (
      <div className={`mdl-layout__drawer ${s.drawer}`} ref={node => (this.root = node)}>
        <Link className={`mdl-layout-title ${s.title}`} to="/">{title}</Link>
        <Navigation />
      </div>
    );
  }

}

export default Header;
