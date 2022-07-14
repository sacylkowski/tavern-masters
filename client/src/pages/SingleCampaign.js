import React from "react";
import { useParams } from "react-router-dom";

import "./singlecampaign.css";

// import CommentList from "../components/CommentList";
// add comment form if time permits

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_CAMPAIGN } from "../utils/queries";


const SingleCampaign = (props) => {
    // add query here
    const { id: campaignId } = useParams();

    const { loading, data } = useQuery(QUERY_CAMPAIGN, {
      variables: { id: campaignId }
    });
  
    const campaign = data?.thought || {};
  
    if (loading) {
      return <div>Loading...</div>;
    } 
  return (
    <div>
      <div className="cALL">
        <p className="ctitle">
            {/* user's campaigns */}
          <span style={{ fontWeight: 700 }} className="">
            {campaign.username}
          </span>{" "}
          created their campaign on {campaign.createdAt}
        </p>
        <div className="cdescription">
            {/* Campaign Description */}
          <p>{campaign.campaignDescription}</p>
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
