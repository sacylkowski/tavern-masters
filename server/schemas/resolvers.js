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
            return Campaign.find(params).sort({createdAt: -1})
                .populate('encounters');
        },

        // get single campaign
        campaign: async (parent, { _id }) => {
            return Campaign.findOne({ _id })
                .populate('encounters');
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

            return { user, token };
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
                const encounter = await Encounter.create({ ...args, username: context.user.username });

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
        updateCampaign: async (parent, args, context) => {
            if (context.user) {
                const campaign = await Campaign.findOneAndUpdate(
                    { _id: args.id },
                    { $set: { campaignName: args.campaignName, campaignDescription: args.campaignDescription } },
                    { new: true, runValidators: true }
                );

                return campaign;
            }

            throw new AuthenticationError('You need to be logged in to update a campaign!');
        },

        // add encounter to campaign
        addEncounterCampaign: async(parent, args, context) => {
            if(context.user){
                const campaign = await Campaign.findOneAndUpdate(
                    {_id: args.campaignId},
                    {$push: {encounters: args.encounterId } },
                    {new: true, runValidators: true}
                );
                return campaign;
            }
        },

        addComment: async (parent, { campaignId, commentBody }, context) => {
            if(context.user){
                const updateCampaign = await Campaign.findOneAndUpdate(
                    {_id: campaignId},
                    {$push: { comments: { commentBody, username: context.user.username } } },
                    { true: true, runValidators: true }
                );
                return updateCampaign;
            }
        }
    }
};

module.exports = resolvers;
