import {React, useState} from 'react';
import style from './logIn.css';


function App() {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [counter, setCounter] = useState(0);
    // const [AuthResult, setAuthResult] = useState();
    // setAuthResult(null);

    const handleClick = async(username, password) => {
        console.log("Authentication is called.")
        setCounter(counter+1)
        console.log(counter)
        fetch("https://localhost:7085/API/Authentication", {
            method: 'get',
            headers: {
                'username': username,
                'password': password
            }
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data.explain)
        })
    }

    // switch (AuthResult) {
    //     case null:
            return (
                <div className="LoginPage">
                    <h1 className={style.bigblue}>Log In</h1>
        
                    <div className="LoginBoxContainer">
                        <label className="LoginBoxLabels" id="usernameBox"><b>Username</b></label>
        
                        <input className="LoginBoxInputs" type="text" placeholder="Enter Username" onChange={(e)=>setUsername(e.target.value)} name="uname" required />
                        
                        <label className="LoginBoxLabels"><b>Password</b></label>
                        
                        <input className="LoginBoxInputs" type="password" placeholder="Enter Password" onChange={(e)=>setPassword(e.target.value)} name="psw" required />
                        
                        <button className="LoginBoxButton" type="submit" onClick = {()=>{handleClick(username, password)}}>Login</button>
                        
                        <div className="LoginBoxLabels">
                            <label> <b>Remember me</b></label>
                            <input type="checkbox" checked="checked" name="remember" placeholder="Remember me" onChange={(e)=>{setRememberMe(!rememberMe)}}/>
                        </div>
                        
                    </div>
        
                </div>
            )
    //     case true:
    //         return(AuthResult)

    // }

}


export default App;