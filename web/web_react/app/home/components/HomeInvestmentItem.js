import React, {Component, PropTypes} from 'react'
import './styles/touzhijia_home.css';


class HomeInvestmentItem extends Component{



  render() {
      const { data } = this.props;
    return (

        <div className="def-item">
            <div className="def-title">
                <div className="borrow-title">
                    <span className="tag tag-current">{data.type}</span>
                    <span className="desc">{data.name}</span>
                    <span className="tip"></span>
                </div>
            </div>
            <dl className="def-content">
                <dd><span className="rate"><em>{data.returnRate}<i className="sub">%</i></em></span><span>历史年化收益</span></dd>
                <dd><span className="period">{data.time}<i className="sub">天</i> </span><span>期限</span></dd>
                <dd><span className="left"><em>{data.limit}<i className="sub">万</i></em></span><span>可购份额</span></dd>
            </dl>
        </div>

    );
  }
}






export default HomeInvestmentItem;
