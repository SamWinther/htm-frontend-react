import React , {useState} from 'react';
import DropdownMenu from "./dropDownMenuSubItem"


function App({menuName, menuItems}) {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleMouseEnter = () => {
        setDropdownVisible(true);
      };
    
      const handleMouseLeave = () => {
        setDropdownVisible(false);
      };
    return (
        <>
        <h3 
            className="dashboardHeaderButtons"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            >{menuName}</h3>
            {isDropdownVisible && <DropdownMenu />}
        </>
    );
}

export default App;