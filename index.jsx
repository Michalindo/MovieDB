// import './scss/style.scss'
import App from './components/app/app.jsx'
import React from 'react'
import ReactDOM from 'react-dom'
import './scss/style.scss'



document.addEventListener('DOMContentLoaded', function(){



    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );


})