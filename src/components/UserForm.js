import React, { useState, useRef } from "react"
import {useDispatch} from "react-redux"
import { saveUser } from "../reducers/userReducer"
import { getPosts, resetPosts } from "../reducers/postReducer"
import {getComment, resetComments} from "../reducers/commentReducer"

import { TextField,Typography, Button } from '@material-ui/core'
import {
    BrowserRouter as Router,
    Switch, Route, Link
  } from "react-router-dom"

import Posts from './Posts'
import Comments from './Comments'


const UserForm = () => {
    const dispatch = useDispatch()
    const valueRef = useRef('')

    const handlePost = async(event) => {
        const username = valueRef.current.value
        if (username===''){
            dispatch(resetPosts)
        }
        else {
            dispatch(saveUser(username))
            dispatch(getPosts(username))
        }
     
    }

    const handleComment = async (event) => {
        const username = valueRef.current.value
        if (username==='') {
            dispatch(resetComments)
        }
        else {
        dispatch(saveUser(username))
        dispatch(getComment(username))
        }
    }
    return (
        <div className='row center'>
     
            <TextField 
            inputRef={valueRef} 
            id="filled-basic"
            label='User'
            />

           <Router>
                <div>
                    <Button variant="contained" color="secondary" component={Link} to='/posts' onClick={handlePost}>Get posts!</Button>
                    <br></br>
                    <Button variant="contained" color="secondary" component={Link} to='/comments' onClick={handleComment}>Get comments!</Button>
                </div>


            
                <Switch>
                    <Route path="/posts"> <Posts/> </Route>
                    <Route path="/comments"> <Comments/> </Route>
                </Switch>
            </Router>
            

            {/* <LinkButton
                to='/posts'
                onClick={handlePost}
                >Get posts!</LinkButton>

            <LinkButton
                to='/comments'
                onClick={handleComment}
                >Get comments!</LinkButton> */}
        
        </div>
    )
}

export default UserForm 