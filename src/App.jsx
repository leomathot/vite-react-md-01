import FollowSuggestions from './components/Followsuggestions/FollowSuggestions'
import TicTacToe from './components/TicTacToe/TicTacToe'
import MouseFollower from './components/MouseFollower/MauseFollower'
import FetchingCatFactAndImage from './components/FetchingCatFactAndImage/FetchingCatfactAndImage'
import './App.css'

function App() {
  return (
    <section id='app'>
      <h1>Vite React md 01</h1>
      <article id="app-content">
        <FollowSuggestions />
        <TicTacToe />
        <MouseFollower />
        <FetchingCatFactAndImage />
      </article>
    </section>
  )
}

export default App
