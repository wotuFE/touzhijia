import React, {Component, PropTypes} from 'react'
import './styles/touzhijia_home.css';



class HomePlatformItem extends Component{






  render() {
    const { data } = this.props;
    return (

          <div className="def-item">
              <div className="def-title">
                  <img src={require("../../static/images/yixindai.png")} alt="壹心贷-logo" />
                  <span className="desc">{data.desc}</span>
              </div>
              <dl className="def-content">
                  <dd>
                      <span className="rate"> <em>{data.returnRate}<i className="sub">%</i></em></span>
                      <span>历史年化收益</span>
                  </dd>
                  <dd>
                      <span className="period">{data.time}<i className="sub">天</i> </span>
                      <span>期限</span>
                  </dd>
                  <dd>
                      <span className="left"><em>{data.limit}<i className="sub">万</i></em> </span>
                      <span>可购份额</span>
                  </dd>
              </dl>
          </div>

    );
  }
}






export default HomePlatformItem;
