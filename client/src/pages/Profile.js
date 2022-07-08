import React from 'react';
// import { Navigate, useParams } from 'react-router-dom';

// import CampaignForm from '../components/CampaignForm';
// import CampaignList from '../components/CampaignList';

// import { useQuery, useMutation } from '@apollo/client';
// import { QUERY_USER, QUERY_ME } from '../utils/queries';
// import Auth from '../utils/auth';

const Profile = (props) => {
    const { username: userParam } = useParams();

    const { loading, data } = useQuery(QUERY_USER, {
      variables: { username: userParam }
    });
  
    const user = data?.user || {};
  
    if (loading) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        <div className="">
          <h2 className="">
            Viewing {user.username}'s profile.
          </h2>
        </div>
  
        <div className="">
          <div className="">
            <CampaignList campaigns={user.campaigns} title={`${user.username}'s campaigns...`} />
          </div>
        </div>
      </div>
    );
  };

export default Profile;