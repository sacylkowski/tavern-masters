import React from 'react';
import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_CAMPAIGN } from "../utils/queries";
import CommentList from '../components/CommentList';

const SingleCampaign = props => {
    // add query here
    // const { id: campaignId } = useParams();

    // const { loading, data } = useQuery(QUERY_CAMPAIGN, {
    //   variables: { id: campaignId }
    // });
  
    // const campaign = data?.thought || {};
  
    // if (loading) {
    //   return <div>Loading...</div>;
    // } 
  return (
    <div>
      <div className="">
        <p className="">
          <span style={{ fontWeight: 700 }} className="">
            {campaign.username}
          </span>{" "}
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
