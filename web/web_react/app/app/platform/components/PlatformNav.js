import React, {Component, PropTypes} from 'react'
import './styles/platformPage.css';



class PlatformNav extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="platform_nav_wrap platform-nav">
          <div className="am-flexbox am-flexbox-align-middle">
            <div className="am-flexbox-item">
              <a className="nav-item" href="../platform/bids"><i className="icon icon-bids"></i>
                <div className="nav-desc">选标</div>
              </a>
            </div>
            <div className="am-flexbox-item">
              <a className="nav-item" href="../platform/platforms"><i className="icon icon-plats"></i>
                <div className="nav-desc">选平台</div>
              </a>
            </div>
            <div className="am-flexbox-item">
              <a className="nav-item" href="../platform/newbie"><i className="icon icon-newbies"></i>
                <div className="nav-desc">新手</div>
              </a>
            </div>
            <div className="am-flexbox-item">
              <a className="nav-item" href="../platform/activities"><i className="icon icon-activity"></i>
                <div className="nav-desc">活动</div>
              </a>
            </div>
          </div>
          <div className="nav-divider"></div>
      </div>
    );
  }
}






export default PlatformNav;
