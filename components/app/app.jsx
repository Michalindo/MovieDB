import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import {AppContext} from './appContext'
import MovieLogo from '../movieLogo/movieLogo.jsx'
import SearchInput from '../searchInput/searchInput.jsx'
import Poster from '../searchResult/poster/poster.jsx'
import Description from '../searchResult/description/description.jsx'
import './app.scss'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movieID: 297802,
            poster: "",
            backdrop: "",
            movieTitle : "",
            tags: "",
            overview: "",
            genre: [],
            producers: [],
            oryginalRelase: "" ,
            runtime: 0,
            budget: 0,
            voteAverage: 0.0,
            }
        }


        getdata = ()=> {
            let url = `https://api.themoviedb.org/3/movie/${this.state.movieID}?&api_key=cfe422613b250f702980a3bbf9e90716`
            fetch(url).then(resp => resp.json() ).then(resp => this.setState({
                movieID: resp.id,
                poster: resp.poster_path,
                backdrop: resp.backdrop_path,
                movieTitle : resp.title,
                tags: resp.tagline,
                overview: resp.overview,
                genre: resp.genres,
                producers: resp.production_companies,
                oryginalRelase: resp.release_date,
                runtime: resp.runtime,
                budget: resp.budget,
                voteAverage: resp.vote_average
                })
            )
        }
    
    componentDidMount() {    
        this.getdata()
    }
    
    componentDidUpdate(prevProps, prevState) {
        if (prevState.movieID !== this.state.movieID) {
            this.getdata()
        }
    }

    updateMovieID = (e) => {
        this.setState({
            movieID: Number(e)
        })
    }

    render() {
        const {Provider} = AppContext;
        const movieID = this.state.movieID;
        const updateMovieID = this.updateMovieID;
        return (
            <Provider value={{movieID, updateMovieID}}>
                <div id ='wrapper' style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280${this.state.backdrop})`}}>
                    <div className='container' >
                        <MovieLogo/>
                        <SearchInput/>
                        <Poster data = {this.state}/>
                        <Description data = {this.state}/>
                    </div>
                </div>
            </Provider>
        )
    }
}

export default App