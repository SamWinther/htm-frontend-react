import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomepageHeader from "../components/HomepageHeader"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import LogIn from "../components/LogIn"


function App() {

    return (
        <Router>
            <HomepageHeader />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<LogIn />} />
            </Routes>
        </Router>
    )
    
}


export default App;