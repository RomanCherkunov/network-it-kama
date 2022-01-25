import React from 'react'
import Dialog from './Dialog/Dialog'
import classes from './Messages.module.css'
import Person from './person/Person'
import { addDialogActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs_reducer'

function Messages(props) {

    // let state = props.store.getState().dialogsPage

    let person = props.personsData.map((p) => <Person name={p.name} id={p.id} />)

    let dialog = props.dialogsData.map((p) => <Dialog message={p.message} />)
    // let newMessageBody = state.newMessageBody

    // let textMessage = React.createRef()

    function sendMessage() {
        props.sendMessage()
    }

    function onMessageChangeText(e) {
        let text = e.target.value
        props.onMessageChangeText(text)
    }

    return (
        <div className={classes.messages}>
            <div className={classes.people}>
                         {person}
            </div>
            <div className={classes.dialogs}>
                    <div className={classes.scroll}>
                        {dialog}
                    </div>
                         
                <textarea className={classes.area} value={props.newMessageText} onChange={onMessageChangeText} cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages
