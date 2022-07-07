import React from 'react';

const CampaignList = (
    // { campaigns, title }
    ) => {
//   if (!campaign.length) {
//     return <h3>No Campaigns Yet</h3>;
//   }

  return (
    <div>
    <h3>{title}</h3>
    {campaigns &&
        campaigns.map(campaign => (
            <div key={campaign._id} className="">
                <p className="">
                    {campaign.username}
                    created on {campaign.createdAt}
                </p>
                <div className="">
                    <p>{campaigns.description}</p>
                    {/* <p className="">
                        Comments: {campaign.commentCount} || Click to{' '}
                        {campaign.commentCount ? 'see' : 'start'} the discussion!
                    </p> */}
                </div>
            </div>
        ))}
</div>
  );
};

export default CampaignList;
