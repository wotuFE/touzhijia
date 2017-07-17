import React, {Component, PropTypes} from 'react'
import '../../styles/DebtPage.css';


class DebtTabContentItem extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="debt_item_wrap ">
        <div className="def-item">
          <div className="def-title">
            <div>
              <span className="tag tag-brand">品牌</span>
              <span className="desc">
                <font color="#999999">由<font color="#346dee">宜贷网</font><font color="#999999">提供</font></font>
              </span>
            </div>
          </div>
          <dl className="def-content">
            <dd><span className="rate"><em>7.20<i className="sub">%</i></em></span><span>历史年化收益</span></dd>
            <dd><span><i>1</i><i className="sub">个月</i></span><span>期限</span></dd>
            <dd><span className="left"><em>13.5<i className="sub">万</i></em></span><span>可购份额</span></dd>
          </dl>
        </div>
      </div>
    );
  }
}


export default DebtTabContentItem;
