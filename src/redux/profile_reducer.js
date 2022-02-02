const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
        newPostText: 'new message text',
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
                    likes: 10,
                    dislikes: 1
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }

            // stateCopy.postsData.push(newPost)
            
        
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        
        default: return state
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
    
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}

export default profileReducer