const initialState = {    //初始化状态/数据
    loginVisible: false,
}



function DeskTopReducer(state = initialState,action) {
    switch(action.type) {
        case `OPEN_LOGIN`:    //判断执行的是那个指令(action)
        return {
           loginVisible: true,  //返回的状态/数据
        };
        case `CLOSE_LOGIN`:
        return {
           loginVisible: false,
        };
    default:
        return state;
    }
};

export default DeskTopReducer;