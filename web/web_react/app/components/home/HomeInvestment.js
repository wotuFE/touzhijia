import React, {Component, PropTypes} from 'react'
import { Button  } from 'antd';
import '../../styles/touzhijia_home.css';


class HomeInvestment extends Component{



  render() {

    return (
      <div className="am-list recommend-lists">
        <div className="am-list-header">
            <a className="recommend-title" href="">直投理财
                <i className="icon icon-font icon-arrow-right"></i>
            </a>
        </div>
        <div className="am-list-body">
            <div className="def-item">
                <div className="def-title">
                    <div className="borrow-title">
                        <span className="tag tag-current">活期</span>
                        <span className="desc">活期灵活存取</span>
                        <span className="tip"></span>
                    </div>
                </div>
                <dl className="def-content">
                    <dd><span className="rate"><em>12.60<i className="sub">%</i></em></span><span>历史年化收益</span></dd>
                    <dd><span className="period"><i className="sub">随存随取</i></span><span>期限</span></dd>
                    <dd><span className="left"><em>280.1<i className="sub">万</i></em></span><span>可购份额</span></dd>
                </dl>
            </div>
        </div>
    </div>
    );
  }
}






export default HomeInvestment;
