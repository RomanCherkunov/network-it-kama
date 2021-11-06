// import { BrowserRouter } from 'react-router-dom'
import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Messages from './components/Messages/Messages'
import Nav from './components/Nav/Nav'


const App = (props) => {
  return (
      <div className="app">
        <Header />
        <Nav />
      <Route path='/profile' render={() => <Main state={props.state} addPost={props.addPost} updateNewPostText={props.updateNewPostText} />} />
        <Route path='/messages' render={() => <Messages state={props.state} addDialog={props.addDialog} updateNewMessageText={props.updateNewMessageText} />} />
      </div>
  )
}

export default App
