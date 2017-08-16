import React,{Component,ProtoType} from 'react';
import ReduxDemo from '../components/ReduxDemo';
import ReduxDemo1 from '../components/ReduxDemo1';
import './style/ReduxDemoPage.css';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions/'; 

class ReduxDemoPage extends Component {


    render() {
        const { reduxState, actions } = this.props;
        return(
            <div className="container_wrap">
                <h1>Redux demo</h1>
                <ReduxDemo reduxState={reduxState} actions={actions}/>
                <ReduxDemo1 reduxState={reduxState} actions={actions}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        reduxState: state.ReduxDemoReducer,
    }
}

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(Actions,dispatch),
})


export default connect(mapStateToProps, mapDispatchToProps)(ReduxDemoPage)