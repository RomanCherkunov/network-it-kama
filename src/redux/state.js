
import profileReducer from './profile_reducer';
import { dialogsReducer } from './dialogs_reducer';


const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {

    _rerenderEntireTree() {

    },

    _state: {
        
        profilePage : {
                        newPostText: 'new post text',
            postsData: [
                {text: 'super message number 1', likes: '1', dislikes:'0'},
                {text: 'super message number 2', likes: '2', dislikes:'1'},
                {text: 'super message number 3', likes: '3', dislikes:'2'},
                {text: 'super message number 3', likes: '3', dislikes:'2'},
            ],
            },

        
        dialogsPage: {
                        newMessageText: 'new message text',
            personsData: [
                {name: 'Alex', id: '1'},
                {name: 'Sveta', id: '2'},
                {name: 'Anna', id: '3'},
                {name: 'Sergey', id: '4'},
            ],

            dialogsData: [
                {message: 'hello'},
                {message: 'how are you'},
                {message: 'I\'m okey'},
            ]
            },

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
    this._rerenderEntireTree = observer
    },

    dispatch(action) {

       this._state.postsData = profileReducer(this._state.profilePage, action)
       this._state.dialogsData = dialogsReducer(this._state.dialogsPage, action)

       this._rerenderEntireTree(this._state)
    },



}

    export const addPostActionCreator = () => ({type: ADD_POST})
    
    export const updateNewPostTextActionCreator = (text) => {
        return {type: UPDATE_NEW_POST_TEXT, newText: text}
    }

    export const addDialogActionCreator = () => ({type: ADD_DIALOG})

    export const updateNewMessageTextActionCreator = (text) => {
        return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
    }

export default store