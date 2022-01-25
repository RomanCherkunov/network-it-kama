import Ava from './Profile/content/ava/Ava'
import About from './Profile/content/About'
import Myposts from './Profile/content/Myposts'
import classes from './Main.module.css'
import AddpostContainer from './Profile/content/AddpostContainer'

const Main = (props) => {

  let state = props.store.getState().profilePage
  return (
  <main className={classes.main}>
    <div className={classes.block}>
        <Ava />
        <About />
    </div>
    <AddpostContainer store={props.store} state={props.state} />
    <Myposts state={state}  />
  </main>
  )
}
  
export default Main
