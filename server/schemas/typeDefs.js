const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        encounters: [Encounter]
        encounterCount: Int
        campaignCount: Int
        campaigns: [Campaign]
    }
    
    type Campaign {
        _id: ID
        username: String
        createdAt: String
        campaignName: String
        campaignDescription: String
        encounterCount: Int
        commentCount: Int
        encounters: [Encounter]
        comments: [Comment]
    }

    type Encounter {
        _id: ID
        username: String
        createdAt: String
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
        encounters(username: String): [Encounter]
        encounter(_id: ID!): Encounter
    }

    type Mutation {
        login(username: String!, password: String!): Auth
        addUser(username: String!, password: String!): Auth
        addEncounter(encounterGiverName: String, encounterGiverOccupation: String, encounterGiverDescription: String, encounterName: String!, encounterDescription: String!, encounterReward: String): Encounter
        addCampaign(campaignName: String!, campaignDescription: String!): Campaign
        updateCampaign(id: ID!, campaignName: String!, campaignDescription: String!): Campaign
        addEncounterCampaign(campaignId: ID!, encounterId: ID!): Campaign
        addComment(campaignId: ID!, commentBody: String!): Campaign
    }

    type Auth {
        token: ID!
        user: User
    }
`
;

module.exports = typeDefs;