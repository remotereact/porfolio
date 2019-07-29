import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
        <div className="container">

        <nav id='navbar'>
            <ul>
                <li>Home</li>
                <li>Sections</li>
                <li>Profiles</li>
                <li>About me!</li>
                <li>Contact me!</li>
            </ul>
        </nav>
        </div>
    )
};
export default Navbar;