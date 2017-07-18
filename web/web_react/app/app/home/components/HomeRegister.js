import React, {Component, PropTypes} from 'react'
import './styles/touzhijia_home.css';



class HomeRegister extends Component{



  render() {

    return (
        <div className="register-header-wrap">
           <div className="tzj-info">
                <a className="guide" href="">
                    <div className="tzj-info-inner">
                        <p className="tzj-info-number">171亿2千万</p>
                        <p>撮合总成交量(元)</p>
                    </div>
                    <div className="character">
                        <div className="character-item">
                            <div className="img-box qualification"></div>
                            <div className="text">
                                <span>中国互联网金融协会首批会员单位</span>
                            </div>
                        </div>
                        <div className="character-item">
                            <div className="img-box invest"></div>
                            <div className="text">
                                <span>创东方、赛富亚洲亿元投资</span>
                            </div>
                        </div>
                        <div className="character-item">
                            <div className="img-box redeem"></div>
                            <div className="text">
                                <span>1500万专项赎回基金</span>
                            </div>
                        </div>
                    </div>
                    <div className="learn-more">
                        <i className="icon icon-font icon-arrow-right"></i>
                    </div>
                </a>
            </div>
            <div className="register-operation-wrap">
                <div className="register-title-wrap">
                    <p>新手福利，100元话费/京东卡</p>
                    <p>
                        <font color="#ff8a10">积分商城各种好礼等您来领</font>
                    </p>
                </div>
                <div className="btn-bar">
                    <a className="operation-btn" href="">领取100元</a>
                    <a className="check" href="">
                        <i className="icon icon-font icon-arrow-right"></i>
                    </a>
                </div>
            </div>
        </div>
    );
  }
}






export default HomeRegister;
