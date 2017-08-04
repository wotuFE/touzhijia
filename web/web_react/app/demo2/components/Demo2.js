import React,{Component,PropTypes} from 'react'

class Demo2 extends Component {

    render() {
        const {homeState,changeState} = this.props;
        return (
            <div className="demo2_main_wrap">
                <h1 onClick={changeState}>子组件</h1>
                <div>姓名: {homeState.name}</div>
                <div>身高: {homeState.stature}</div>
            </div>
        )
    }
}

export default Demo2;