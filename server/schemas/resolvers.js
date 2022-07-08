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
        },
        // get all campaigns
        campaigns: async (parent, { username }) => {
            const params = username ? { username } : {};
            return Campaign.find(params).sort({createdAt: -1});
        },

        // get single campaign
        campaign: async (parent, { _id }) => {
            return Campaign.findOne({ _id });
        },
        
        // get single user
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('campaigns')
                .populate('events')
        },

        // get logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('campaigns')
                    .populate('events')

                return userData;
            }
            throw new AuthenticationError('Not logged in!');
        },

        // get all events
        events: async (parent, {username}) => {
            const params = username ? { username } : {};
            return Event.find(params).sort({createdAt: -1});
        }

        // get single event
        oneEvent: async (parent, { _id }) => {
            return Event.findOne({ _id });
        }
    },
    // Mutation: {

    // }
};

module.exports = resolvers;
