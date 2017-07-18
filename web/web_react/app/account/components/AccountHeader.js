import React, {Component, PropTypes} from 'react'
import './styles/AccountPage.css';


class AccountHeader extends Component{



  render() {

    return (
      <div className="header-wrap">
        <div className="base-info-wrap">
            <a className="safety-link" href="../safety">
                <div className="img-wrap">
                    <div className="img-box"><img src="../static/images/f1c373b67a2cdc10ec5f3bc1b302787b.png" role="presentation"/>
                        <p className="vip-level V0"></p>
                    </div>
                </div>
                <div className="info-wrap">
                    <p className="tel">150****5539</p>
                    <p className="tip">成为投之家会员享受更多特权</p>
                </div>
            </a>
            <a className="points-enter" href="../account/points/dailyrewards">每日奖励</a>
        </div>
    </div>
    );
  }
}


export default AccountHeader;
