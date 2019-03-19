import ReactDOM from 'react-dom'
import React, {Component} from 'react'
import './poster.scss'


class Poster extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
      }
    }

    render() {
        return(
            <div className='poster' style={{backgroundImage: 'url(../../../images/logopng.png)'}}>
            </div>
        )
    }
}

export default Poster