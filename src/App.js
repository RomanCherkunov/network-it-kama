import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Messages from './components/Messages/Messages'
import Nav from './components/Nav/Nav'

const App = () => {
  return (
    <div className="app">
      <Header />
      <Nav />
      {/* <Main /> */}
      <Messages />
    </div>
  )
}

export default App
