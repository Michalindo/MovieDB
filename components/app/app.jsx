import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import MovieLogo from '../movieLogo/movieLogo.jsx'
import SearchInput from '../searchInput/searchInput.jsx'
import Poster from '../searchResult/poster/poster.jsx'
import './app.scss'

class App extends Component {
    render() {
        return (
            <div className='container'>
            <MovieLogo/>
            <SearchInput/>
            <Poster/>
            </div>
        )
    }
}

export default App