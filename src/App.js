import { Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import MessagesContainer from './components/Messages/MessagesContainer'
import Nav from './components/Nav/Nav'
import UsersContainer from './components/Users/UsersContainer.jsx'


const App = (props) => {
  return (
      <div className="app">
        <Header />
        <Nav />
        <Route path='/profile' render={() => <Main />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
  )
}

export default App
