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
import Link from '../../components/Link';
import ButtonGroup from '../../components/ButtonGroup';
import s from './styles.css';

const title = '农业政策';

class PolicyPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      current: 1,
      pageSize: 10,
      policies: this.props.policies,
      type: 'all',
    }
  }

  componentDidMount() {
    document.title = title;
  }

  options = [{
    id: 'all',
    label: 'All',
  }, {
    id: 'subsidy',
    label: 'subsidy',
  }, {
    id: 'notice',
    label: 'notice',
  }]

  onChange = (type) => {
    const current = 1, pageSize = 10;
    let url
    if (type == 'all') {
      url = `/api_v1/policys?sort=-id&startIndex=${current - 1}&maxResults=${pageSize}`
    } else {
      url = `/api_v1/policys?sort=-id&type=${type}&startIndex=${current - 1}&maxResults=${pageSize}`
    }
    fetch(url, { method: 'GET' }).then((resp) => {
      const policies = resp.json().then((policies) => {
        this.setState({
          current,
          pageSize,
          policies,
          type
        })
      })
    });
  }

  render() {
    const { policies } = this.state;

    return (
      <Layout className={s.content}>
        <ButtonGroup
          options={this.options}
          onChange={this.onChange}
        />
        <div className="weui-cells">
          {policies.map((policy, index) => {
            return (
              <Link to={`/policies/${policy.id}`} key={index} className="weui-cell weui-cell_access">
                <div className="weui-cell__hd">
                  <img className={`${s.policy_type}`} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=" alt="类别"/>
                </div>
                <div className="weui-cell__bd">
                  <p>{policy.title}</p>
                </div>
                <div className="weui-cell__ft">{policy.visit}</div>
              </Link>
            )
          })}
        </div>
      </Layout>
    );
  }

}

export default PolicyPage;
