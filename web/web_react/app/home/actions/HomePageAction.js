import {get} from '../../common/util/ajaxServer'

export const getHomeData = ()=>
  (dispatch)=> {
    get({
       url: 'http://127.0.0.1:7777/touzhijia/home',
       success: (result) =>{
         if(!result || !result.var ) return;
         let data = result.var;
         dispatch({
           type: 'GET_HOME_DATA',
           homeDate: data
         })
      }
    });
  }

export const closeDownLoad = () => {
    return {
        type: 'CLOSE_DOWN_LOAD',
    }
}