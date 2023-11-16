//Dropdown menu sub item.
import React from 'react';


function App({itemName, onClickAction}) {
    return (
        <div className="dropdown-menu">
            <ul>
                <li>Menu 1</li>
                <li>Menu 2</li>
                <li>Menu 3</li>
            </ul>
        </div>
    );
}

export default App;