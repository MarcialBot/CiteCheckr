import React from 'react';
import styles from './WebsiteForm.module.scss';
import userService from '../../utils/userService';
import websiteService from '../../utils/websiteService';


class WebsiteForm extends React.Component {

    state = this.getInitialState();

    handleChange = e => {
        this.setState({
            error: '',
            [e.target.name]: e.target.value
        });
    }

    getInitialState() {
        return {
        name:'',
        error: ''
        };
    };

    isFormValid = () => {
        return (
            this.state.name
        )
    }

    handleSubmit = async e => {
        e.preventDefault();
        if(!this.isFormValid()) return;
        
        try {
            const { name } = this.state;
            const addedBy = userService.getUser()._id
            // await websiteService.create({name, addedBy});
            await websiteService.getData({name});

            // this.setState(this.getInitialState(), () => {
            //     this.props.history.push('/campaigns');
            // });

        } catch (error) {
            this.setState({
                name: '',
                error: error.message
            })
        }
    }


    render () {
        return(
        <section className={styles.section}>
            {
                this.state.name && <p>{this.state.name}</p>
            }
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset>
                    <legend>Enter Domain</legend>
                    <label htmlFor="name">Domain: </label>
                    <input 
                        id="name" 
                        name="name" 
                        type="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <button disabled={!this.isFormValid()} className="btn"  type="submit">Check Domain</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default WebsiteForm;