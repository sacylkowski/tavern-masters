const { Schema, model } = require('mongoose');
const eventSchema = require('./Event');
const dateFormat = require('../utils/dateFormat');

const campaignSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        },
        username: {
            type: String,
            required: true
          },
        campaignName: {
            type: String,
            required: 'Your campaign requires a name!',
            minlength: 1, 
            maxlength: 30
        },
        campaignDescription: {
            type: String,
            required: 'Your campaign requires a description!',
            minlength: 1, 
            maxlength: 560
        },
        events: [eventSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

campaignSchema.virtual('eventCount').get(function(){
    return this.events.length;
});

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;