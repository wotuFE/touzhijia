import { combineReducers, } from 'redux';
import LoginReducer from './reducers/LoginReducer';


//将reducers文件夹中的状态文件合并到状态树中
const mainReducer   =   combineReducers({
   LoginReducer,
});

export default mainReducer;