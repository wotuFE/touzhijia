import React, {Component, PropTypes} from 'react';
import PlatformTopBanner from '../components/PlatformTopBanner';
import PlatformNav from '../components/PlatformNav';
import PlatformTabContent from '../components/PlatformTabContent';
import PlatformBottomBanner from '../components/PlatformBottomBanner';
import FootNav from '../../common/components/FootNav';
import '../components/styles/platformPage.css';

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
