import React from 'react'
import classes from './Addpost.module.css'

function Addpost() {
    return (
        <div className={classes.addpost}>
            <p>Write post</p>
            <textarea></textarea>
            <button className="button">Add post</button>
        </div>
    )
}

export default Addpost
