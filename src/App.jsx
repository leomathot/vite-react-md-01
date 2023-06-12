import FollowSuggestions from './components/Followsuggestions/FollowSuggestions'
import TicTacToe from './components/TicTacToe/TicTacToe'
import MouseFollower from './components/MouseFollower/MauseFollower'
import FetchingTest from './components/Fetchingtest/FetchingTest'
import './App.css'

function App() {
  return (
    <section className='app'>
      <h1>React md 01</h1>
      <FollowSuggestions />
      <TicTacToe />
      <MouseFollower />
      <FetchingTest />
    </section>
  )
}

export default App
