import React from 'react';
import CampaignList from "../component/CampaignList";
// import CommentList from "../components/CommentList";

import "./home.css";

import { useQuery } from "@apollo/client";
import { QUERY_CAMPAIGNS } from "../utils/queries";


const Home = () => {
    const { data } = useQuery(QUERY_CAMPAIGNS);
    console.log(data);
    const campaigns = data?.campaigns || [];
  
  return (
    <main className="campaigns">
    <div>
          <CampaignList
            campaigns={campaigns} 
            title="Current Campaigns:"
          />
      </div>
  </main>
  )
}

export default Home;