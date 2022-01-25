const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        newPostText: 'new post text',
        postsData: [
        {text: 'super message number 1', likes: '1', dislikes:'0'},
        {text: 'super message number 2', likes: '2', dislikes:'1'},
        {text: 'super message number 3', likes: '3', dislikes:'2'},
        {text: 'super message number 3', likes: '3', dislikes:'2'},
    ],
}   


const profileReducer = (state = initialState, action) => {
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

export const addPostActionCreator = () => ({type: ADD_POST})
    
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer