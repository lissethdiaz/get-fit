import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-warning">
        <div className="container-fluid">
        <Link to="/" className="navbar-brand">Running Tracker</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercise List</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Create an Exercise</Link>
          </li>
          <li className="navbar-item">
          <Link to="/user" className="nav-link">Create a User</Link>
          </li>
        </ul>
        </div>
        </div>
      </nav>
    );
};

export default Navbar;