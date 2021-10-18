import React from 'react'
import classes from './Dialog.module.css'
import ava from '../../../../src/images/avatar.png'

function Dialog(props) {
    return (
        <div className={classes.dialog}>
            <div className={classes.imgName}>
                <img src={ava} alt="img" />
                <p>Name</p>
            </div>
            <div className={classes.message}>
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Dialog
