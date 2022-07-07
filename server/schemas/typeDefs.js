const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        events: [Event]
        campaigns: [Campaign]
    }
    
    type Campaign {
        _id: ID
        username: String
        campaignName: String
        campaignDescription: String
        events: [Event]
    }

    type Event {
        _id: ID
        username: String
        eventGiverName: String
        eventGiverOccupation: String
        eventGiverDescription: String
        eventName: String
        eventDescription: String
        eventReward: String
    }

    type Query {
        users: [User]
        user(username: String!): User
        campaigns(username: String): [Campaign]
        campaign(_id: ID!): Campaign
    }
`
;

module.exports = typeDefs;