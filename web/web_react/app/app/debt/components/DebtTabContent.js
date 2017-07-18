import React, {Component, PropTypes} from 'react'
import './styles/DebtPage.css';
import DebtTabContentItem from './DebtTabContentItem';


class DebtTabContent extends Component{



  render() {
    // const banner1 = '../static/images/banner1.png';
    // const banner2 = '../static/images/banner2.png';
    return (
      <div className="platform_tab_content_wrap am-tabs am-tabs-top">
        <div  className="am-tabs-bar">
          <div className="am-tabs-ink-bar am-tabs-ink-bar-no-animated" ></div>
          <div  className="am-tabs-tab-active am-tabs-tab">精选</div>
          <div  className=" am-tabs-tab">转让</div>
        </div>
        <div className="am-tabs-content am-tabs-content-no-animated">
          <div className="am-tabs-tabpane am-tabs-tabpane-active">
            <div className="bids-list debt-regulars">
                <DebtTabContentItem />
                <DebtTabContentItem />
                <DebtTabContentItem />
                <DebtTabContentItem />
                <DebtTabContentItem />
                <DebtTabContentItem />
                <DebtTabContentItem />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default DebtTabContent;
