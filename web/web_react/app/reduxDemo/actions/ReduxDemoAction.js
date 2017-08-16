export const showDemoState = () => {
    return {
        type: 'SHOW_DEMO_STATE',
    }
}

export const delDemoState = () => {
    return {
        type: 'DEL_DEMO_STATE',
    }
}

export const addNameState = (n) => {
    return {
        type: 'ADD_NAME_STATE',
        name: n,
    }
}

export const addNumberState = (m) => {
    return {
        type: 'ADD_NUMBER_STATE',
        number: m,
    }
}

