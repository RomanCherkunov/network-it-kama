import React from 'react'
import classes from './Myposts.module.css'
import Post from './Post/Post'

function Myposts() {
    return (
        <div className={classes.myposts}>
            <Post text='super message number 1' />
            <Post text='super message number 2' />
            <Post text='super message number 3' />
            <Post text='super message number 4' />
        </div>
    )
}

export default Myposts
