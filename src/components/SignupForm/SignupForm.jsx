import React from 'react';
import styles from './SignupForm.module.css';

class SignupForm extends React.Component {
    render () {
        return(
        <form>
            <input type="text"/>
            <input type="email"/>
            <input type="password"/>
            <input type="password"/>
            <button type="submit">Submit</button>
        </form>
        );
    }
}

export default SignupForm