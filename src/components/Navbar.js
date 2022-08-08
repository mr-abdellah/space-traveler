import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/img/planet.png';
import './styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h2>SpaceX Traveler</h2>
      </div>
      <ul className="navbar-links">
        <NavLink to="/">Rockets</NavLink>
        <NavLink to="/missions">Missions</NavLink>
        <div className="divider" />
        <NavLink to="/profile">My Profile</NavLink>
      </ul>
    </nav>
  );
}
