/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import cx from 'classnames';
import weui from 'weui';
import Link from '../Link';

class Grid extends React.Component {

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
    const weuiGrids = weui['weui-grids'],
          weuiGrid = weui['weui-grid'],
          weuiIcon = weui['weui-grid__icon'],
          weuiLabel = weui['weui-grid__label'];

    const { items } = this.props;

    const grids = items.map((item) => {
      return (
        <div key={item.name} className={weuiGrid}>
          <div className={weuiIcon}>
            <img src={item.image} />
          </div>
          <p className={weuiLabel}>{item.name}</p>
        </div>
      );
    });


    return (
      <div className="bch-grids">
        <div className={weuiGrids}>
            { grids }
        </div>
      </div>
    )
  }

}

export default Grid;
