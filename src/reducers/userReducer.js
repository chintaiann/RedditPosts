const userReducer = (state = null, action) => {
    switch(action.type) {
        case 'SETUSER' :
            return action.data

        default: 
            return state
    }
}


export const saveUser = (username) => {
    return async dispatch => {
        dispatch({
            type:'SETUSER',
            data: username
        })
    }
}

export default userReducer 