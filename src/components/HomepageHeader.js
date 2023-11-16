import React from 'react';


function App({ChangeHomepageState}) {
    return (
        <div className="App-header">
            <h3 className="HeaderButtons" onClick={()=>ChangeHomepageState("home")}>Home</h3>
            <h3 className="HeaderButtons" onClick={()=>ChangeHomepageState("about")}>About</h3>
            <h3 className="HeaderButtons" onClick={()=>ChangeHomepageState("contact")}>Contact</h3>
            <h3 className="HeaderButtons" onClick={()=>ChangeHomepageState("login")}>Sign in/up</h3>

        </div>
        );
}

export default App;