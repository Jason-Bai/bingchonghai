import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { hashHistory } from 'react-router'

import hotCities from './hot_cities.json'
import letterCities from './letter_cities.json'

import Header from '../../components/Header'
import CurrentCity from '../../components/CurrentCity'
import CityList from '../../components/CityList'

import * as userInfoActionsFromOtherFile from '../../actions/userinfo'

import { CITYNAME } from '../../config/localStoreKey'
import localStore from '../../util/localStore'

class City extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }

    render() {
        const _letterCities = this.getLetterCities()
        return (
            <div>
                <Header title="选择城市"/>
                <CurrentCity cityName={this.props.userinfo.cityName}/>
                <CityList
                  className="hot-list"
                  title={"热门城市"}
                  items={hotCities}
                  changeFn={this.changeCity.bind(this)}
                />
                <CityList
                  className="letter-list"
                  title={"更多城市"}
                  items={_letterCities}
                  changeFn={this.changeCity.bind(this)}
                />
                {_letterCities.map(({key, title}, index) => <CityList key={index} className="letter-city-list" title={title} items={letterCities[key]} changeFn={this.changeCity.bind(this)}
                />
                )}
            </div>
        )
    }

    changeCity(newCity) {
        if (newCity == null) {
            return
        }
        // 修改 redux
        const userinfo = this.props.userinfo
        userinfo.cityName = newCity
        this.props.userInfoActions.update(userinfo)

        // 修改 cookie
        localStore.setItem(CITYNAME, newCity)

        // 跳转页面
        hashHistory.push('/')
    }

    getLetterCities() {
      const letters = Object.keys(letterCities).map((letter) => {
        const item = {
          key: letter,
          title: letter,
          anchor: true
        }
        return item
      })
      return letters
    }

}

// -------------------redux react 绑定--------------------

function mapStateToProps(state) {
    return {
        userinfo: state.userinfo
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch)
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(City)
