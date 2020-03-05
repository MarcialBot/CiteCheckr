import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import userService from '../../utils/userService';

import styles from './Navbar.module.scss';


const Navbar = (props) => {
    const conditionalUI = userService.getUser() ?
        <Fragment>
            <li>
                <Link to ='/campaigns'>Campaigns</Link>
            </li>
            <li>
                <Link to ='/profile'>Profile</Link>
            </li>
            <li>
                <Link to ='/logout' onClick={props.handleLogout}>Logout</Link>
            </li>
        </Fragment>
        :
        <Fragment>
            <li>
                <Link to ='/signup'>Sign Up</Link>
            </li>
            <li>
                <Link to ='/login'>Login</Link>
            </li>
        </Fragment>   

    return (
        <nav className={styles.navbar}>
            <Link to ='/'>
                <h1>CiteCheckr</h1>
            </Link>
            <ul>
                {conditionalUI}
            </ul>
        </nav>
    )
}

export default Navbar;