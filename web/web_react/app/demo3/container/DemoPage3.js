import React,{Component,PropTypes} from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as Actions from '../action'; 
import Demo3 from '../components/Demo3';

class DemoPage3 extends Component{

    openAside() {
        const { actions } = this.props;
        actions.openAside();
    }

    closeAside() {
        const { actions } = this.props;
        actions.closeAside();
    }

    render() {
        const { demo3State } = this.props;

        return(
            <div className="demo1_wrap">
                <h1>demo1容器组件</h1>
                <button onClick={() => this.openAside()}>open</button>
                <button onClick={() => this.closeAside()}>close</button>
                {demo3State.visible ? <h2>ASIDE</h2> : null}
                <Demo3/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        demo3State: state.DemoPage3Reducer,
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions,dispatch),
})

export default connect(mapStateToProps,mapDispatchToProps)(DemoPage3)


