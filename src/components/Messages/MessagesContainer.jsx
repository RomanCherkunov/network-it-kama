import React from 'react'
import Messages from './Messages'
import { addDialogActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'
import { connect } from 'react-redux'

// function MessagesContainer(props) {

//     let state = props.store.getState().dialogsPage

//     // let person = state.personsData.map((p) => <Person name={p.name} id={p.id} />)

//     // let dialog = state.dialogsData.map((p) => <Dialog message={p.message} />)
//     // let newMessageBody = state.newMessageBody

//     // let textMessage = React.createRef()

//     function sendMessage() {
//         props.store.dispatch(addDialogActionCreator())
//     }

//     function onMessageChangeText(text) {
//         let action = updateNewMessageTextActionCreator(text)
//         props.store.dispatch(updateNewMessageTextActionCreator(text))
//     }

//     return (
//        <Messages sendMessage={sendMessage} onMessageChangeText={onMessageChangeText} newMessageText={state.newMessageText} 
//                  personsData={state.personsData} dialogsData={state.dialogsData} />
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        newMessageText: state.dialogsPage.newMessageText,
        personsData: state.dialogsPage.personsData,
        dialogsPage: state.DialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: () => {dispatch(addDialogActionCreator())},
        onMessageChangeText: (text) => {dispatch(updateNewMessageTextActionCreator(text))}
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
