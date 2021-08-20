import commentService from '../services/comments'

const commentReducer = (state = null,action) => {
    switch(action.type) {
        case 'GET_COMMENT':
            return action.data

        case 'RESET':
            return action.data


        default :
            return state 
    }
}

export const getComment = (username) => {
    return async dispatch => {
        const response = await commentService.getComments(username)
        dispatch({
            type:'GET_COMMENT',
            data: response
        })
    }
}

export const resetComments = () => {
    return async dispatch => {
        dispatch({
            type:'RESET',
            data: null
        })
    }
}

export default commentReducer 