import './index.css'

const EmojiCard = props => {
  const {emojiDetails, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiDetails
  const onEmojiClicked = () => {
    onClickEmoji(id)
  }
  return (
    <li className="list-item">
      <button className="emoji-btn" type="button" onClick={onEmojiClicked}>
        <img className="emoji-img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}
export default EmojiCard
