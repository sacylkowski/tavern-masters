// store all of the GraphQL query request

import { gql } from "@apollo/client";

// get all campaigns
export const QUERY_CAMPAIGNS = gql`
    query campaigns($username: String) {
        campaigns(username: $username) {
            _id
            createdAt
            username
            campaignName
            campaignDescription
        }
    }
`;

// get a single campaign
export const QUERY_CAMPAIGN = gql`
    query campaign($id: ID!) {
        campaign(_id: $id) {
            _id
            createdAt
            username
            campaignName
            campaignDescription
            encounterCount
            encounters {
                _id
                username
                encounterGiverName
                encounterGiverOccupation
                encounterGiverDescription
                encounterName
                encounterDescription
                encounterReward
            }
        }
    }
`;

// get a single user
export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      campaignCount
      encounterCount
      campaigns {
        _id
        campaignName
        campaignDescription
        encounterCount
      }
      encounters {
        _id
        encounterName
        encounterDescription
      }
    }
  }
`;

// get logged in user
export const QUERY_ME = gql`
{
    me {
        _id
        username
        campaignCount
        encounterCount
        campaigns {
          _id
          campaignName
          campaignDescription
          encounterCount
        }
        encounters {
          _id
          encounterName
          encounterDescription
        }
    }
}
`

// get logged in user (basic)
export const QUERY_ME_BASIC = gql`
    {
        me {
            _id
            username
            campaignCount
            campaigns {
                _id
                campaignName
            }
        }
    }
`

// get all encounters
export const QUERY_ENCOUNTERS = gql`
    query encounters($username: String) {
        encounters(username: $username) {
            _id
            encounterName
            encounterDescription
            username
            createdAt
        }
    }
`

// get a single encounter
export const QUERY_ENCOUTER = gql`
    query encounter($id: ID!) {
        encounter(_id: $id) {
            _id
            createdAt
            username
            encounterName
            encounterDescription
        }
    }
`