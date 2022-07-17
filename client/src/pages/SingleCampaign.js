import React, { useState } from "react";
import { useParams } from "react-router-dom";

import "./singlecampaign.css";

// import CommentList from "../component/CommentList";
// add comment form if time permits

// import Auth from "../utils/auth";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CAMPAIGN, QUERY_ENCOUNTERS } from "../utils/queries";
import { ADD_ENCOUNTER_CAMPAIGN } from "../utils/mutations";
import Auth from '../utils/auth';


const SingleCampaign = (props) => {
  // add query here
  const { id: campaignId } = useParams();

  const { loading, data } = useQuery(QUERY_CAMPAIGN, {
    variables: { id: campaignId }
  });

  const campaign = data?.campaign || {};
  const getEncounters = useQuery(QUERY_ENCOUNTERS);
  const [addEncounterCampaign] = useMutation(ADD_ENCOUNTER_CAMPAIGN);
  const encounters = getEncounters.data?.encounters || [];
  const [formState, setFormState] = useState({ encounterOne: '', encounterTwo: '', encounterThree: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      await addEncounterCampaign({
        variables: { campaignId: campaign._id, encounterId: formState.encounterOne }
      });
      await addEncounterCampaign({
        variables: { campaignId: campaign._id, encounterId: formState.encounterTwo }
      });
      await addEncounterCampaign({
        variables: { campaignId: campaign._id, encounterId: formState.encounterThree }
      });
    } catch (error) {
      console.error(error);
    }
  }

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
        <div>
          <ul>
            {campaign.encounters.map(encounter => (
              <li key={encounter._id}>{encounter.encounterName}</li>
            ))}
          </ul>
        </div>
        {campaign.username === Auth.getProfile().data.username ? (
        <div>
          <h4>Add Encounters!</h4>
          <select onChange={handleChange} name='encounterOne'>
            {encounters && encounters.map(encounter => (
              <option key={encounter._id} value={encounter._id} >{encounter.encounterName}</option>
            ))}
          </select>
          <select onChange={handleChange} name='encounterTwo'>
            {encounters && encounters.map(encounter => (
              <option key={encounter._id} value={encounter._id} >{encounter.encounterName}</option>
            ))}
          </select>
          <select onChange={handleChange} name='encounterThree'>
            {encounters && encounters.map(encounter => (
              <option key={encounter._id} value={encounter._id} >{encounter.encounterName}</option>
            ))}
          </select>
          <button type="submit" className="button" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        ) : (
          <></>
        )}
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
