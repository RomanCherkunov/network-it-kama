import React from 'react'
import Dialog from './Dialog/Dialog'
import classes from './Messages.module.css'
import Person from './person/Person'
// import { Route } from 'react-router-dom';

function Messages(props) {


    let person = props.state.personsData.map((p) => <Person name={p.name} id={p.id} />)

    let dialog = props.state.dialogsData.map((p) => <Dialog message={p.message} />)

    let textMessage = React.createRef()

    function sendMessage() {
        props.addDialog()
    }

    function onMessageChangeText() {
        let text = textMessage.current.value
        props.updateNewMessageText(text)
    }

    return (
        <div className={classes.messages}>
            <div className={classes.people}>
                         {person}
            </div>
            <div className={classes.dialogs}>
                         {dialog}
                <textarea value={props.state.newMessageText} onChange={onMessageChangeText} ref={textMessage} cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages
