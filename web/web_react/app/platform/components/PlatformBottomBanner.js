import React, {Component, PropTypes} from 'react'
import './styles/platformPage.css';
import { Carousel } from 'antd';


class PlatformBottomBanner extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="platform_bottom_banner_wrap bottom-banner">
        <Carousel autoplay swipeToSlide autoplaySpeed={4000}>
          <div><div className="platform_bottom_banner_item1" ></div></div>
          <div><div className="platform_bottom_banner_item2" ></div></div>
        </Carousel>
      </div>
    );
  }
}






export default PlatformBottomBanner;
