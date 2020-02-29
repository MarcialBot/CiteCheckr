import React from 'react';
import styles from './Navbar.module.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to ='/'>
                <h1>CiteCheckr</h1>
            </Link>
            <ul>
                <li>
                    <Link to ='/Campaigns'>Campaigns</Link>
                </li>
                <li>
                    <Link to ='/Profile'>Profile</Link>
                </li>
                <li>Login</li>
                <li>Sign Up</li>
            </ul>
        </nav>
    )
}

export default Navbar;