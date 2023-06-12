import FollowSuggestions from './components/Followsuggestions/FollowSuggestions'
import TicTacToe from './components/TicTacToe/TicTacToe'
import MouseFollower from './components/MouseFollower/MauseFollower'
import FetchingTest from './components/Fetchingtest/FetchingTest'
import './App.css'

function App() {
  return (
    <section id='app'>
      <h1>Vite React md 01</h1>
      <article id="app-content">
        <FollowSuggestions />
        <TicTacToe />
        <MouseFollower />
        <FetchingTest />
      </article>
    </section>
  )
}

export default App
