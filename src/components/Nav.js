import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import { GrAction } from "react-icons/gr";

export default function Nav() {
  return (
    <>
      <div className="nav-container">
        <GrAction className="icon" />
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/projects">
          Projects
        </Link>
        <Link className="nav-link" to="/services">
          Services
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
        <Link className="nav-link" to="/about">
          About
        </Link>
      </div>
    </>
  );
}
