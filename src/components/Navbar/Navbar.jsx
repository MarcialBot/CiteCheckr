import React from 'react';
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom';

const Navbar = (props) => {
    return (
        <nav className={styles.navbar}>
            <Link to ='/'>
                <h1>CiteCheckr</h1>
            </Link>
            <ul>
                <li>
                    <Link to ='/campaigns'>Campaigns</Link>
                </li>
                <li>
                    <Link to ='/crofile'>Profile</Link>
                </li>
                <li>
                    <Link to ='/login'>Login</Link>
                </li>
                <li>
                    <Link to ='/signup'>Sign Up</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;