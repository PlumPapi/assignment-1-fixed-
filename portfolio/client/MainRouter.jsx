import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import './App.css';

const MainRouter = () => {
        return (<div>
                <Layout/>
                <Routes>
                        
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/about" element={<About />} />
                        <Route exact path="/education" element={<Education />} />
                        <Route exact path="/project" element={<Project />} />
                        <Route exact path="/contact" element={<Contact />} />
                        
                </Routes>
        </div>
        )
}
export default MainRouter
