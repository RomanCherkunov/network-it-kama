import React from 'react'
import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_reducer'
import Addpost from './Addpost'

// function AddpostContainer(props) {
//     function addPostButtonClick() {
//         props.store.dispatch(addPostActionCreator())
//     }

//     function onPostTextChange(text) {
//         let action = updateNewPostTextActionCreator(text)
//         props.store.dispatch(updateNewPostTextActionCreator(text))
//     }

//     return (
 
//        <Addpost addPostButtonClick={addPostButtonClick} updateNewPostText={onPostTextChange}
//                 posts={props.store.getState().profilePage.postsData} newPostText={props.state.profilePage.newPostText} /> 
//        )

// }

let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        newPostText: state.profilePage.newPostText
    }
    
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostButtonClick: () => {dispatch(addPostActionCreator())},
        updateNewPostText: (text) => {dispatch(updateNewPostTextActionCreator(text))}
    }
}


const AddpostContainer = connect(mapStateToProps, mapDispatchToProps)(Addpost)


export default AddpostContainer
