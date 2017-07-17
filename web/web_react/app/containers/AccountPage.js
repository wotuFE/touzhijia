import React, {Component, PropTypes} from 'react';
import AccountHeader from '../components/account/AccountHeader';
import AccountExtraInfo from '../components/account/AccountExtraInfo';
import AccountOperation from '../components/account/AccountOperation';
import AccountLibra from '../components/account/AccountLibra';
import AccountProperty from '../components/account/AccountProperty';
import DebtTabContent from '../components/debt/DebtTabContent';
import FootNav from '../components/common/FootNav';
import '../styles/AccountPage.css';


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
