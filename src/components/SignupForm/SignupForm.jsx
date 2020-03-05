import React from 'react';
import styles from './SignupForm.module.scss';
import userService from '../../utils/userService';

class SignupForm extends React.Component {

    state = this.getInitialState();

    getInitialState() {
        return {
        name:'',
        email:'',
        password: '',
        passwordConfirmation:'',
        error:'' 
        }
    };

    isFormValid = () => {
        return (
            this.state.name &&
            this.state.email &&
            this.state.password &&
            this.state.password === this.state.passwordConfirmation
        )
    }

    handleChange = e => {
        this.setState({
            error: '',
            ...{[e.target.name]: e.target.value}
        });
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
        
        try{
            const { name, email, password } = this.state;
            await userService.signup({name, email, password });
            this.setState(this.getInitialState(), () => {
                this.props.handleSignupOrLogin();
                this.props.history.push('/');
            });
        } catch (error) {
            this.setState({
                name:'',
                email:'',
                password: '',
                passwordConfirmation:'',
                error: error.message
            });
        }
    }

    render () {
        return(
            <section className={styles.form}>
                {
                    this.state.error && <p>{this.state.error}</p>
                }

                <form onSubmit={this.handleSubmit}>
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
                        <button disabled={!this.isFormValid()} className="btn"  type="submit">Submit</button>
                    </fieldset>
                </form>
            </section>
        );
    }
}

export default SignupForm;