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
import Layout from '../../components/Layout'; import Navbar from '../../components/Navbar';
import s from './styles.css';

const title = '农业政策';

class PolicyPage extends React.Component {

  state = {
    category: 'all'
  }

  items = [{
    key: 'all',
    title: '全部'
  }, {
    key: 'c1',
    title: '类别1'
  }, {
    key: 'c2',
    title: '类别2'
  }, {
    key: 'c3',
    title: '类别3'
  }]

  componentDidMount() {
    document.title = title;
  }

  handleChanged = (category) => {
    this.setState({
      category
    })
  }

  render() {
    return (
      <Layout className={s.content}>
        <Navbar
          defaultValue={'all'}
          items={this.items}
          onChange={this.handleChanged}
        />
        {this.state.category}
      </Layout>
    );
  }

}

export default PolicyPage;
