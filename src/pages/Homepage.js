import React , { useState } from 'react';

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomepageHeader from "../components/HomepageHeader"
import Home from "../components/Home"
import About from "../components/01-About"
import Contact from "../components/Contact"
import LogIn from "../components/LogInBox"
import Cookies from 'js-cookie';
import jwt from 'jwt-decode'


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
            let token = Cookies.get('authToken');
            if(token) {
                let tokenPayload = jwt(token);
                
                let tokenExpire = tokenPayload.exp - 540;
                console.log(tokenExpire);
                
                let tokenExpireDate = new Date(tokenExpire*1000);
                console.log("exxxxxxxxxxxxxxxxxppppppppppppirrrrrrrrrrrrrrrrrreeeeeeeeeeee          DDDDDDDDDDDaaaaaattttteeeeeee")
                console.log(tokenExpireDate);

                if(tokenExpireDate > Date.now()){
                    var userInfo = tokenPayload.prn
                    var userRolesArray = JSON.parse(userInfo)
    
                    console.log("The token was avialable.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
                    
                    setUserinfoState({Username: "UserName is not set in Token Payload." ,FirstName:tokenPayload.given_name, LastName:tokenPayload.family_name, ProjectRoles: userRolesArray, Organization: tokenPayload.Organization})
                    changeAppState("Dashboard")
                    return (<></>)
                } else {
                    Cookies.remove('authToken')
                }
            }

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