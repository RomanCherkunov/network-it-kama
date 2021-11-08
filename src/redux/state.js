const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let store = {

    _rerenderEntireTree() {

    },

    _state: {
        newPostText: 'new post text',
        newMessageText: 'new message text',
        postsData: [
            {text: 'super message number 1', likes: '1', dislikes:'0'},
            {text: 'super message number 2', likes: '2', dislikes:'1'},
            {text: 'super message number 3', likes: '3', dislikes:'2'},
            {text: 'super message number 3', likes: '3', dislikes:'2'},
        ],

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

    getState() {
        return this._state
    },

    subscribe(observer) {
    this._rerenderEntireTree = observer
    },

    dispatch(action) {
        
            if(action.type ==='ADD-POST') {
                    const newPost = {
                        id: 5,
                        text: this._state.newPostText,
                        likes: 1,
                        dislikes: 1
                    }
                    this._state.postsData.push(newPost)
                    this._state.newPostText = ''
                    this._rerenderEntireTree(this._state)
            } else if(action.type === 'UPDATE-NEW-POST-TEXT') {
                        this._state.newPostText = action.newText
                        this._rerenderEntireTree(this._state)
            } else if(action.type === 'ADD-DIALOG') {
                        const newDialog = {
                            message: this._state.newMessageText
                        }
                        this._state.dialogsData.push(newDialog)
                        this._state.newMessageText = ''
                        this._rerenderEntireTree(this._state)
            } else if(action.type === 'UPDATE-NEW-MESSAGE-TEXT')  {
                        this._state.newMessageText = action.newText
                        this._rerenderEntireTree(this._state)
            }     
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