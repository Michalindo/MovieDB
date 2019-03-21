import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import './poster.scss'


class Poster extends Component {
    render() {
        let posterUrl = `https://image.tmdb.org/t/p/w500${this.props.data.poster}`
        return(
            <div className='poster'>
                <img src={posterUrl}></img>
            </div>
        )
    }
}

export default Poster