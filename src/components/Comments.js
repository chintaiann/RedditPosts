import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

const Comments = () => {
    const comments = useSelector(state=>state.comment)
    const user = useSelector(state=>state.user)
    if (!comments) {
        return (
            null
        )
    }

    return (
        <div>
        Comments by {user} :
        <List>
            {comments.map(comment => <ListItemLink key={comment.id} target="_blank" href={`//reddit.com${comment.permalink}`}> <ListItemText primary={comment.body}/> </ListItemLink> )}
        </List>
        </div>
    )

}

export default Comments