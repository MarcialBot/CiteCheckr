import React from 'react';
import styles from './Footer.module.scss'

const Footer = (props) => {
    return (
        <footer className = {styles.footer}>
            <p>Copyright &copy; CiteCheckr {new Date().getFullYear()}</p>
        </footer>
    )
}

export default Footer;