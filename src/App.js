import React, { useState } from 'react';
import './App.css';
import HomePage from "./pages/Homepage";
import Login from "./pages/login";

function App() {
    const [AppState, ChangeAppState] = useState("homepage")

    switch (AppState) {
        default:
            return (
                <HomePage stateToLogin={() => ChangeAppState("Home")} />
            )
        case "homepage":
            return (
                <HomePage stateToLogin={() => ChangeAppState("Home")} />
            )
        case "login":
            return (
                <Login />
            )
        case "Dashboard":
            return (
                <HomePage stateToLogin={() => ChangeAppState("Contact")} />
            )

    }

    //const fetchUserData = () => {
    //    try {
    //        fetch("https://localhost:7085/api/risks")
    //        .then(response => {

    //          return response.json()
    //        })
    //        .then(data => {
    //          setUsers(data)
    //        })
    //    } catch (error) {
    //      console.log("ererererer")
    //      console.log(error)
    //    }

    //}

    //useEffect(() => {
    //    fetchUserData()
    //}, [])
    //<ul>
    //  <div key="headers" className="container">
    //    {/* from here */}
    //    <div key={"hazard"} className='hazard'>
    //      Hazard
    //    </div>
    //    <div key={"designChar"} className='designChar'>
    //      Design Characteristics
    //    </div>
    //    <div key={"lifeCycle"} className='lifeCycle'>
    //      Lifecycle
    //    </div>
    //    <div key={"scenario"} className='scenario'>
    //      scenario
    //    </div>
    //    <div key={"hazardSit"} className='hazardSit'>
    //      hazardSit
    //    </div>
    //    <div key={"harm"} className='harm'>
    //      harm
    //    </div>
    //    <div key={"severity"} className='oneCharacter'>
    //      Prob_pre
    //    </div>
    //    <div key={"severity_pre2"} className='oneCharacter'>
    //      severity_pre
    //    </div>
    //    <div key={"risk_pre"} className='twoCharacter'>
    //      risk_pre
    //    </div>
    //    <div key={"rcmRational"} className='rcmRational'>
    //      rcmRational
    //    </div>
    //    <div key={"rcmBox"} className='rcmBox'>
    //        RCMs
    //    </div>
    //    <div key={"Prob_past"} className='oneCharacter'>
    //      Prob_past
    //    </div>
    //    <div key={"severity_past"} className='oneCharacter'>
    //      severity_past
    //    </div>
    //    <div key={"risk_past"} className='twoCharacter'>
    //      risk_past
    //    </div>
    //    <div key={"complete"} className='twoCharacter'>
    //      Accepted
    //    </div>
    //  </div>
      
    //  {/* Up to hereKC */}




    //  {users.map(user => (
    //    <div key={user.Id} className="container">
    //      <div key={user.Id+"hazard"} className='hazard'>
    //        {user.hazard}
    //      </div>
    //      <div key={user.Id+"designChar"} className='designChar'>
    //        {user.designChar}
    //      </div>
    //      <div key={user.Id+"lifeCycle"} className='lifeCycle'>
    //        {user.lifeCycle}
    //      </div>
    //      <div key={user.Id+"scenario"} className='scenario'>
    //        {user.scenario}
    //      </div>
    //      <div key={user.Id+"hazardSit"} className='hazardSit'>
    //        {user.hazardSit}
    //      </div>
    //      <div key={user.Id+"harm"} className='harm'>
    //        {user.harm}
    //      </div>
    //      <div key={user.Id+"severity"} className='oneCharacter'>
    //        {user.Prob_pre}
    //      </div>
    //      <div key={user.Id+"severity_pre2"} className='oneCharacter'>
    //        {user.severity_pre}
    //      </div>
    //      <div key={user.Id+"risk_pre"} className='twoCharacter'>
    //        {user.risk_pre}
    //      </div>
    //      <div key={user.Id+"rcmRational"} className='rcmRational'>
    //        {user.rcmRational}
    //      </div>
    //      <div key={user.Id+"rcmBox"} className='rcmBox'>
    //        <div key={"RCM1"} className='rcm'>
    //          RCM11
    //        </div>
    //        <div key={"RCM2"} className='rcm'>
    //          Lorem ipsum sldffg asdfsf adsf sf asdfe dfat4 t x  rsth srt fgs srt  s s tsghr shrtyj gsryut  yertyyfghet  shy et sddsg sd åstår- læ rolxz-. rælk ø øælkg rlk  dæle gp  lkgøptorg  øælsgjk 
    //        </div>
    //        <div key={"RCM3"} className='rcm'>
    //          RCM3
    //        </div>
    //      </div>
    //      <div key={user.Id+"Prob_past"} className='oneCharacter'>
    //        {user.probPast}
    //      </div>
    //      <div key={user.ID+"severity_past"} className='oneCharacter'>
    //        {user.severity_past}
    //      </div>
    //      <div key={user.ID+"risk_past"} className='twoCharacter'>
    //        {user.risk_past}
    //      </div>
    //      <div key={user.ID+"complete"} className='twoCharacter'>
    //        ok
    //      </div>
    //    </div>
    //  ))}

    //  </ul>
    /*);*/
}

export default App;
