import React from 'react';
import styles from './LoginForm.module.scss';

class LoginForm extends React.Component {

    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    getInitialState() {
        return {
        email:'',
        password: '',
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
                <legend>Login Form</legend>
                <label htmlFor="email">Email Address</label>
                <input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    name="password" 
                    type="password" 
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button className="btn"  type="submit">Log In</button>
            </fieldset>
        </form>
        );
    }
}

export default LoginForm;