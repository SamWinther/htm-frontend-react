import React from 'react';
import image from '../images/risk-managements.jpg'
// import style from '../App.css'
function App() {
    

    return (
        <div className="WelcomePage" style = {{backgroundImage:`url(${image})`}}>
            <h3>Risk management process can be fun.</h3>
            <h2>We would take care of the format, therefore, you can </h2>
            <h1>Focus on your product safety</h1>
        </div>
    )
}

export default App;