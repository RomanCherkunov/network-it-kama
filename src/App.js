import { Route } from 'react-router-dom'
import './App.css'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import MainContainer from './components/Main/MainContainer'
import MessagesContainer from './components/Messages/MessagesContainer'
import Nav from './components/Nav/Nav'
import UsersContainer from './components/Users/UsersContainer.jsx'


const App = (props) => {
  return (
      <div className="app">
        <HeaderContainer />
        <Nav />
        <Route path='/profile/:userId?' render={() => <MainContainer />} />
        <Route path='/messages' render={() => <MessagesContainer />} />
        <Route path='/users' render={() => <UsersContainer />} />
        <Route path='/login' render={() => <LoginPage />} />
      </div>
  )
}

export default App
