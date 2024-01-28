import React, { useState } from 'react';
import './App.css';
import HomePage from "./pages/Homepage";
import Dashboard from './pages/Dashboard';
import Cookies from 'js-cookie';
import jwt from 'jwt-decode'
// import Login from "./components/LogInBox";

function App() {
    const [AppState, changeAppState] = useState("homepage")
    const [userInfoState, setUserinfoState] = useState({Username: "",FirstName:"", LastName:"", ProjectRoles: [], Organization:""})

    // console.log(userInfoState)
    switch (AppState) {
        default:
            return (
                <HomePage key={"HomePageDefault"} stateToLogin={() => changeAppState("Home")} />
            )
        case "homepage":
            return (
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
                <HomePage key={"HomePageHomePage"} changeAppState={(toState) => changeAppState(toState)} setUserinfoState = {setUserinfoState} />
            )
        case "Dashboard":
            return (
                <Dashboard changeAppState={(toState) => changeAppState(toState)} userInfo={userInfoState}/>
            )

    }
}

export default App;
