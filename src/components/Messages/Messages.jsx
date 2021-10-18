import React from 'react'
import Dialog from './Dialog/Dialog'
import classes from './Messages.module.css'
import Person from './person/Person'
// import { Route } from 'react-router-dom';

function Messages() {
    return (
        <div className={classes.messages}>
            <div className={classes.people}>
                <Person name='Alex' id='1' />
                <Person name='Lena' id='2' />
                <Person name='Bob' id='3' />
                <Person name='Anna' id='4' />
            </div>
            <div className={classes.dialogs}>
            <Dialog message='Hello' />
            <Dialog message='My name is sosiska' />
            <Dialog message='How are you' />
            </div>
        </div>
    )
}

export default Messages
