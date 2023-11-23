import React , { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomepageHeader from "../components/HomepageHeader"
import Home from "../components/Home"
import About from "../components/01-About"
import Contact from "../components/Contact"
import LogIn from "../components/LogInBox"


function App({changeAppState , setUserinfoState}) {
    const [homepageState, ChangeHomepageState] = useState("Home")
    switch (homepageState) {
        default:
            return (
                <div>
                    <HomepageHeader ChangeHomepageState={ChangeHomepageState} />
                    <Home />
                </div>
            )
        case "home":
            return (
                <div>
                    <HomepageHeader ChangeHomepageState={ChangeHomepageState}/>
                    <Home />
                </div>
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
            )
        case "about":
            return (
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
                <div>
                    <HomepageHeader ChangeHomepageState={ChangeHomepageState}/>
                    <About />
                </div>
            )
        case "contact":
            return (
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
                <div>
                    <HomepageHeader ChangeHomepageState={ChangeHomepageState}/>
                    <Contact />
                </div>
            )
        case "login":
            return (
                // <HomePage stateToDashboard={() => ChangeAppState("Dashboard")} />
                <div>
                    <HomepageHeader ChangeHomepageState={ChangeHomepageState}/>
                    <LogIn changeAppState={changeAppState} setUserinfoState = {setUserinfoState} />
                </div>
            )
    }
    
}


export default App;