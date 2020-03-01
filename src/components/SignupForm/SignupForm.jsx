import React from 'react';
import styles from './SignupForm.module.scss';

class SignupForm extends React.Component {

    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getInitialState() {
        return {
        name:'',
        email:'',
        password: '',
        passwordConfirmation:''
        }
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState(this.getInitialState());
    }

    render () {
        return(
        <form onSubmit={this.handleSubmit} className={styles.form}>
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
                <button className="btn"  type="submit">Submit</button>
            </fieldset>
        </form>
        );
    }
}

export default SignupForm;