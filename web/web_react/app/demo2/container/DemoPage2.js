import React,{Component,PropTypes} from 'react';
import Demo2 from '../components/Demo2';

class DemoPage2 extends Component{

    constructor(){
        super();
        this.state = {
            visible: false,
            homeState: {
                name: '',
                stature: '',
            }
        }
        this.changeState = this.changeState.bind(this);
    }

    handClick() {
        this.setState({
            visible: !this.state.visible,
        });
    }

    changeState() {
        this.setState({
            homeState: {
                name: 'jay',
                stature: '2米',
            },
        });
    }

    render() {
        const { visible,homeState } = this.state;
        return(
            <div className="demo2_wrap">
                <h1 onClick={() => this.handClick()}>点击事件</h1>
                {
                    visible ? 
                    <Demo2 homeState={homeState} changeState={this.changeState}/> : 
                    null
                }
            </div>
        )
    }
}

export default DemoPage2


