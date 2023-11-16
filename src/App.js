import React, { useState } from 'react';
import './App.css';
import HomePage from "./pages/Homepage";
import Dashboard from './pages/Dashboard';
// import Login from "./components/LogInBox";

function App() {
    const [AppState, ChangeAppState] = useState("homepage")
    const [userInfoState, setUserinfoState] = useState({Username: "",FirstName:"", LastName:"", ProjectRoles: [], Organization:""})

    // console.log(userInfoState)
    switch (AppState) {
        default:
            return (
                <HomePage stateToLogin={() => ChangeAppState("Home")} />
            )
        case "homepage":
            return (
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
                <HomePage changeAppState={(toState) => ChangeAppState(toState)} setUserinfoState = {setUserinfoState} />
            )
        case "Dashboard":
            return (
                <Dashboard appState={ChangeAppState} userInfo={userInfoState}/>
            )

    }
}

export default App;
