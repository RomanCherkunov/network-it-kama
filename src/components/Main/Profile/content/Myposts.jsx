import React from 'react'
import classes from './Myposts.module.css'
import Post from './Post/Post'

function Myposts(props) {

    let postsElement =  props.state.profilePage.postsData.map((p) => <Post text={p.text} likes={p.likes} dislikes={p.dislikes} />)

    return (
        <div className={classes.myposts}>
            {postsElement}
        </div>
    )
}

export default Myposts
