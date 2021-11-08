
import profileReducer from './profile_reducer';
import { dialogsReducer } from './dialogs_reducer';

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

 


export default store