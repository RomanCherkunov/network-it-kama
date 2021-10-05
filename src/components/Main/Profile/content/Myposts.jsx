import React from 'react'
import classes from './Myposts.module.css'
import Post from './Post/Post'

function Myposts() {
    return (
        <div className={classes.myposts}>
            <Post text='super message number 1' likes='1' dislikes='0' />
            <Post text='super message number 2' likes='22' dislikes='4' />
            <Post text='super message number 3' likes='34' dislikes='1' />
            <Post text='super message number 4' likes='8' dislikes='3' />
        </div>
    )
}

export default Myposts
