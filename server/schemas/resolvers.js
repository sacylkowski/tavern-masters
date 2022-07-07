const { AuthenticationError } = require('apollo-server-express');
const { Campaign, Event, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all users 
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('campaigns')
                .populate('events');
        }
    },
    // Mutation: {

    // }
};

module.exports = resolvers;
