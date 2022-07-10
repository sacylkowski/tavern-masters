const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        events: [Event]
        eventCount: Int
        campaignCount: Int
        campaigns: [Campaign]
    }
    
    type Campaign {
        _id: ID
        username: String
        campaignName: String
        campaignDescription: String
        eventCount: Int
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
        me: User
        users: [User]
        user(username: String!): User
        campaigns(username: String): [Campaign]
        campaign(_id: ID!): Campaign
        events(username: String): [Event]
        oneEvent(_id: ID!): Event
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addEvent(eventGiverName: String!, eventGiverOccupation: String, eventGiverDescription: String, eventName: String!, eventDescription: String!, eventReward: String): Event
        addCampaign(campaignName: String!, campaignDescription: String!): Campaign
    }

    type Auth {
        token: ID!
        user: User
    }
`
;

module.exports = typeDefs;