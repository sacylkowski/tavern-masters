import { gql } from '@apollo/client';

// log in
export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// add user
export const ADD_USER = gql`
    mutation addUser($username: String!, $password: String!) {
        addUser(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

// add campaign
export const ADD_CAMPAIGN = gql`
    mutation addCampaign($campaignName: String!, campaignDescription: String!) {
        addCampaign(campaignName: $campaignName, campaignDescription: $campaignDescription) {
            _id
            campaignName
            campaignDescription
            createdAt
            username
            encounters {
                _id
            }
        }
    }
`;

// add encounter
export const ADD_encounter = gql`
    mutation addencounter($encounterName: String!, $encounterDescription: String!, $encounterGiverName: String!, $encounterGiverOccupation: String, $encounterGiverDescription: String, $encounterReward: String) {
        addencounter(encounterName: $encounterName, encounterDescription: $encounterDescription, encounterGiverName: $encounterGiverName, encounterGiverOccupation: $encounterGiverOccupation, encounterGiverDescription: $encounterGiverDescription, encounterReward: $encounterReward) {
            _id
            encounterName
            encounterDescription
            encounterGiverName
            encounterGiverOccupation
            encounterGiverDescription
            encounterReward
            createdAt
            username
        }
    }
`;

// add comment

// update user
// export const UPDATE_USER = gql`
//     mutation updateUser($id: ID!)
// `

// update campaign
export const UPDATE_CAMPAIGN = gql`
    mutation updateCampaign($id: ID!, $campaignName: String!, campaignDescription: String!) {
        updateCampaign(_id: $id, campaignName: $campaignName, campaignDescription: $campaignDescription) {
            _id
            campaignName
            campaignDescription
            createdAt
            username
            encounters {
                _id
            }
        }
    }
`

// update encounter