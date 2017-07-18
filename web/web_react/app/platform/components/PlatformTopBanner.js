import React, {Component, PropTypes} from 'react'
import './styles/platformPage.css';
import { Carousel } from 'antd';


class PlatformTopBanner extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="platform_top_banner_wrap banner">
          <Carousel autoplay swipeToSlide autoplaySpeed={8000}>
              <div className="platform_top_banner" >
                <div className="platform_top_banner_item1  banner-img"></div>
                <div className="banner-desc">
                  <div className="main-desc">优选平台</div>
                  <div className="sub-desc">平台业务说明与安全保障 &gt;</div>
                </div>
              </div>
              <div className="platform_top_banner" >
                <div className="platform_top_banner_item2 "></div>
                <div className="banner-desc">
                  <div className="main-desc">优选平台</div>
                  <div className="sub-desc">平台业务说明与安全保障 &gt;</div>
                </div>
              </div>
          </Carousel>

      </div>
    );
  }
}






export default PlatformTopBanner;
