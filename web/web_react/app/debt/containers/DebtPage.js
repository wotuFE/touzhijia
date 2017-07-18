import React, {Component, PropTypes} from 'react';
import DebtTopBanner from '../components/DebtTopBanner';
import DebtTabContent from '../components/DebtTabContent';
import FootNav from '../../common/components/FootNav';
import '../components/styles/DebtPage.css';

import { Button  } from 'antd';


class DebtPage extends Component{



  render() {

    return (
        <div className="debt-home platform-home">
          <DebtTopBanner />
          <DebtTabContent />
          <FootNav/>
        </div>
    );
  }
}


export default DebtPage;
