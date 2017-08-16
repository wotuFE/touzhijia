import React,{Component,ProtoType} from 'react';
import { Button, Input } from 'antd';
import './style/ReduxDemo.css';

class ReduxDemo1 extends Component {

    showClick() {
        const { actions } = this.props;
        actions.showDemoState();
    }

    delClick() {
        const { actions } = this.props;
        actions.delDemoState();
    }

    setName(e) {
       const { actions } = this.props;
        actions.addNameState(e.target.value);
    }

    setNumber(e) {
        const { actions } = this.props;
        actions.addNumberState(e.target.value);
    }

    render() {
        const { name, number } = this.props.reduxState;
        return(
            <div className="component_wrap">
                <div className="title">组件2</div>
                <div>名字: {name}</div>
                <div>人数: {number}</div>
                <div>
                    <Input value={name} placeholder="设置名字" onChange={(e) => this.setName(e)} />
                </div>
                <div>
                    <Input value={number} placeholder="设置人数" onChange={(e) => this.setNumber(e)}/>
                </div>
                <Button type="primary" onClick={() => this.showClick()}>show</Button>
                <Button type="primary" onClick={() => this.delClick()}>del</Button>
            </div>
        );
    }
}

export default ReduxDemo1;