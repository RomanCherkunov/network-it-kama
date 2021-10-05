import React from 'react'
import classes from './Messages.module.css'

function Messages() {
    return (
        <div className={classes.messages}>
            <div className={classes.people}>
                <div>Person name</div>
                <div>Person name</div>
                <div>Person name</div>
                <div>Person name</div>
            </div>
            <div className={classes.dialogs}>
            <p>messages</p>
            </div>
        </div>
    )
}

export default Messages
