import {React} from 'react';

function MakeProjectsList ({userInfo, setActiveProject, setDashboardState, isSuperUser, isAdmin}) {

  if(!isAdmin && !isSuperUser) {
    return (
      <>
        Welcome {userInfo.FirstName}, which prroject you like to work on?
        <ul className="ProjectsList">
        {userInfo.ProjectRoles.map((ProjectRole,index) => {
              return(
                <ProjectAsAnItem
                key={"ul-Projects"+index}
                ProjectRole = {ProjectRole}
                index = {index}
                setActiveProject = {setActiveProject}
                setDashboardState = {setDashboardState}
                />
              )
        })}
        </ul>
      </>
    )
  } else if(isAdmin){
    return(
      <p>You are Admin</p>
    )
  } else if(isSuperUser){
    return (
      <>
        Welcome {userInfo.FirstName}, whichbproject you like to work on?
        <ul className="ProjectsList">
        {userInfo.ProjectRoles.map((ProjectRole,index) => {
              return(
                <ProjectAsAnItem
                key={"ul-Projects"+index}
                ProjectRole = {ProjectRole}
                index = {index}
                setActiveProject = {setActiveProject}
                setDashboardState = {setDashboardState}
                />
              )
        })}
        </ul>
        <p >This is the SuperUser panel</p>
      </>
    )
  }
}




function ProjectAsAnItem({ProjectRole, index, setActiveProject, setDashboardState}) {
  return (
    <li
        // key = {"li_project"+ProjectRole.Role+ProjectRole.Projectid}
        // key = {"li_project"+index}
        onClick={()=>{
            setActiveProject(index)
            setDashboardState("Project")
        }}
    >
          {ProjectRole.Project+" with the ID "+ProjectRole.Projectid+ " as "+ProjectRole.Role}
    </li>
  )
};

export default MakeProjectsList;
