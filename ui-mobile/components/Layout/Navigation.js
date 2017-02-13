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

class Navigation extends React.Component {

  componentDidMount() {
    window.componentHandler.upgradeElement(this.root);
  }

  componentWillUnmount() {
    window.componentHandler.downgradeElements(this.root);
  }

  render() {
    return (
      <nav className="mdl-navigation" ref={node => (this.root = node)}>
        <Link className="mdl-navigation__link" to="/">首页</Link>
        <Link className="mdl-navigation__link" to="/policy">农业政策</Link>
        <Link className="mdl-navigation__link" to="/category">农业分类</Link>
        <Link className="mdl-navigation__link" to="/news">买卖动态</Link>
        <Link className="mdl-navigation__link" to="/about">关于我们</Link>
      </nav>
    );
  }

}

export default Navigation;
