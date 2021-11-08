const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profileReducer = (state, action) => {
    switch(action.type) {
        case ADD_POST:
                        const newPost = {
                id: 5,
                text: state.newPostText,
                likes: 1,
                dislikes: 1
            }
            state.postsData.push(newPost)
            state.newPostText = ''
            return state
        case UPDATE_NEW_POST_TEXT:
                        state.newPostText = action.newText
                        return state
        default: return state
    }
}

export default profileReducer