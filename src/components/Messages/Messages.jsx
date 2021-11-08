import React from 'react'
import Dialog from './Dialog/Dialog'
import classes from './Messages.module.css'
import Person from './person/Person'
import { addDialogActionCreator, updateNewMessageTextActionCreator } from '../../redux/state'

function Messages(props) {


    let person = props.state.dialogsPage.personsData.map((p) => <Person name={p.name} id={p.id} />)

    let dialog = props.state.dialogsPage.dialogsData.map((p) => <Dialog message={p.message} />)

    // let textMessage = React.createRef()

    function sendMessage() {
        props.dispatch(addDialogActionCreator())
    }

    function onMessageChangeText(e) {
        let text = e.target.value
        let action = updateNewMessageTextActionCreator(text)
        props.dispatch(action)
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
                         
                <textarea className={classes.area} value={props.state.dialogsPage.newMessageText} onChange={onMessageChangeText} cols="30" rows="10"></textarea>
                <button onClick={sendMessage}>Send</button>
            </div>
        </div>
    )
}

export default Messages
