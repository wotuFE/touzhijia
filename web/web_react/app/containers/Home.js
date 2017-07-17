import React, {Component, PropTypes} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';  //引入需要的action *代表引入actions文件夹中的index.js 即被合并的所有action
import { Button  } from 'antd';

class Home extends Component{

  openLoginClick() {
    const { actions } = this.props;
    actions.openLogin();   //执行打开登陆状态
  }

  closeLoginClick() {
    const { actions } = this.props;
    actions.closeLogin();   //执行关闭登陆状态
  }


  render() {
    const { actions,loginState } = this.props;
    const { loginVisible } = loginState;
    console.log('======打印state中的loginVisible======',loginVisible)
    return (
      <div className="home_wrap">
        {
          loginVisible ? <h1>已登录</h1> : <h1>未登录</h1>
        }
        <div className="home_content">
          <Button type="primary"onClick={() => this.openLoginClick()}>登陆</Button>
          <Button type="danger" onClick={() => this.closeLoginClick()}>退出</Button>
        </div>
      </div>
    );
  }
}

//获取状态树中的某个状态
//state就是状态树
const mapStateToProps = (state) => {
  return {
    loginState: state.LoginReducer,
  };
};

//注入actions actions是import进组件的
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(Actions, dispatch)
});





export default connect(mapStateToProps,mapDispatchToProps)(Home);
