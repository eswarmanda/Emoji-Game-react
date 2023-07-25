import './index.css'

const NavBar = props => {
  const {currentScore, topScore, isGameInProgress} = props

  return (
    <div className="nav-bar">
      <div className="logo-card">
        <img
          className="logo"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="log-heading">Emoji Game</h1>
      </div>
      <div>
        {isGameInProgress && (
          <div className="score-card">
            <p className="score">Score: {currentScore}</p>
            <p className="score">Top Score: {topScore}</p>
          </div>
        )}
      </div>
    </div>
  )
}
export default NavBar
