import React,{Component,ProtoType} from 'react';
import StateDemo from '../components/stateDemo';
import StateDemo1 from '../components/stateDemo1';
import './style/StateDemoPage.css';

class StateDemoPage extends Component {

    render() {
        return(
            <div className="container_wrap">
                <h1>state demo</h1>
                <StateDemo />
                <StateDemo1 />
            </div>
        )
    }
}

export default StateDemoPage