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
import s from './Header.css';

import config from '../../tools/config';

const { title, utl } = config;

class Header extends React.Component {

  componentDidMount() {
    //window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    //window.componentHandler.downgradeElements(this.root);
  }
  render() {
    return (
      <header className={`page__hd ${s.header}`}>
        <Navigation />
      </header>
    )
    return (
      <header className={`mdl-layout__header mdl-layout__header--scroll ${s.header}`} ref={node => (this.root = node)}>
        <div className={`mdl-layout__header-row ${s.row}`}>
          <Link className={`mdl-layout-title ${s.title}`} to="/">{title}</Link>
          <div className="mdl-layout-spacer" />
          <Navigation className={s.navigation} />
        </div>
      </header>
    );
  }

}

export default Header;
