import React from 'react';
import styles from './SignupForm.module.scss';

class SignupForm extends React.Component {

    state = {
        name:'',
        email:'',
        password: '',
        passwordConfirmation:''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render () {
        return(
        <form className={styles.form}>
            <fieldset>
                <legend>Signup Form</legend>
                <label htmlFor="name">Full Name</label>
                <input 
                    id="name" 
                    name="name" 
                    type="text" 
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <label htmlFor="email">Email Address</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Create Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <label htmlFor="passwordConfirmation">Confirm Password</label>
                <input 
                    id="passwordConfirmation" 
                    name="passwordConfirmation" 
                    type="password" 
                    value={this.state.passwordConfirmation}
                    onChange={this.handleChange}
                />
                <button  type="submit">Submit</button>
            </fieldset>
        </form>
        );
    }
}

export default SignupForm