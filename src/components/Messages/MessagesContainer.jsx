import React from 'react'
import Messages from './Messages'
import { addDialogActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'

function MessagesContainer(props) {

    let state = props.store.getState().dialogsPage

    // let person = state.personsData.map((p) => <Person name={p.name} id={p.id} />)

    // let dialog = state.dialogsData.map((p) => <Dialog message={p.message} />)
    // let newMessageBody = state.newMessageBody

    // let textMessage = React.createRef()

    function sendMessage() {
        props.store.dispatch(addDialogActionCreator())
    }

    function onMessageChangeText(text) {
        let action = updateNewMessageTextActionCreator(text)
        props.store.dispatch(action)
    }

    return (
       <Messages sendMessage={sendMessage} onMessageChangeText={onMessageChangeText} newMessageText={state.newMessageText} 
                 personsData={state.personsData} dialogsData={state.dialogsData} />
    )
}

export default MessagesContainer
