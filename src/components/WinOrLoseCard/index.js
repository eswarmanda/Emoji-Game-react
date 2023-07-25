import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, isPlayBtnClicked} = props

  const getImgClass = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const getTitle = isWon ? 'You Won' : 'You Lose'
  const getStatus = isWon ? 'Best Score' : 'Score'
  return (
    <div className="main-card">
      <div className="result-card">
        <div className="result-child">
          <h1 className="lose">{getTitle}</h1>
          <p className="score-title">{getStatus}</p>
          <p className="status">{score}/12</p>
          <button className="play-btn" type="button" onClick={isPlayBtnClicked}>
            Play Again
          </button>
        </div>
        <div>
          <img className="lose-img" src={getImgClass} alt="win or lose" />
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard
