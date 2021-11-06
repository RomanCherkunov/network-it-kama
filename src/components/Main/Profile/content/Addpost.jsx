import React from 'react'
import classes from './Addpost.module.css'

function Addpost(props) {

    let newPostElement = React.createRef()

    function addPostButtonClick() {
        props.addPost()
    }

    function onPostTextChange() {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.addpost}>
            <p>Write post</p>
            <textarea onChange={onPostTextChange}  ref={newPostElement} value={props.newPostText} />
            <button className="button" onClick={addPostButtonClick} >Add post</button>
        </div>
    )
}

export default Addpost
