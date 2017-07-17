import React, {Component, PropTypes} from 'react'
import '../../styles/platformPage.css';


class PlatformContentItem extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="platform_item_wrap def-link">
        <div className="def-item">
          <div className="def-title">
            <div><span className="quick-invest-tag"><i>快捷</i></span>
              <img src="../static/images/erongsuo.png" alt="e融所-logo"/>
              <span className="desc">安全评级 A</span>
            </div>
          </div>
          <dl className="def-content">
            <dd><span className="rate"><em>8.00<i className="sub">%</i></em></span><span>历史年化收益</span></dd>
            <dd><span className="period">1<i className="sub">个月</i></span><span>期限</span></dd>
            <dd><span className="left"><em>2.4<i className="sub">万</i></em></span><span>可购份额</span></dd>
          </dl>
        </div>
      </div>
    );
  }
}


export default PlatformContentItem;
