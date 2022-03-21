import classes from './Main.module.css'
import AddpostContainer from './Profile/content/AddpostContainer'
import Profile from './Profile/Profile'

const Main = (props) => {



  // let state = props.store.getState().profilePage
  return (
  <main className={classes.main}>
    <Profile profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
    <AddpostContainer />
  </main>
  )
}
  
export default Main
