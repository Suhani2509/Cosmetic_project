import React from 'react';
import { Link } from 'react-router-dom';
import Img from '../shared/commondata';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <Link className="navbar-brand" to="/">
                <img
                    src={Img.logo}
                    alt="Logo"
                    style={{ height: '80px', objectFit: 'contain' }}
                />
            </Link>

            <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <div className="d-flex w-100">
                    <ul className="navbar-nav">
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/home" style={{fontSize:"20px", fontWeight:"700"}} >Home</Link>
                        </li>
                        <li className="nav-item mx-2">
                            <Link className="nav-link" to="/about" style={{fontSize:"20px", fontWeight:"700"}}>About</Link>
                        </li>

                        {/* Dropdown menu */}
                        <li className="nav-item dropdown mx-2">
                            <Link
                                className="nav-link dropdown-toggle"
                                to="#"
                                
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                                style={{fontSize:"20px", fontWeight:"700"}}
                            >
                                Products
                            </Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li>
                                    <Link className="dropdown-item" to="/lipstick">Lipstick</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/blush">Blush</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/foundation">Foundation</Link>
                                </li>
                                <li>
                                    <Link className="dropdown-item" to="/eyeshadow">Eyeshadow</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    {/* Search bar aligned to right */}
                    <form className="form-inline ml-auto d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                        />
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
