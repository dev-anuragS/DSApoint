import React from 'react'
import { NavLink } from 'react-router-dom'
import '../components/sass/navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand logoName" to="/">DSApoint</NavLink>
                <button className="navbar-toggler hamburger" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto linksName">
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" exact to="/login">Login / SignUp</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" exact to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Courses
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" exact to="/stack">Stack</NavLink>
                                <NavLink className="dropdown-item" exact to="/queue">Queue</NavLink>
                                <NavLink className="dropdown-item" exact to="/linkedlist">Linked List</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink className="dropdown-item" exact to="/codingPlatform">Coding Platform</NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
