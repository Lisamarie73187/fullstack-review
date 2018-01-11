const initState = {
    user: null
}

const LOGIN = 'LOGIN'

export function login (user) {
    return {
        type: LOGIN,
        payload: user
    }
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case LOGIN: 
            return {...state, user: action.payload}
        default:
            return state
    }
}

export default reducer
