import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import { getCategory } from '../../../fetch/home/home'

import './style.less'

class Category extends React.Component {
  /*
    轮播图需要用到一个第三方插件 https://github.com/voronianski/react-swipe 根据其文档要求需要安装插件，
    即`npm install react swipe-js-iso react-swipe --save`，这个插件的日常使用我已经验证过，大家可放心使用
    */
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      page: 1,
      data: []
    };
  }

  componentDidMount() {
    const result = getCategory(this.state.page);
    result.then(res => {
      return res.json();
    }).then(json => {
      const { data } = json;
      if (data.length) {
        this.setState({
          data,
        });
      }
    }).catch(ex => {
      if (__DEV__) {
        console.error('首页分类模块获取数据报错，', ex.message);
      }
    });
  }

  render() {
    const { data } = this.state;
    if (!data.length) {
      return <div>{/* 加载中... */}</div>
    }

    return (
      <div className="home-category">
        <div className="home-category-header clearfix">
          <h2 className="home-category-title">
            {this.props.title}
            <Link to={this.props.moreLink} className="more">更多分类</Link>
          </h2>
        </div>
        <div className="home-category-content">
          <ul>
            {data.map((item, index) => {
              return (
                <li key={index} className="category-item">
                  <Link to={`/categories/${item.id}`}>
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="home-section-footer"></div>
      </div>
    )
  }
}

export default Category
