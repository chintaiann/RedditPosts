import postService from '../services/posts'

const postReducer = (state = null,action) => {
    switch(action.type) {
        case 'GET_POST':
            return action.data

        case 'RESET':
            return action.data


        default :
            return state 
    }
}

export const getPosts = (username) => {
    return async dispatch => {
        const response = await postService.getPosts(username)
        dispatch({
            type:'GET_POST',
            data: response
        })
    }
}

export const resetPosts = () => {
    return async dispatch => {
        dispatch({
            type:'RESET',
            data: null
        })
    }
}

export default postReducer 