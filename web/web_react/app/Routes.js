import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter , Route ,Switch } from 'react-router-dom'
import Login from './containers/Login';
// import Home from './routes/Home';
import HomePage from './containers/HomePage';
import PlatformPage from './containers/PlatformPage';
import DebtPage from './containers/DebtPage';
import AccountPage from './containers/AccountPage';

import { Provider, } from 'react-redux';
import { createStore, applyMiddleware, } from 'redux';
import reduxThunk from 'redux-thunk';
import mainReducer from './mainReducer';

//使用redux数据流的方法 创建一个store 储存管理所有的action和state
const store = createStore(mainReducer, applyMiddleware(reduxThunk));

export default function AppRoute() {
  return (
    <Provider store={store}>
      <HashRouter >
          <Switch>
              <Route exact path="/" component={HomePage}/>
              <Route path="/platform" component={PlatformPage}/>
              <Route path="/debt" component={DebtPage}/>
              <Route path="/account" component={AccountPage}/>
          </Switch>
      </HashRouter >
    </Provider>

  );
}
