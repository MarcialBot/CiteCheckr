import React from 'react';
import styles from './LoginForm.module.scss';
import userService from '../../utils/userService';

class LoginForm extends React.Component {

    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            error: '',
            [e.target.name]: e.target.value
        });
    }

    getInitialState() {
        return {
        email:'',
        password: '',
        error: ''
        };
    };

    isFormValid = () => {
        return (
            this.state.email &&
            this.state.password
        )
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
        
        try {
            const { email, password } = this.state;
            await userService.login({ email, password });
            this.setState(this.getInitialState(), () => {
                this.props.handleSignupOrLogin();
                this.props.history.push('/campaigns');

            });
        } catch (error) {
        }
    }

    render () {
        return(
        <section className={styles.section}>
            {
                this.state.error && <p>{this.state.error}</p>
            }
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
                    <button disabled={!this.isFormValid()} className="btn"  type="submit">Log In</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default LoginForm;