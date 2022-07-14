import React from 'react'
import { Link } from 'react-router-dom'
import "./campaignlist.css";

const CampaignList = ({ campaigns, title }) => {
    if (campaigns.length) {
        return <h3>No Campaigns to Display!</h3>
    }

    return(
        <div className="card-Body">
            {/* the campaign name, the title */}
            <h3>{title}</h3>
            {/* then it will map through the campaigns and show the description and who created it */}
            {campaigns && campaigns.map(campaigns => (
                <div>
                    <h4 className="card-header">{campaigns.campaignName}</h4>
                    
                    <p className="card-content">{campaigns.campaignDescription}</p>

                    <p className="card-footer">
                        <Link
                            to={`/profile/${campaigns.username}`}
                        >Created By: {campaigns.username} At: {campaigns.createdAt}</Link>
                    </p>
                </div>
            ))}
            
        </div>
    )


};

export default CampaignList;