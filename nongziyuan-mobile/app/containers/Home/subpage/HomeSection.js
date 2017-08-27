import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from 'react-router'
import { getPolicyData, getPriceData } from '../../../fetch/home/home'

import PolicyListComponent from '../../../components/PolicyList'
import PriceListComponent from '../../../components/PriceList'

import './style.less'

class HomeSection extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    this.state = {
      data: [],
      isLoading: false,
    }
  }
  render() {

    let ListComponent, type, listCX;

    if (this.props.type === 'policy') {
      ListComponent = PolicyListComponent;
      type = '政策';
      listCX = 'policy-section';
    } else {
      ListComponent = PriceListComponent;
      type = '价格';
      listCX = 'price-section';
    }

    return (
      <div className={`home-section ${listCX}`}>
        <div className="home-section-header clearfix">
          <h2 className="home-section-title">
            {this.props.title}
            <Link to={this.props.moreLink} className="more">更多{type}</Link>
          </h2>
        </div>
        <div className="home-section-content">
          {
            this.state.data.length ?
            <ListComponent data={this.state.data} />
            : <div className="loading">加载中...</div>
          }
        </div>
        <div className="home-section-footer"></div>
      </div>
    )
  }
  componentDidMount() {
    // 获取首页数据

    this.loadFirstPageData()
  }
  // 获取首页数据
  loadFirstPageData() {
    const cityName = this.props.cityName

    this.setState({
      isLoading: true
    });

    let fetch;

    if (this.props.type === 'policy') {
      fetch = getPolicyData;
    } else if (this.props.type === 'price') {
      fetch = getPriceData;
    }

    const result = fetch(cityName, 0)

    this.resultHandle(result)
  }
  // 处理数据
  resultHandle(result) {
    result.then(res => {
      return res.json()
    }).then(json => {
      const hasMore = json.hasMore
      const data = json.data

      this.setState({
        isLoading: true,
        // 注意，这里讲最新获取的数据，拼接到原数据之后，使用 concat 函数
        data: data
      })
    }).catch(ex => {
      console.log(ex)
      if (__DEV__) {
        console.error(`首页”${this.props.type}“获取数据报错, `, ex.message)
      }
    })
  }
}

export default HomeSection
