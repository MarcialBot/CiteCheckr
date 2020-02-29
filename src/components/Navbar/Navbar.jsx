import React from 'react';
import styles from './Navbar.module.css'

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <h1>CiteCheckr</h1>
            <ul>
                <li>Profile</li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar;