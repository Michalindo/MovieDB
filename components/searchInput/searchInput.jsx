import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import './searchInput.scss'


class SearchInput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         searchValue: ""
      }
    }
    inputHandler = (e) => {
        this.setState({
            searchValue: e.target.value
        })
    }

    render() {
        return(
            <div className='search-input-container'>
            <input 
            name='search' 
            type='text' 
            value={this.state.searchValue} 
            onChange={this.inputHandler}
            placeholder ='TYPE MOVIE TITLE...'
            autoComplete = 'off'/>
            </div>
        )
    }
}

export default SearchInput