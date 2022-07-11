import React from 'react';
import { Link } from "react-router-dom";

const CampaignList = ({ campaigns, title }) => {
      if (!campaigns.length) {
        return <h3>No Campaigns Yet</h3>;
      }

    return (
        <div>
            <h3>{title}</h3>
            {campaigns &&
                campaigns.map(campaign => (
                    <div key={campaign._id} className="">
                        <p className="">
                            <Link
                                to={`/profile/${campaign.username}`}
                                style={{ fontWeight: 700 }}
                                className="text-light"
                            >
                                {campaign.username}
                            </Link>{" "}
                            created their campaign on {campaign.createdAt}
                        </p>
                        <div className="">
                            <Link to={`/campaign/${campaign._id}`}>
                                <h3>{campaign.campaignName}</h3>
                                <p>{campaign.campaignDescription}</p>
                                {/* <p className="">
                        Comments: {campaign.commentCount} || Click to{' '}
                        {campaign.commentCount ? 'see' : 'start'} the discussion!
                    </p> */}
                            </Link>
                        </div>
                    </div>
                ))}
        </div>
    );
};

export default CampaignList;
