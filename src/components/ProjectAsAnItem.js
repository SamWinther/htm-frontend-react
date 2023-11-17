import {React} from 'react';

function ProjectAsAnItem({ProjectRole, index, setActiveProject, serDashboardState}) {
  return (
    <li 
        key = {"li_project"+ProjectRole.Role+ProjectRole.Projectid}
        onClick={()=>{
            setActiveProject(index)
            serDashboardState("Project")
        }}
    >
          {ProjectRole.Project+" with the ID "+ProjectRole.Projectid+ " as "+ProjectRole.Role}
    </li>
  )
};

export default ProjectAsAnItem;
