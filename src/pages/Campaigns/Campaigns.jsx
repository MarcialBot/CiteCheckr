import React from 'react'
import styles from './Campaigns.module.scss';
import CampaignForm from '../../components/CampaignForm/CampaignForm';
import WebsiteForm from '../../components/WebsiteForm/WebsiteForm';

const Campaigns = (props) => {
    return (
        <main>
            <h1>Campaigns</h1>
            {
            props.campaigns.map(({name,_id, addedBy}) => (
            <section 
            key={_id} 
            name={name}
            >
                <h1>{name}</h1>
                <small>Added By: {addedBy.name}</small>
            </section>
            ))
            }
            <CampaignForm className="component" {...props}/>
            <WebsiteForm className="component" {...props} />
        </main>
    );
};

export default Campaigns;