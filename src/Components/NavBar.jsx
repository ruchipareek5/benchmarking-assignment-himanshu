import React from "react";
import { Link } from "react-router-dom"; 
import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Student Dashboard</div>

      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      
        <li>
          <Link to="/add-student">Add Student</Link> 
        </li>
        
      </ul>
    </nav>
  );
};


