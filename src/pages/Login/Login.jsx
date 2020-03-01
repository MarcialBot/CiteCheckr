import React from 'react';
import styles from './Login.module.scss';
import LoginForm from '../../components/LoginForm/LoginForm';

const Login = (props) => {
    return(
        <main>
            <h1>Login</h1>
            <LoginForm />
        </main>
    )
}

export default Login;