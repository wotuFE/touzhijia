import React, {Component, PropTypes} from 'react'
import './styles/AccountPage.css';


class AccountExtraInfo extends Component{



  render() {

    return (
        <div className="extra-info-wrap">
            <div className="item-wrap">
                <div className="extra-icon-wrap"><i className="icon icon-font icon-point"></i></div>
                <div className="item-inner">
                    <p className="title">积分账户</p>
                    <p className="info"><span className="point"><span className="inner">0.00</span>积分</span>
                    </p>
                </div>
            </div>
            <div className="item-wrap">
                <div className="extra-icon-wrap"><i className="icon icon-font icon-vip"></i></div>
                <div className="item-inner">
                    <p className="title">升级VIP</p>
                    <p className="info">享受VIP专享特权</p>
                </div>
            </div>
            <div className="item-wrap">
                <div className="extra-icon-wrap"><i className="icon icon-font icon-coupon"></i></div>
                <div className="item-inner">
                    <p className="title">理财券</p>
                    <p className="info">暂无可用券</p>
                </div>
            </div>
            <div className="item-wrap">
                <div className="extra-icon-wrap"><i className="icon icon-font icon-calendar"></i></div>
                <div className="item-inner">
                    <p className="title">回款日历</p>
                    <p className="info">
                        <font color="#999999">未来30天暂无回款</font>
                    </p>
                </div>
            </div>
        </div>
    );
  }
}


export default AccountExtraInfo;
