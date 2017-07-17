import React, {Component, PropTypes} from 'react';
import PlatformTopBanner from '../components/platform/PlatformTopBanner';
import PlatformNav from '../components/platform/PlatformNav';
import PlatformTabContent from '../components/platform/PlatformTabContent';
import PlatformBottomBanner from '../components/platform/PlatformBottomBanner';
import FootNav from '../components/common/FootNav';
import '../styles/platformPage.css';

import { Button  } from 'antd';


class PlatformPage extends Component{



  render() {

    return (
        <div className="platform-home">
          <PlatformTopBanner />
          <PlatformNav />
          <PlatformTabContent />
          <PlatformBottomBanner />
          <FootNav/>

        </div>
    );
  }
}


export default PlatformPage;
