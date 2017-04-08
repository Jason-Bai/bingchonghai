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
import history from '../../src/history';
/*
  static propTypes = {
    to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
    onClick: PropTypes.func,
  };
*/

class List extends React.Component {

  static propTypes = {
  };

  render() {
    return (
			<ul className="mdl-list">
				<li className="mdl-list__item mdl-list__item--two-line">
					<span className="mdl-list__item-primary-content">
						<i className="material-icons mdl-list__item-avatar">person</i>
						<span>Bryan Cranston</span>
						<span className="mdl-list__item-sub-title">62 episodes</span>
					</span>
					<span className="mdl-list__item-secondary-content">
					  <span className="mdl-list__item-secondary-info">Actor</span>
					  <span class="mdl-list__item-secondary-action">
					  	<a href="#"><i class="material-icons">star</i></a>
					  </span>
					</span>
				</li>
			</ul>
		)
  }

}

export default List;
