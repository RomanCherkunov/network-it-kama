import React from 'react'
import classes from './users.module.css'
import usersdefaultava from '../../images/usersdefaultava.jpeg'
import { NavLink } from 'react-router-dom'


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i=1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return  (
        <div> 
            <div>
                {pages.map(num => {
                    return <span onClick={(e) => {props.onPageChanged(num)}} className={props.currentPage === num && classes.selectedPage}>{num}</span>})}
            </div>
            {
                props.users.map(u => <div className={classes.userWrapper} key={u.id}>
                        <div className={classes.avafollow}>
                            <NavLink to={'/profile/' + u.id} >
                                <img src={u.photos.small !=null ? u.photos.small: usersdefaultava} alt='' className={classes.userAvatarka}  />
                            </NavLink>
                            {u.followed
                            ? <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {

                                     props.unFollowThunk(u.id)

                            }}>Unfollow</button> 
                            : <button disabled={props.followingProgress.some(id => id === u.id)} className={classes.follow} onClick={() => {

                                     props.followThunk(u.id)

                            }}>Follow</button>
                                }                          
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