import classes from './Nav.module.css'
import {NavLink} from 'react-router-dom'

const Nav = () => {
  return (

      <nav className={classes.nav}>
       <div><NavLink to="/profile" activeClassName={classes.active}>profile</NavLink></div>
        <div><NavLink to="/messages" activeClassName={classes.active}>messages</NavLink></div>
        <div><NavLink to="/posts" activeClassName={classes.active}>posts</NavLink></div>
        <div><NavLink to="/settings" activeClassName={classes.active}>settings</NavLink></div>
      </nav>

  )
}

export default Nav
