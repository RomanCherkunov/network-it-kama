import Ava from './Profile/content/ava/Ava'
import About from './Profile/content/About'
import classes from './Main.module.css'
import AddpostContainer from './Profile/content/AddpostContainer'

const Main = (props) => {

  // let state = props.store.getState().profilePage
  return (
  <main className={classes.main}>
    <div className={classes.block}>
        <Ava />
        <About />
    </div>
    <AddpostContainer />
  </main>
  )
}
  
export default Main
