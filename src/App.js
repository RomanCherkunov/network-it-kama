// import { BrowserRouter } from 'react-router-dom'
import { Route, BrowserRouter} from 'react-router-dom'
import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Messages from './components/Messages/Messages'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Nav />
        <Route path='/profile' component={Main} />
        <Route path='/messages' component={Messages} />
      </div>
    </BrowserRouter>
  )
}

export default App
