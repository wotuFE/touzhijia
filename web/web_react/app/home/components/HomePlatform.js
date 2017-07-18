import React, {Component, PropTypes} from 'react'
import HomePlatformItem from './HomePlatformItem';
import './styles/touzhijia_home.css';



class HomePlatform extends Component{






  render() {
    const { platformRecommend = [] } = this.props;
    return (
      <div className="am-list recommend-lists">
                <div className="am-list-header">
                    <a className="recommend-title" href="">平台优选
                        <i className="icon icon-font icon-arrow-right"></i>
                    </a>
                </div>
            <div className="am-list-body">
                <div className="def-link">
                    {
                      platformRecommend.map((item) => <HomePlatformItem key = {item.id} data={item} />)
                    }
                </div>
            </div>
        </div>
    );
  }
}






export default HomePlatform;
