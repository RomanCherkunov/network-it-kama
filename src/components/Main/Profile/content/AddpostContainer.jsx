import { connect } from 'react-redux'
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../../redux/profile_reducer'
import Addpost from './Addpost'


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
