import React from 'react'
import styles from './Campaigns.module.scss';
import CampaignForm from '../../components/CampaignForm/CampaignForm';

const Campaigns = (props) => {
    return (
        <main>
            <h1>Campaigns</h1>
            {
                props.campaigns.map(({name,_id, addedBy}) => (
                <section key={_id}>
                    <h1>{name}</h1>
                    <small>Added By: {addedBy.name}</small>
                </section>
                ))
            }
            <CampaignForm {...props}/>
        </main>
    );
};

export default Campaigns;