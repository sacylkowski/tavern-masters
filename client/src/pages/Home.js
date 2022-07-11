import React from "react";
import CampaignList from "../components/CampaignList";
// import CommentList from "../components/CommentList";
// import ChampaignForm from "../components/CampaignForm";

import Auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { QUERY_CAMPAIGNS, QUERY_ME_BASIC } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_CAMPAIGNS);
  const { data: userData } = useQuery(QUERY_ME_BASIC);
  const campaigns = data?.campaigns || [];

  const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="">
        {loggedIn && (
          <div className="">
            {/* <CampaignForm />  */}
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CampaignList
              campaigns={campaigns}
              title="Current Campaigns"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
