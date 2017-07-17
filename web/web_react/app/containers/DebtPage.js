import React, {Component, PropTypes} from 'react';
import DebtTopBanner from '../components/debt/DebtTopBanner';
import DebtTabContent from '../components/debt/DebtTabContent';
import FootNav from '../components/common/FootNav';
import '../styles/DebtPage.css';

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
