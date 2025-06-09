import React from 'react';
import Img from '../shared/commondata';
import Products from './Products';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
            <a className="navbar-brand" href="#">
                <img 
                    src={Img.logo} 
                    alt="Logo" 
                    style={{ height: '80px', objectFit: 'contain' }} 
                />
            </a>

            <button 
                className="navbar-toggler" 
                type="button" 
                data-toggle="collapse" 
                data-target="#navbarNavDropdown" 
                aria-controls="navbarNavDropdown" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                {/* Wrap links and search in a flex container */}
                <div className="d-flex w-100">
                    {/* Navigation links */}
                    <ul className="navbar-nav">
                        <li className="nav-item active mx-2">
                            <a className="nav-link" href="#">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item mx-2">
                        <Link to="product"><p style={{color:"black", textDecoration:"none"}}>Products</p></Link>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Brand</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#">Offers</a>
                        </li>
                    </ul>

                    {/* Search bar aligned right */}
                    <form className="form-inline ml-auto d-flex">
                        <input 
                            className="form-control mr-2" 
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
