import React from 'react';
import { Link } from 'react-router-dom';
import "./campaignlist.css";

const CampaignList = ({ campaigns, title }) => {
    if (!campaigns.length) {
        return <h3>No Campaigns to Display!</h3>
    }

    return(
        <div className="container">
            {/* the campaign name, the title */}
            <h3>{title}</h3>
            {/* then it will map through the campaigns and show the description and who created it */}
            {campaigns && campaigns.map(campaign => (
                <div key={campaign._id} className="">
                    <p className="campaignname">
                        <Link to={`/campaign/${campaign._id}`}>
                        {campaign.campaignName}
                        </Link></p>
                    <p className="campaigndescription">{campaign.campaignDescription}</p>
                    <p className="">
                        <Link className="creator"
                            to={`/profile/${campaign.username}`}
                        >Created By: {campaign.username}</Link>
                    </p>
                </div>
            ))}
            
        </div>
    )
};

export default CampaignList;