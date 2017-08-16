const initialState = {    //初始化状态/数据
    name: '',
    number: '',
    visible: true,
}



function ReduxDemoReducer(state = initialState,action) {
    switch(action.type) {
        case 'SHOW_DEMO_STATE':    //判断执行的是那个指令(action)
        return Object.assign({}, state, {
            name: 'wutu',
            number: '30',
        })
        case 'DEL_DEMO_STATE':    //判断执行的是那个指令(action)
        return Object.assign({}, state, {
            name: '',
            number: '',
        })
        case 'ADD_NAME_STATE':    //判断执行的是那个指令(action)
        return Object.assign({}, state, {
            name: action.name,
        })
        case 'ADD_NUMBER_STATE':    //判断执行的是那个指令(action)
        return Object.assign({}, state, {
            number: action.number,
        })
    default:
        return state;
    }
};

export default ReduxDemoReducer;
