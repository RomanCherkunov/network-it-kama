const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

let initialState = {
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
}

export const dialogsReducer = (state = initialState, action) => {



    switch(action.type) {
        case ADD_DIALOG: 
                const newDialog = {
                    message: state.newMessageText
        }

        return {
            ...state,
            newMessageText: '',
            dialogsData: [...state.dialogsData, newDialog]
        }
        // stateCopy.dialogsData.push(newDialog)
    
        case UPDATE_NEW_MESSAGE_TEXT: 

        return {
            ...state,
            newMessageText: action.newText
        }
        
        default: return state
    }
}


export const addDialogActionCreator = () => ({type: ADD_DIALOG})

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer