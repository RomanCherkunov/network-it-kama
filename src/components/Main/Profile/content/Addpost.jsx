import React from 'react'
import classes from './Addpost.module.css'

function Addpost(props) {
    let newPostElement = React.createRef()

    function addPostButtonClick() {

        props.addPostButtonClick()
        // props.dispatch(addPostActionCreator())
    }

    function onPostTextChange() {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.addpost}>
            <p>Write post</p>
            <textarea onChange={onPostTextChange} value={props.newPostText} ref={newPostElement} />
            <button className="button" onClick={addPostButtonClick} >Add post</button>
        </div>
    )
}

export default Addpost
