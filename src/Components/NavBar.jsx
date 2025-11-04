import React from "react";
import "./Navbar.css";

export const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-logo">Student Dashboard</div>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Students</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};
