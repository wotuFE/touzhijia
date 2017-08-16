import React, {Component, PropTypes} from 'react';
import HomeRegister from '../components/HomeRegister';
import HomeInvestment from '../components/HomeInvestment';
import HomeBanner from '../components/HomeBanner';
import HomePlatform from '../components/HomePlatform';
import FootNav from '../../common/components/FootNav';
import '../components/styles/touzhijia_home.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';  //引入需要的action *代表引入actions文件夹中的index.js 即被合并的所有action





class HomePage extends Component{
  componentDidMount() {
    const { actions } = this.props;

    actions.getHomeData();
  }



  render() {
    const { HomePageReducer,actions } = this.props;
    const platformRecommend = HomePageReducer.homeDate.platformRecommend
    const debtRecommend = HomePageReducer.homeDate.debtRecommend
    return (
      <div className="home_wrap">
        <div className={HomePageReducer.donwLoadViseble ? 'download' : 'hide'} >
          <i className="icon icon-cross" onClick={() => actions.closeDownLoad()}></i>
          <dl>
            <dt>投之家APP</dt>
            <dd>荣获顶尖风投软银赛富、创东方投资入股</dd>
          </dl>
          <a className="btn_down" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.tzj.debt">立即下载</a>
        </div>
        <HomeRegister/>
        <HomePlatform platformRecommend = {platformRecommend}/>
        <HomeBanner/>
        <HomeInvestment debtRecommend = {debtRecommend}/>
        <FootNav/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    HomePageReducer: state.HomePageReducer,
  };
};

//注入actions actions是import进组件的
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});





export default connect(mapStateToProps,mapDispatchToProps)(HomePage);
