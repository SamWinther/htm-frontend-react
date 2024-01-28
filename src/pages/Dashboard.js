import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.js'
import MakeProjectsList from '../components/MakeProjectsList.js'
import checkUserforSpecialRole from '../utils/CheckUserforSpecialRole.js';
import Cookies from 'js-cookie';
import LogoutButton from "../components/logoutButton.js"
// import Cookies from 'js-cookie';

// import DropDownMenuHeaderItem from "../components/dropDownMenuHeaderItem"

function Dashboard({changeAppState, userInfo}) {

    const [activeProject, setActiveProject] = useState(0)
    const [dashboardState, setDashboardState] = useState("")
    const [isAdmin, setIsAdmin] = useState(checkUserforSpecialRole(userInfo, "Admin"))
    const [isSuperUser, setIsSuperUser] = useState(checkUserforSpecialRole(userInfo, "SuperUser"))
    if(isAdmin || isSuperUser) {
        userInfo.ProjectRoles = userInfo.ProjectRoles.filter(ProjectRole => ProjectRole.Role !== "Admin" && ProjectRole.Role !== "SuperUser")
    }

    switch (dashboardState) {
        default:
            return (
                <>
                    <DashboardHeader ButtonsName={["start", "end", "procject"]} />
                    <MakeProjectsList 
                        userInfo ={userInfo} 
                        setActiveProject = 
                        {setActiveProject} 
                        setDashboardState={setDashboardState}
                        isSuperUser = {isSuperUser}
                        isAdmin = {isAdmin}
                    />
                    <LogoutButton changeAppState={ (toState) => changeAppState(toState)} />
                </>
            );

        case "Project":
            //this is the a normal user panel
            return(
                <>
                    <p>the project is choosen {userInfo.ProjectRoles[activeProject].Project}</p>
                    <p>the user is having {userInfo.ProjectRoles[activeProject].Role} Role</p>
                    <button onClick={()=>{setDashboardState("")}}>Return Back to the Dashboard</button>
                </>

            )
    }
}


export default Dashboard;