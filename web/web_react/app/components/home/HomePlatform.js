import React, {Component, PropTypes} from 'react'
import { Button  } from 'antd';
import '../../styles/touzhijia_home.css';


class HomePlatform extends Component{






  render() {

    return (
      <div className="am-list recommend-lists">
                <div className="am-list-header">
                    <a className="recommend-title" href="">平台优选
                        <i className="icon icon-font icon-arrow-right"></i>
                    </a>
                </div>
            <div className="am-list-body">
                <div className="def-link">
                    <div className="def-item">
                        <div className="def-title">
                            <img src="../static/images/yixindai.png" alt="壹心贷-logo" />
                            <span className="desc">安全评级 BB</span>
                        </div>
                        <dl className="def-content">
                            <dd>
                                <span className="rate"> <em>50<i className="sub">%</i></em></span>
                                <span>历史年化收益</span>
                            </dd>
                            <dd>
                                <span className="period">7<i className="sub">天</i> </span>
                                <span>期限</span>
                            </dd>
                            <dd>
                                <span className="left"><em>3000<i className="sub">万</i></em> </span>
                                <span>可购份额</span>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}






export default HomePlatform;
