import classes from './Nav.module.css'

const Nav = () => {
  return (

      <nav className={classes.nav}>
       <div><a href="!#">profile</a></div>
        <div><a href="!#">messages</a></div>
        <div><a href="!#">posts</a></div>
        <div><a href="!#">settings</a></div>
      </nav>

  )
}

export default Nav
