import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/userReducer'
import postReducer from './reducers/postReducer'
import commentReducer from './reducers/commentReducer'


const reducer = combineReducers({
    user: userReducer, 
    post: postReducer,
    comment: commentReducer
  })
  
  const store = createStore(
    reducer,
    applyMiddleware(thunk)
  )
  
  
  export default store