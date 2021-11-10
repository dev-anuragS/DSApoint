import React from 'react'
import {NavLink} from 'react-router-dom'
import '../components/sass/navbar.scss'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand logoName" to="/">DSA Point</NavLink>
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
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
