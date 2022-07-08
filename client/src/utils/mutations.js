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
            events {
                _id
            }
        }
    }
`;

// add event
export const ADD_EVENT = gql`
    mutation addEvent($eventName: String!, $eventDescription: String!, $eventGiverName: String!, $eventGiverOccupation: String, $eventGiverDescription: String, $eventReward: String) {
        addEvent(eventName: $eventName, eventDescription: $eventDescription, eventGiverName: $eventGiverName, eventGiverOccupation: $eventGiverOccupation, eventGiverDescription: $eventGiverDescription, eventReward: $eventReward) {
            _id
            eventName
            eventDescription
            eventGiverName
            eventGiverOccupation
            eventGiverDescription
            eventReward
            createdAt
            username
        }
    }
`;

// add comment

// update user

// update campaign

// update event