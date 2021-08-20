import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const Posts = () => {
    const posts = useSelector(state=>state.post)
    const user = useSelector(state=>state.user)
    if (!posts) {
        return (
            null
        )
    }

    

    return (
        <div>
        Posts by {user} :
        <List >
            {posts.map(post => <ListItemLink key={post.id} target="_blank" href={post.full_link}> <ListItemText primary={post.title} /> </ListItemLink>
           )}
        </List>
        </div>
    )

}

export default Posts 