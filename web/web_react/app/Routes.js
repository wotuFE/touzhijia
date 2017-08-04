import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter , Route ,Switch } from 'react-router-dom'

import HomePage from './home/containers/HomePage';
import PlatformPage from './platform/containers/PlatformPage';
import DebtPage from './debt/containers/DebtPage';
import AccountPage from './account/containers/AccountPage';

import DemoPage1 from './demo1/DemoPage1';

import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import reduxThunk from 'redux-thunk';
import mainReducer from './mainReducer';
const store = createStore(mainReducer, applyMiddleware(reduxThunk));
//使用redux数据流的方法 创建一个store 储存管理所有的state

export default function AppRoute() {
  return (
    <Provider store={store}>
      <HashRouter >
          <Switch>
              <Route exact path="/" component={DemoPage1}/>
              <Route path="/platform" component={PlatformPage}/>
              <Route path="/debt" component={DebtPage}/>
              <Route path="/account" component={AccountPage}/>
          </Switch>
      </HashRouter >
    </Provider>

  );
}
