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
    <Addpost addPost={props.addPost} newPostText={props.state.newPostText} updateNewPostText={props.updateNewPostText} />
    <Myposts postsData={props.state.postsData} />
  </main>
  )
}
  
export default Main
