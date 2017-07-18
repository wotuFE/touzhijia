import { combineReducers, } from 'redux';
import HomePageReducer from './home/reducers/HomePageReducer';


//将reducers文件夹中的状态文件合并到状态树中
const mainReducer   =   combineReducers({
   HomePageReducer,
});

export default mainReducer;
