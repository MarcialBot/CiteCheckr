import React from 'react';
import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav>
            <h1>CiteCheckr</h1>
            <ul>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar;