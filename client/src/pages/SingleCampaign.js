import React from 'react';

const SingleCampaign = props => {
  return (
    <div>
      <div className="">
        <p className="">
          <span style={{ fontWeight: 700 }} className="">
            {campaign.username}
          </span>{' '}
          campaign created on {campaign.createdAt}
        </p>
        <div className="">
          <p>{campaign.description}</p>
        </div>
      </div>
{/* 
      {campaign.commentCount > 0 && (
        <CommentList comments={campaign.comments} />
      )}

      {Auth.loggedIn() && <CommentForm campaignId={campaign._id} />} */}
    </div>
  );
};

export default SingleCampaign;
