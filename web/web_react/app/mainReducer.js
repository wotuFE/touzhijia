import { combineReducers, } from 'redux';
import HomePageReducer from './home/reducers/HomePageReducer';
import DemoPage3Reducer from './demo3/reducers/DemoPage3Reducer';


//将reducers文件夹中的状态文件合并到状态树中
const mainReducer   =   combineReducers({
   HomePageReducer,
   DemoPage3Reducer,
});

export default mainReducer;
