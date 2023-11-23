import React from 'react';
// import style from '../App.css'
import image from '../images/risk.jpg'

function App() {
    return (
        <div className="AboutPage" style = {{backgroundImage:`url(${image})`}}>
            <h1>About HTM</h1>
            <p>HTM is an application that will help design control or risk analysis experts in the field of Medical Device industry to draft their Hazard Traceability Matrix.</p>
            <p> This application is designed based on ISO 14971:2019</p>
        </div>
    )
}

export default App;