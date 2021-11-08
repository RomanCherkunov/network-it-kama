const ADD_DIALOG = 'ADD-DIALOG'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

export const dialogsReducer = (state, action) => {
    switch(action.type) {
        case ADD_DIALOG:
                    const newDialog = {
            message: state.newMessageText
        }
        state.dialogsData.push(newDialog)
        state.newMessageText = ''
            return state
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default: return state
    }
}


export const addDialogActionCreator = () => ({type: ADD_DIALOG})

export const updateNewMessageTextActionCreator = (text) => {
    return {type: UPDATE_NEW_MESSAGE_TEXT, newText: text}
}

export default dialogsReducer