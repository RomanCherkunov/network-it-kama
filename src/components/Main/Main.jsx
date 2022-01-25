import Ava from './Profile/content/ava/Ava'
import About from './Profile/content/About'
import Myposts from './Profile/content/Myposts'
import classes from './Main.module.css'
import AddpostContainer from './Profile/content/AddpostContainer'

const Main = (props) => {
  return (
  <main className={classes.main}>
    <div className={classes.block}>
        <Ava />
        <About />
    </div>
    <AddpostContainer store={props.store} state={props.state} dispatch={props.dispatch}  />
    <Myposts state={props.state}  />
  </main>
  )
}
  
export default Main
