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
            eventCount
        }
    }
`;

// get a single campaign
export const QUERY_CAMPAIGN = gql`
    query campaigns($id: ID!) {
        campaigns(_id: $id) {
            _id
            createdAt
            username
            campaignName
            campaignDescription
            eventCount
            events {
                _id
                username
                eventGiverName
                eventGiverOccupation
                eventGiverDescription
                eventName
                eventDescription
                eventReward
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
      eventCount
      campaigns {
        _id
        campaignName
        campaignDescription
        eventCount
      }
      events {
        _id
        eventName
        eventDescription
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
        eventCount
        campaigns {
          _id
          campaignName
          campaignDescription
          eventCount
        }
        events {
          _id
          eventName
          eventDescription
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

// get all events
export const QUERY_EVENTS = gql`
    query events($username: String) {
        events(username: $username) {
            _id
            eventName
            eventDescription
            username
            createdAt
        }
    }
`

// get a single event
export const QUERY_EVENT = gql`
    query event($id: ID!) {
        event(_id: $id) {
            _id
            createdAt
            username
            eventGiverName
            eventGiverOccupation
            eventGiverDescription
            eventName
            eventDescription
            eventReward
        }
    }
`