import React from 'react'
import classes from './Person.module.css'
import { NavLink } from 'react-router-dom'

function Person(props) {
    return (
        <div className={classes.person}>
            <ul>
                <li>
                    <NavLink to={`/messages/${props.id}`} activeClassName={classes.active}>{props.name}</NavLink>
                </li>
            </ul>
            
        </div>
    )
}

export default Person
