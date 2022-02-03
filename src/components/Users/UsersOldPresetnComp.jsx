import React from 'react'
import classes from './users.module.css'
import * as axios from 'axios'
import usersdefaultava from '../../images/usersdefaultava.jpeg'

let Users = (props) => {


    let getUsers = () => {
    if(props.users.length === 0) {

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
                console.log(response)
            })
        }
    //         props.setUsers(
    //         [
    //             {id: 1, ava: 'https://cs6.pikabu.ru/avatars/673/v673088-688303831.jpg', follow: true, fullName: 'Tatyana', status: 'fall in love', location: {country: 'Russia', city: 'Noginsk'}},
    //             {id: 2,ava: 'https://cs6.pikabu.ru/avatars/673/v673088-688303831.jpg', follow: true, fullName: 'Roman', status: 'waiting......', location: {country: 'Russia', city: 'Noginsk'}},
    //             {id: 3, ava: 'https://cs6.pikabu.ru/avatars/673/v673088-688303831.jpg', follow: false, fullName: 'Sveta', status: 'looking for a job', location: {country: 'UAE', city: 'Dubai'}}
    //         ]
    // )
    }


    return   (
        <div>
            <button onClick={getUsers}>Get users</button>

            {
                props.users.map(u => <div className={classes.userWrapper} key={u.id}>
                        <div className={classes.avafollow}>
                            <img src={u.photos.small !=null ? u.photos.small: usersdefaultava} alt='' className={classes.userAvatarka}  />
                            {u.followed
                            ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                            : <button className={classes.follow} onClick={() => {props.follow(u.id)}}>Follow</button>}
                            
                        </div>



                        <div className={classes.userInfo}>
                            <div className={classes.infocontent}>
                                <div className={classes.fullname}>{u.name}</div>
                                <div>{u.status ==null ? "status" : u.status }</div>
                            </div>


                        <div className={classes.infocontent}>
                            <div className={classes.location}>{"u.location.country"}</div>
                            <div className={classes.location}>{"u.location.city"}</div>
                        </div>


                        </div>


                </div>)
            }
        </div>
    )
}

export default Users