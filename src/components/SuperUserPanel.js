import React from 'react';

function App({isSuperUser}) {
    if (isSuperUser) {
        return (
            <p >This is a very advanced the SuperUser panel</p>
        )
    } else {
        return(<></>)
    }
}

export default App;