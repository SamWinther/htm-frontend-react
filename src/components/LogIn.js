import React from 'react';
import style from './logIn.css';


function App() {
    return (
        <div className="LoginPage">
            <h1 className={style.bigblue}>Log In</h1>

            <div className="LoginBoxContainer">
                <label className="LoginBoxLabels" for="uname"><b>Username</b></label>
                <input className="LoginBoxInputs" type="text" placeholder="Enter Username" name="uname" required />
                <label className="LoginBoxLabels" for="psw"><b>Password</b></label>
                <input className="LoginBoxInputs" type="password" placeholder="Enter Password" name="psw" required />
                <button className="LoginBoxButton" type="submit">Login</button>
                <div className="LoginBoxLabels">
                    <label> <b>Remember me</b></label>
                    <input type="checkbox" checked="checked" name="remember" placeholder="Remember me" />
                </div>
                
            </div>

        </div>
    )
}

export default App;