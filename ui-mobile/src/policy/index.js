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
import Layout from '../../components/Layout';
import s from './styles.css';

const title = '农业政策';

class PolicyPage extends React.Component {

  componentDidMount() {
    document.title = title;
  }

  render() {
    const { policies } = this.props;
    return (
      <Layout className={s.content}>
        <h4>{title}</h4>
        <div className="weui-cells">
          {policies.map((policy, index) => {
            return (
              <div key={index} className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">{policy.type}</div>
                <div className="weui-cell__bd">{policy.title}</div>
                <div className="weui-cell__ft">{policy.visit}</div>
              </div>
            )
          })}
        </div>
      </Layout>
    );
  }

}

export default PolicyPage;
