import React from 'react';
import DropDownMenuHeaderItem from "./dropDownMenuHeaderItem"

function App({ButtonsName, ChangeHomepageState}) {
    return (
        <div className="dashboardHeader">
            <>
            {/* {console.log(ButtonsName)} */}
            {ButtonsName.map(element => { return( <DropDownMenuHeaderItem key={"ul-dashboardHeader"+element} className="dashboardHeaderButtons" menuName={element} /> ) })}
            </>
        </div>
        );
}

export default App;