const initialState = {    //初始化状态/数据
    visible: false,
}



function DemoPage3Reducer(state = initialState,action) {
    switch(action.type) {
        case `OPEN_ASIDE`:    //判断执行的是那个指令(action)
        return {
            visible: true,
        }
        case `CLOSE_ASIDE`:    //判断执行的是那个指令(action)
        return {
            visible: false,
        }
    default:
        return state;
    }
};

export default DemoPage3Reducer;
