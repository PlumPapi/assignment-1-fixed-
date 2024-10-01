import React from 'react';
import { Link } from 'react-router-dom';
export default function Layout() {
  return (
    <>
      <h1>My Portfolio</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Project</Link>| <Link to="/contact">Contact</Link> | <Link to="/Services">Services</Link>
      </nav>
         <br/>
      <hr />
      
    </>
    
  );
}
