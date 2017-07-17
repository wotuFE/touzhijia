import React, {Component, PropTypes} from 'react';
import HomeRegister from '../components/home/HomeRegister';
import HomeInvestment from '../components/home/HomeInvestment';
import HomeBanner from '../components/home/HomeBanner';
import HomePlatform from '../components/home/HomePlatform';
import FootNav from '../components/common/FootNav';
import '../styles/touzhijia_home.css';
import { ajax }  from '../components/common/ajaxServer';


import { Button  } from 'antd';


class HomePage extends Component{
  componentDidMount() {
    ajax({
       method: 'get',
       url: 'http://127.0.0.1:7777/touzhijia/home',
       data: {},
       success: function (response){
          console.log(response);
      }
    });
  }



  render() {

    return (
      <div className="home_wrap">
        <div className="download" >
          <i className="icon icon-cross"></i>
          <dl>
            <dt>投之家APP</dt>
            <dd>荣获顶尖风投软银赛富、创东方投资入股</dd>
          </dl>
          <a className="btn_down" href="http://a.app.qq.com/o/simple.jsp?pkgname=com.tzj.debt">立即下载</a>
        </div>
        <HomeRegister/>
        <HomePlatform/>
        <HomeBanner/>
        <HomeInvestment/>
        <FootNav/>
      </div>
    );
  }
}


export default HomePage;
