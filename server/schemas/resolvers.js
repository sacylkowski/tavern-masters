const { AuthenticationError } = require('apollo-server-express');
const { Campaign, Encounter, User } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        // get all users 
        users: async () => {
            return User.find()
                .select('-__v -password')
                .populate('campaigns')
                .populate('encounters');
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
                .populate('encounters')
        },

        // get logged in user
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                    .populate('campaigns')
                    .populate('encounters')

                return userData;
            }
            throw new AuthenticationError('Not logged in!');
        },

        // get all encounters
        encounters: async (parent, {username}) => {
            const params = username ? { username } : {};
            return Encounter.find(params).sort({createdAt: -1});
        },

        // get single encounter
        encounter: async (parent, { _id }) => {
            return Encounter.findOne({ _id });
        },
    },
    Mutation: {
        // add a user
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
        },
        // log in
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Username or password is incorrect.');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Username or password is incorrect.');
            }

            const token = signToken(user);
            return { token, user };
        },
        // add campaign
        addCampaign: async (parent, args, context) => {
            if (context.user) {
                const campaign = await Campaign.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { campaigns: campaign._id }},
                    { new: true }
                );

                return campaign;
            }
            throw new AuthenticationError('You need to be logged in to make a campaign!');
        },
        // add encounter
        addEncounter: async (parent, args, context) => {
            if (context.user) {
                const encounter = await encounter.create({ ...args, username: context.user.username });

                await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { $push: { encounters: encounter._id }},
                    { new: true }
                );

                return encounter;
            }

            throw new AuthenticationError('You need to be logged in to make an encounter!');
        },
        // update campaign
        updateCampaign: async (parent, { ...args }, context) => {
            if (context.user && username === context.user.username) {
                if (encounters) {
                    let encounterIds = [];
                    for (let i = 0; i < encounters.length; i++) {
                        encounterIds.push(encounters[i]._id);
                    }
                }
                const campaign = await Campaign.findOneAndUpdate(
                    { _id: id },
                    { $set: { campaignName: campaignName, campaignDescription: campaignDescription, encounters: encounterIds } },
                    { new: true }
                );

                return campaign;
            }

            throw new AuthenticationError('You need to be logged in to update a campaign!');
        }
    }
};

module.exports = resolvers;
