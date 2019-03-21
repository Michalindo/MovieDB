import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import './description.scss'


class Description extends Component {
    constructor(props) {
      super(props)
    }


    render() {
        let {movieTitle, tags, overview, genre, producers, oryginalRelase,
            runtime, budget, voteAverage} = this.props.data 


        if (movieTitle !== "") {
            if (tags === null) {
                tags = "NO TAGLINE AVAILABLE"
            }
            if (overview === null) {
                overview = "NO OVERVIEW AVAILABLE"
            }
            if (runtime === null) {
                runtime = "-"
            }
            if (voteAverage === undefined || voteAverage === 0 ) {
                voteAverage = "- "
            }
            if (budget === 0 ) {
                budget = " -"
            }
    
            return(
                <div className='desc'>
                    <div className="desc-overview">
                        <h1 className='light-color'>{movieTitle}</h1>
                        <p className='desc-overview-tagline primary-color'>{tags}</p>
                        <p className='desc-overview-about light-color'>{overview}</p>
                    </div>
                    <div className="additional-info">
                        <p className ='genre-tags primary-color'>{arrayToString(genre)}</p>
                        <p className ='producers-list light-color'>{arrayToString(producers)}</p>
                        <div className='relase-info'>
                            <div className='oryginal-relase'>
                                <span className ='info-title light-color'>Oryginal Relase</span>
                                <span className='infoValue primary-color'>{oryginalRelase}</span>
                            </div>
                            <div className='running-time'>
                                <span className ='info-title light-color'>Running Time</span>
                                <span className='infoValue primary-color'>{calculateRunTime(runtime)}</span>
                            </div>
                            <div className='box-office'>
                                <span className ='info-title light-color'>Box Office</span>
                                <span className='infoValue primary-color'>{`$`+budget}</span>
                            </div>
                            <div className='vote-average'>
                                <span className ='info-title light-color'>Vote Average</span>
                                <span className='infoValue primary-color'>{voteAverage}/10</span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='desc'></div>
            )
        }
    }
}

function arrayToString(array) {
    let newArray = [],
        newString;
    array.forEach(element => {
        newArray.push(element.name)     
    });
        
    newString = newArray.join(", ")
    return newString
}


function calculateRunTime(value) {
    let hours,
        minutes
    hours = Math.floor(value/60)
    minutes = value - hours*60

    return `${hours}h ${minutes}min`
}
export default Description