import React from 'react'
import classes from './Addpost.module.css'
import Post from './Post/Post'


function Addpost(props) {
    // let newPostElement = React.createRef()

    let postsElement =  props.postsData.map((p) => <Post text={p.text} likes={p.likes} dislikes={p.dislikes} key={p.id} />)

    function addPostButtonClick() {

        props.addPostButtonClick()
        // props.dispatch(addPostActionCreator())
    }

    function onPostTextChange(e) {
        let text = e.target.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.addpost}>
            <p>Write post</p>
            <textarea onChange={onPostTextChange} value={props.newPostText}  />
            <button className="button" onClick={addPostButtonClick} >Add post</button>
            <div className={classes.myposts}>
                     {postsElement}
            </div>
        </div>
    )
}

export default Addpost
