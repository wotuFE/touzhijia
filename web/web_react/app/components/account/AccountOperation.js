import React, {Component, PropTypes} from 'react'
import '../../styles/AccountPage.css';


class AccountOperation extends Component{



  render() {

    return (
        <div className="operation-wrap">
            <div className="am-grid">
                <div className="am-flexbox am-flexbox-justify-center am-flexbox-align-stretch">
                    <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                        <div className="am-grid-item-content">
                            <div className="operation-item">
                                <div className="operation-icon-wrap">
                                    <span className="item-icon-wrap"><i className="icon icon-jifenshangcheng1"></i></span>
                                </div>
                                <div className="title">积分商城</div>
                            </div>
                        </div>
                    </div>
                    <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                        <div className="am-grid-item-content">
                            <div className="operation-item">
                                <div className="operation-icon-wrap">
                                    <span className="item-icon-wrap"><i className="icon icon-dialogs"></i></span>
                                </div>
                                <div className="title">社区交流</div>
                            </div>
                        </div>
                    </div>
                    <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                        <div className="am-grid-item-content">
                            <div className="operation-item">
                                <div className="operation-icon-wrap">
                                    <span className="item-icon-wrap"><i className="icon icon-invitation"></i></span>
                                </div>
                                <div className="title">邀请好友</div>
                            </div>
                        </div>
                    </div>
                    <div className="am-flexbox-item am-grid-item" style={{width: '25%'}}>
                        <div className="am-grid-item-content">
                            <div className="operation-item">
                                <div className="operation-icon-wrap">
                                    <span className="item-icon-wrap"><i className="icon icon-question-o"></i></span>
                                </div>
                                <div className="title">帮助中心</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}


export default AccountOperation;
