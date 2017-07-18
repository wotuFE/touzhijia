import React, {Component, PropTypes} from 'react';
import AccountHeader from '../components/AccountHeader';
import AccountExtraInfo from '../components/AccountExtraInfo';
import AccountOperation from '../components/AccountOperation';
import AccountLibra from '../components/AccountLibra';
import AccountProperty from '../components/AccountProperty';
import DebtTabContent from '../../debt/components/DebtTabContent';
import FootNav from '../../common/components/FootNav';
import '../components/styles/AccountPage.css';


class AccountPage extends Component{



  render() {

    return (
        <div className="debt-home account-home">
          <AccountHeader />
          <AccountExtraInfo />
          <AccountOperation />
          <AccountLibra />
          <AccountProperty />
          <FootNav />
        </div>
    );
  }
}


export default AccountPage;
