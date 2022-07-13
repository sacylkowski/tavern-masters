import React from 'react'
import { Link } from 'react-router-dom'

const CampaignList = ({ campaigns, CampaignName }) => {
    if (campaigns.length) {
        return <h3>No Campaigns to Display!</h3>
    }

    return(
        <div>
            {/* the campaign name, the title */}
            <h3>{CampaignName}</h3>
            {/* then it will map through the campaigns and show the description and who created it */}
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