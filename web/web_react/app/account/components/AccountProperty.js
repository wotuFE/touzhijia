import React, {Component, PropTypes} from 'react'
import './styles/AccountPage.css';


class AccountProperty extends Component{



  render() {

    return (
     <div className="my-property-wrap">
        <div className="title">
          <span className="inner">我的资产</span>
          <span className="sub-inner">数据同步于：2017-07-07 16:38:15</span>
          <button><i className="icon icon-font icon-refresh_circle"></i></button>
        </div>
        <div className="info">
            <div className="info-block">
              <div className="info-block-inner">
                <p className="info-title">总资产</p>
                <p className="info-data">0.00</p>
              </div>
            </div>
            <div className="info-block">
              <div className="info-block-inner">
                <p className="info-title">可用余额</p>
                <p className="info-data">0.00</p>
              </div>
            </div>
        </div>
        <div className="property-list-wrap">
          <div className="property-list-title">
            <span className="distribution grid">投资分布</span>
            <span className="property grid">资产</span>
            <span className="balance grid">可用余额</span>
          </div>
          <ul className="property-list">
            <li className="property-item">
              <span className="distribution grid">
                <span className="distribution-inner">直投理财</span>
                </span><span className="property grid">0.00</span>
                <span className="balance grid">0.00</span>
                <i className="icon icon-font icon-arrow-right"></i>
            </li>
            <li className="property-item">
              <span className="distribution grid">
                <span className="convenience-tag-inner">
                  <span className="convenience-tag-text">快捷</span>
                </span>
                <img src="../static/images/rxdai.png" role="presentation" />
              </span>
              <span className="property grid">0.00</span>
              <span className="balance grid">0.00</span>
              <i className="icon icon-font icon-arrow-right"></i>
            </li>
            <li className="property-item">
              <span className="distribution grid">
                <span className="convenience-tag-inner">
                  <span className="convenience-tag-text">快捷</span>
                </span>
                <img src="../static/images/zhubaodai.png" role="presentation" />
              </span>
              <span className="property grid">0.00</span>
              <span className="balance grid">0.00</span>
              <i className="icon icon-font icon-arrow-right"></i>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}


export default AccountProperty;
