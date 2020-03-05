import React from 'react';
import styles from './CampaignForm.module.scss';
import userService from '../../utils/userService';
import campaignService from '../../utils/campaignService';


class CampaignForm extends React.Component {

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
            await campaignService.create({name, addedBy});

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
                this.state.error && <p>{this.state.error}</p>
            }
            <form onSubmit={this.handleSubmit} className={styles.form}>
                <fieldset>
                    <legend>New Campaign</legend>
                    <label htmlFor="name">Name:</label>
                    <input 
                        id="name" 
                        name="name" 
                        type="name" 
                        value={this.state.name}
                        onChange={this.handleChange}
                        />
                    <button disabled={!this.isFormValid()} className="btn"  type="submit">Add Campaign</button>
                </fieldset>
            </form>
        </section>
        );
    }
}

export default CampaignForm;