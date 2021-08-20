import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import Posts from './components/Posts'
import Comments from './components/Comments'
import UserForm from './components/UserForm'
import Header from './components/Header'
import RedditIcon from '@material-ui/icons/Reddit';




const App = () => {

  return (
    
 
    
      <div className="container">
        <div className="row center">
          <h1 className='white-text'> Welcome to Reddit Search. </h1>
        </div>
        <UserForm> </UserForm>
      </div>


  )
}

export default App;
