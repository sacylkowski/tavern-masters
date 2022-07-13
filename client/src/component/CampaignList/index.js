import React from 'react'
import { Link } from 'react-router-dom'

const CampaignList = ({ campaigns, CampaignName }) => {
    if (campaigns.length) {
        return <h3>No Campaigns to Display!</h3>
    }

    return(
        <div>
            <h3>{CampaignName}</h3>
            {campaigns && campaigns.map(campaign => (
                <div>
                    <p className="card-Content">{campaigns.campaignDescription}</p>
                    <p className="card-header">
                        <Link
                            to={`/profile/${campaigns.username}`}
                        >Created By: {campaigns.username}</Link>
                    </p>
                </div>
            ))}
            
        </div>
    )
};

export default CampaignList;