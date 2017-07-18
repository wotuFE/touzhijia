const initialState = {    //初始化状态/数据
    homeDate: {},
}



function HomePageReducer(state = initialState,action) {
    switch(action.type) {
        case `GET_HOME_DATA`:    //判断执行的是那个指令(action)
        return {
           homeDate: action.homeDate,  //返回的状态/数据
        };
    default:
        return state;
    }
};

export default HomePageReducer;
