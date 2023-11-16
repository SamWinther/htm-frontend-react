import React from 'react';
// import React, { useState } from 'react';
import DashboardHeader from '../components/DashboardHeader.js'
// import DropDownMenuHeaderItem from "../components/dropDownMenuHeaderItem"

function Dashboard({appState, userInfo}) {

    // const [activeProject, ChangeActiveProject] = useState()

    console.log(userInfo)
    return (
        <>
            <DashboardHeader ButtonsName={["start", "end", "procject"]} />

            Welcome {userInfo.FirstName}, which project you like to work on?
            <ul className="ProjectsList" key={"ul-Projects"}>
                {userInfo.ProjectRoles.map(projectrole => {
                    return(<li key = {"li_project"+projectrole.Role+projectrole.Projectid}> {projectrole.Project+" with the ID "+projectrole.Projectid}</li>)
                })}
            </ul>
            <p>organization</p>
            <p>{userInfo.Organization}</p>
            <p>firstName</p>
            <p>{userInfo.FirstName}</p>
            <p>given_name</p>
            <p>{userInfo.LastName}</p>
            <p>{Object.keys(userInfo)}</p>
        </>
    );
}


export default Dashboard;