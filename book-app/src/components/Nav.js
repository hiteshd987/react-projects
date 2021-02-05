import React from 'react';
import { Link } from 'react-router-dom';
import "./Nav.css";

function Nav() {
    return (
        <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-warning">
            <div>
                <Link to="/">Home</Link>
                <Link to="/book/add" className="nav-addBook-btn">
                    Add Contact
                </Link>
            </div>
        </nav>
    )
}

export default Nav
