import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomepageHeader from "../components/HomepageHeader"
import Home from "../components/Home"
import About from "../components/About"
import Contact from "../components/Contact"
import LogIn from "../components/LogIn"
import Dashboard from "../pages/Dashboard"


function App() {

    return (
        <Router>
            <HomepageHeader />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<LogIn />} />
                <Route path='/dashboard' element={(<Dashboard />)} />
            </Routes>
        </Router>
    )
    
}


export default App;