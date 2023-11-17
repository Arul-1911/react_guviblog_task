import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'; // Import your CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light navbarclass">
      <div className="container"> {/* Added a container for centering */}
        
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto"> {/* Added mx-auto for centering */}
          <li className="nav-item">
          <NavLink exact to='/' className="nav-link" activeClassName="active-link">All</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/Full Stack Development' className="nav-link" activeClassName="active-link">Full Stack Development</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/data_science' className="nav-link" activeClassName="active-link">Data Science</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/cyber_security' className="nav-link" activeClassName="active-link">Cyber Security</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to='/career' className="nav-link" activeClassName="active-link">Career</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
