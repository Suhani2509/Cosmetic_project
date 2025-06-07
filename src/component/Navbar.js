import React from 'react'
import './nav.css'
import Img from '../shared/commondata'


const Navbar = () => {
    return (
        <div> 
           <img src={Img.logo} alt='logo' height="100px" width="190px"/>
           <p id='brand-name'>Beauty Blossom Cosmetics</p>
           <div id='navbar'>
            <ul>
                <a ><li>Home</li></a>
                <a ><li>Products</li></a>
                <a><li>About us</li></a>
                <a><li>Contact</li></a>
                <a><li>Customer support</li></a>
            </ul>
           </div>
            
        </div>
    )
}

export default Navbar
