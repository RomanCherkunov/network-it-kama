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
        <Route path='/profile' render={() => <Main state={props.state} 
                                                   dispatch={props.dispatch}
                                                   store={props.store} />} />
        <Route path='/messages' render={() => <Messages state={props.state} 
                                                         dispatch={props.dispatch}
                                                         store={props.store} />} />
      </div>
  )
}

export default App
