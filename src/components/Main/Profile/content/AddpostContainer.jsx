import React from 'react'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_reducer'
import Addpost from './Addpost'

function AddpostContainer(props) {
    function addPostButtonClick() {
        props.store.dispatch(addPostActionCreator())
    }

    function onPostTextChange(text) {
        let action = updateNewPostTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
 
       <Addpost addPostButtonClick={addPostButtonClick} updateNewPostText={onPostTextChange}
                posts={props.store.getState().postsData} newPostText={props.state.profilePage.newPostText} /> 
       )

}

export default AddpostContainer
