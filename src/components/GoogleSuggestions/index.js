// Write your code here
import {Component} from 'react'
import './index.css'
import SuggestionItem from '../SuggestionItem/index'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  //   selectSuggestedItem = (uniqueId, searchResult) => {
  //     const {searchInput} = this.state
  //     const selectedItem = searchResult.filter(each => each.id === uniqueId)
  //     this.setState({searchInput: selectedItem.suggestion})
  //   }

  render() {
    const {suggestionsList} = this.props

    const {searchInput} = this.state

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
