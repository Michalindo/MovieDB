import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import {AppContext} from '../app/appContext'
import './searchInput.scss'


class SearchInput extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        searchValue: "",
        searchValueList: [],
        hintsDisplay: 'none',
      }
    }


    inputHandler = (e) => {
        this.setState({
            searchValue: e.target.value
        }, this.autoComplete)



    }
    autoComplete = () => {
        let url = `https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716&query=${this.state.searchValue}` // sprawdzic api ograniczenie do 5 wynikow
        fetch(url).then(resp => resp.json()).then(resp => this.setState({
            searchValueList: resp.results.slice(0,5)
        }));
        this.handleHints()
    }

    clearSearch = () => {
        this.setState({
            searchValue: "",
            searchValueList: [],
        })
    }

    handleHints = () => {
        if (this.state.searchValue.length === 0 ){
            this.setState({
                hintsDisplay: 'none'
            })
        } else {
            this.setState({
                hintsDisplay: 'block'
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchValue !== this.state.searchValue) {
            this.setState({
                hintsDisplay: 'none'
            })
        }
    }

    render() {
        console.log(this.state.searchValueList.length)
        const {Consumer} = AppContext;
        return(
            <Consumer>
                {({movieID, updateMovieID}) => (
                <div className='search-input-container'>
                    <input 
                    name='search' 
                    type='text'
                    value = {this.state.searchValue} 
                    onChange={this.inputHandler}
                    placeholder ='TYPE MOVIE TITLE...'
                    autoComplete = 'off'/>
                    <div className="suggestions" style={{display: this.state.hintsDisplay}}>
                        {this.state.searchValueList.map((element) => <p onClick={()=> {updateMovieID(element.id); this.clearSearch()}} key={element.id} >{element.title} - {element.release_date.slice(0,4)}</p>)}
                    </div>
                </div>
                )}
            </Consumer>
        )
    }
}

export default SearchInput