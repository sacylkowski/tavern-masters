import React from 'react';
import CampaignList from "../component/CampaignList";
// import CommentList from "../components/CommentList";
// import CampaignForm from "../components/CampaignForm";

import "./home.css";

import { useQuery } from "@apollo/client";
import { QUERY_CAMPAIGNS } from "../utils/queries";


const Home = () => {
    const { loading, data } = useQuery(QUERY_CAMPAIGNS);
    const campaigns = data?.campaigns || [];
  
  return (
    <main>
        <h2>Title</h2>
        <p>description</p>
    <div className="">
          <CampaignList
            campaigns={campaigns} 
            title="Current Campaigns"
          />
      </div>
  </main>
  )
}

export default Home;