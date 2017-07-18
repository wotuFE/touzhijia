import React, {Component, PropTypes} from 'react'
import './styles/touzhijia_home.css';


class FootNav extends Component{


  render() {
    const urlHash = location.hash;
    // const navActive = urlHash.split('/')[1] || '';
    return (
      <div className="footer-nav recommend">
        <div className="data-unit unit-4">
          <dl className={urlHash === '#/' ? "data-unit-item active" : "data-unit-item"}
           onClick={() => window.location.hash = '/'}>
            <dt><i className="icon icon-recommend"></i></dt>
            <dd>推荐</dd>
          </dl>
          <dl className={urlHash === '#/platform' ? "data-unit-item active" : "data-unit-item"}
           onClick={() => window.location.hash = '/platform'}>
            <dt><i className="icon icon-platform-o"></i></dt>
            <dd>平台 </dd>
          </dl>
          <dl className={urlHash === '#/debt' ? "data-unit-item active" : "data-unit-item"}
           onClick={() => window.location.hash = '/debt'}>
           <dt><i className="icon icon-debts-o"></i></dt>
            <dd>直投</dd>
          </dl>
          <dl className={urlHash === '#/account' ? "data-unit-item active" : "data-unit-item"}
           onClick={() => window.location.hash = '/account'}>
           <dt><i className="icon icon-mine-o"></i></dt>
            <dd>我的</dd>
          </dl>
        </div>
      </div>
    );
  }
}






export default FootNav;
