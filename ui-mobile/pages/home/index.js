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
import weui from 'weui';
import Layout from '../../components/Layout';
import Grid from '../../components/Grid';
import Navbar from '../../components/Navbar';
import s from './styles.css';
import { title, html } from './index.md';

class HomePage extends React.Component {

  static propTypes = {
    articles: PropTypes.array.isRequired,
  };

  componentDidMount() {
    document.title = title;
  }

  items = [{
    image: 'https://weui.io/images/icon_tabbar.png',
    name: '农作物'
  }, {
    image: 'https://weui.io/images/icon_tabbar.png',
    name: '果树'
  }, {
    image: 'https://weui.io/images/icon_tabbar.png',
    name: '蔬菜'
  }]

  render() {
    // weui-grid
    console.log(weui);

    const weuiGrids = weui['weui-grids'],
          weuiGrid = weui['weui-grid'],
          weuiIcon = weui['weui-grid__icon'],
          weuiLabel = weui['weui-grid__label'];

    return (
      <Layout className={s.content}>
        <h1>Home</h1>
        <Grid items={this.items} />
        <Navbar />
      </Layout>
    )

    return (
      <Layout className={s.content}>
        <div dangerouslySetInnerHTML={{ __html: html }} />
        <h4>Articles</h4>
        <ul>
          {this.props.articles.map((article, i) =>
            <li key={i}><a href={article.url}>{article.title}</a> by {article.author}</li>
          )}
        </ul>
        <p>
          <br /><br />
        </p>
      </Layout>
    );
  }

}

export default HomePage;
