import React, {Component, PropTypes} from 'react'
import './styles/touzhijia_home.css';
import { Carousel } from 'antd';


class HomeBanner extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="home_banner_wrap">
        <Carousel autoplay swipeToSlide autoplaySpeed={4000}>
          <div><div className="banner_item1" ></div></div>
          <div><div className="banner_item2" ></div></div>

        </Carousel>
      </div>
    );
  }
}






export default HomeBanner;
