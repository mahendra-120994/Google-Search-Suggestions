import './index.css'

const SuggestionItem = props => {
  const {suggestions, selectSuggestedItem, searchResult} = props

  const {suggestion, id} = suggestions

  const onSelect = () => {
    // selectSuggestedItem(id, searchResult)
  }

  return (
    <li className="list-item">
      <div className="suggested-item">
        <p className="para">{suggestion}</p>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
          className="arrow-icon"
          alt="arrow"
          onClick={onSelect}
        />
      </div>
    </li>
  )
}

export default SuggestionItem
