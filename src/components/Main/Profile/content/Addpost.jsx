import React from 'react'
import classes from './Addpost.module.css'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_reducer'

function Addpost(props) {

    // let newPostElement = React.createRef()

    function addPostButtonClick() {
        props.dispatch(addPostActionCreator())
    }

    function onPostTextChange(e) {
        let text = e.target.value
        let action = updateNewPostTextActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div className={classes.addpost}>
            <p>Write post</p>
            <textarea onChange={onPostTextChange} value={props.newPostText} />
            <button className="button" onClick={addPostButtonClick} >Add post</button>
        </div>
    )
}

export default Addpost
