import React from 'react'
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav className="nav-header">
            <Link className="nav-link-inner" to="/home">
                <li>Logo</li>
            </Link>
            <ul className="nav-link-outer">
                <Link className="nav-link-inner" to="/list">
                    <li>List</li>
                </Link>
                <Link className="nav-link-inner" to="/binding">
                    <li>Binding</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Nav
