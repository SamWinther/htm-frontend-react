import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.js'
import ProjectAsAnItem from '../components/ProjectAsAnItem.js'
// import DropDownMenuHeaderItem from "../components/dropDownMenuHeaderItem"

function Dashboard({appState, userInfo}) {

    const [activeProject, setActiveProject] = useState(0)
    const [dashboardState, serDashboardState] = useState("")

    console.log(userInfo)
    switch (dashboardState) {
        default:
            return (
                <>
                    <DashboardHeader ButtonsName={["start", "end", "procject"]} />

                    Welcome {userInfo.FirstName}, which project you like to work on?
                    <ul className="ProjectsList" key={"ul-Projects"}>
                        {userInfo.ProjectRoles.map((ProjectRole,index) => {
                            return(
                                <ProjectAsAnItem 
                                    ProjectRole = {ProjectRole}
                                    index = {index}
                                    setActiveProject = {setActiveProject}
                                    serDashboardState = {serDashboardState}
                                />
                            )
                        })}
                    </ul>
                    <p>organization</p>
                    <p>{userInfo.Organization}</p>
                    <p>firstName</p>
                    <p>{userInfo.FirstName}</p>
                    <p>given_name</p>
                    <p>{userInfo.LastName}</p>
                    <p>{Object.keys(userInfo)}</p>
                    {/* <p>Active project is {userInfo.projectroles[activeProject].Project}</p> */}
                    <p>Active project is {userInfo.ProjectRoles[activeProject].Project}</p>
                    {/* <p>Active rRole is {activeRole}</p> */}

                </>
            );
        case "Project":
            return(
                <>
                    <p>the project is choosen {userInfo.ProjectRoles[activeProject].Project}</p>
                    <button onClick={()=>{serDashboardState("")}}>Return Back to the Dashboard</button>
                </>

            )
    }
}


export default Dashboard;