import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import HomeHeader from '../../components/HomeHeader'
import Ad from './subpage/Ad'
import HomeSection from './subpage/HomeSection'
import Category from './subpage/Category'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.props.userinfo.cityName}/>
                <Ad/>
                <HomeSection
                  title={'农品价格'}
                  moreLink={'#'}
                  type={'price'}
                  cityName={this.props.userinfo.cityName}
                />
                <HomeSection
                  title={'农业政策'}
                  moreLink={'#'}
                  type={'policy'}
                  cityName={this.props.userinfo.cityName}
                />
                <Category
                  title={'农品分类'}
                  moreLink={'#'}
                  data={[]}
                />
                <List cityName={this.props.userinfo.cityName} />
            </div>
        )
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
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
