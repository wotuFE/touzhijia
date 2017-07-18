import React, {Component, PropTypes} from 'react'
import HomeInvestmentItem from './HomeInvestmentItem';
import './styles/touzhijia_home.css';


class HomeInvestment extends Component{



  render() {
    const { debtRecommend = [] } = this.props

    return (
      <div className="am-list recommend-lists">
        <div className="am-list-header">
            <a className="recommend-title" href="">直投理财
                <i className="icon icon-font icon-arrow-right"></i>
            </a>
        </div>
        <div className="am-list-body">
          {
            debtRecommend.map((item) => <HomeInvestmentItem key={item.id} data={item}/>)
          }
        </div>
    </div>
    );
  }
}






export default HomeInvestment;
