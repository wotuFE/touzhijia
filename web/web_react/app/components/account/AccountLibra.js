import React, {Component, PropTypes} from 'react'
import '../../styles/AccountPage.css';


class AccountLibra extends Component{



  render() {

    return (
      <div className="libra-wrap">
        <span className="title">天秤智投</span>
        <span className="sub-title"><font>投资后可查看积分</font></span>
        <span className="extra-data">
            <span className="extra-data-inner"><span><span className="num">0</span>分 </span></span>
            <i className="icon icon-font icon-arrow-right"></i>
        </span>
    </div>
    );
  }
}


export default AccountLibra;
