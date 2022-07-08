import React from "react";
// import CampaignList from '../components/CampaignList';
// import CommentList from '../components/CommentList';

import Auth from '../utils/auth';
// import { useQuery } from '@apollo/client';
// import { QUERY_THOUGHTS, QUERY_ME_BASIC } from '../utils/queries';

const Home = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const { data: userData } = useQuery(QUERY_ME_BASIC);
//   const thoughts = data?.thoughts || [];

//   const loggedIn = Auth.loggedIn();

  return (
    <main>
      <div className="">
        {/* {loggedIn && (
          <div className="">
            {/* <ThoughtForm /> 
          </div>
        )}
        <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <CampaignList
              campaigns={campaign}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div> */}
      </div>
    </main>
  );
};

export default Home;
