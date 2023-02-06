// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

const initialSuggestionsList = [
  {id: 1, suggestion: 'Price of Ethereum'},
  {id: 2, suggestion: 'Oculus Quest 2 specs'},
  {id: 3, suggestion: 'Tesla Share Price'},
  {id: 4, suggestion: 'Price of Ethereum today'},
  {id: 5, suggestion: 'Latest trends in AI'},
  {id: 6, suggestion: 'Latest trends in ML'},
]

class GoogleSuggestions extends Component {
  state = {searchInput: '', suggestionsList: initialSuggestionsList}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  selectSuggestedItem = uniqueId => {
    const {suggestionsList} = this.state
    const selectedItem = suggestionsList.filter(each => each.id === uniqueId)
    this.setState({searchInput: selectedItem[0].suggestion})
  }

  render() {
    const {searchInput, suggestionsList} = this.state

    const searchResult = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="bg-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            className="google-logo"
            alt="google logo"
          />
          <div className="search-container">
            <div className="search-box">
              <img
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
                className="search-logo"
                alt="search icon"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
            </div>
            <ul className="ul-list">
              {searchResult.map(eachItem => (
                <SuggestionItem
                  suggestions={eachItem}
                  selectSuggestedItem={this.selectSuggestedItem}
                  searchResult={searchResult}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
