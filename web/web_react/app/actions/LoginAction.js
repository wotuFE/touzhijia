export const openLogin = ()=>({          //openLogin是指令(action)的名称 我们可以在组件中执行它
    type: 'OPEN_LOGIN',                  //唯一type 
})


export const closeLogin = ()=>({
    type: 'CLOSE_LOGIN',
})
