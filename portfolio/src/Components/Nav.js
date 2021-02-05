import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

function Nav() {
    return (
        <nav className="navmain">
            <ul className="navmain__ul">
                <Link className="navmain__links" to="/skills">
                    <li>Skills</li>
                </Link>
                <Link className="navmain__links" to="/projects">
                    <li>Projects</li>
                </Link>
                <Link className="navmain__links" to="/contact">
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
