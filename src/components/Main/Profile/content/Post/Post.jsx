import React from 'react'
import classes from './Post.module.css'

function Post(props) {
    return (
    <div className={classes.post}>
        <img src="https://www.vokrug.tv/pic/person/2/b/f/4/2bf448098b7badf3b37e87c510da29bc.jpeg" alt="" />
        <p className={classes.postMessage}>{props.text}</p>
        <div className={classes.likes}>
            <span className={classes.like}>likes {props.likes}</span>
            <span className={classes.like}>dislikes {props.dislikes}</span>
        </div>
    </div>
    )
}

export default Post
