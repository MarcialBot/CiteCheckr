import React from 'react'
import styles from './Campaigns.module.scss';
import CampaignForm from '../../components/CampaignForm/CampaignForm';

const Campaigns = (props) => {
    return (
        <main>
            <h1>Campaigns</h1>
            <CampaignForm {...props}/>
        </main>
    );
};

export default Campaigns;