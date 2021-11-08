import Ava from './Profile/content/ava/Ava'
import About from './Profile/content/About'
import Addpost from './Profile/content/Addpost'
import Myposts from './Profile/content/Myposts'
import classes from './Main.module.css'

const Main = (props) => {
  return (
  <main className={classes.main}>
    <div className={classes.block}>
        <Ava />
        <About />
    </div>
    <Addpost dispatch={props.dispatch} newPostText={props.state.profilePage.newPostText}  />
    <Myposts postsData={props.state.profilePage.postsData} />
  </main>
  )
}
  
export default Main
