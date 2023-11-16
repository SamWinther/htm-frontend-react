import {React, useState} from 'react';
import style from './logInBox.css';
import LabelInput from './labelInput'
import jwt from 'jwt-decode'


function App({changeAppState , setUserinfoState}) {
    
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [rememberMe, setRememberMe] = useState(false);
    const [counter, setCounter] = useState(0);
    // const [AuthResult, setAuthResult] = useState();
    // setAuthResult(null);

    const handleClick = async() => {
        setCounter(counter+1)
        var fetchAddress =  `${process.env.REACT_APP_Server}API/Authentication`
        console.log(process.env.REACT_APP_Server)
        fetch(fetchAddress, {
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
            if(data.explain === "Login successfull.") {
                var token = data.token
                const tokenPayload = jwt(token);

                
                var userInfo = tokenPayload.prn
                var userRolesArray = JSON.parse(userInfo)
                
                console.log(userRolesArray)
                
                setUserinfoState({Username: username ,FirstName:tokenPayload.given_name, LastName:tokenPayload.family_name, ProjectRoles: userRolesArray, Organization: tokenPayload.Organization})
                changeAppState("Dashboard")
            }
        })
    }

    return (
        <div className="LoginPage">
            <h1 className={style.bigblue}>Log In</h1>

            <div className="LoginBoxContainer">


                <LabelInput labelName={"Username"} inputPlaceholder = {"Enter Username"} saveInputToState={setUsername} onEnter={handleClick} /> 
                <LabelInput labelName={"Password"} inputPlaceholder = {"Enter Password"} saveInputToState={setPassword} onEnter={handleClick} /> 
                
                <button className="LoginBoxButton" type="submit" onClick = {()=>{handleClick(username, password)}}>Login</button>
                
                <div className="LoginBoxLabels">
                    <label> <b>Remember me</b></label>
                    <input type="checkbox" checked="checked" name="remember" placeholder="Remember me" onChange={(e)=>{setRememberMe(!rememberMe)}}/>
                </div>
                
            </div>

        </div>
    )

}


export default App;