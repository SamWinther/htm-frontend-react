import React from 'react';
import Cookies from 'js-cookie';


function App({changeAppState}) {
    return (
        <button onClick={(e) => {
            Cookies.remove('authToken');
            changeAppState("homepage");
        }
        }>Log Out</button>
    )
}

export default App;