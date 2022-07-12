const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        encounters: [encounter]
        encounterCount: Int
        campaignCount: Int
        campaigns: [Campaign]
    }
    
    type Campaign {
        _id: ID
        username: String
        campaignName: String
        campaignDescription: String
        encounterCount: Int
        commentCount: Int
        encounters: [encounter]
        comments: [Comment]
    }

    type encounter {
        _id: ID
        username: String
        encounterGiverName: String
        encounterGiverOccupation: String
        encounterGiverDescription: String
        encounterName: String
        encounterDescription: String
        encounterReward: String
    }

    type Comment {
        _id: ID
        commentBody: String
        createdAt: String
        username: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        campaigns(username: String): [Campaign]
        campaign(_id: ID!): Campaign
        encounters(username: String): [encounter]
        encounter(_id: ID!): encounter
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addEncounter(encounterGiverName: String!, encounterGiverOccupation: String, encounterGiverDescription: String, encounterName: String!, encounterDescription: String!, encounterReward: String): encounter
        addCampaign(campaignName: String!, campaignDescription: String!): Campaign
        updateCampaign(id: ID!): Campaign
        addComment(campaignId: ID!, commentBody: String!): Campaign
    }

    type Auth {
        token: ID!
        user: User
    }
`
;

module.exports = typeDefs;