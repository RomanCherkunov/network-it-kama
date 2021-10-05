import Ava from './Profile/content/ava/Ava'
import About from './Profile/content/About'
import Addpost from './Profile/content/Addpost'
import Myposts from './Profile/content/Myposts'
import classes from './Main.module.css'

const Main = () => {
  return (
  <main className={classes.main}>
    <div className={classes.block}>
        <Ava />
        <About />
    </div>
    <Addpost />
    <Myposts />
  </main>
  )
}
  
export default Main
