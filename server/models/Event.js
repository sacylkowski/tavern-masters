const { Schema } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
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
        eventGiverName: {
            type: String,
            required: 'There must be an event giver!',
            minlength: 1,
            maxlength: 20
        },
        eventGiverOccupation: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 20
        },
        eventGiverDescription: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 280
        },
        eventName: {
            type: String,
            required: 'Your event must have a name!',
            minlength: 1, 
            maxlength: 50
        },
        eventDescription: {
            type: String,
            required: 'Your event must have a description!',
            minlength: 1,
            maxlength: 560
        },
        eventReward: {
            type: String,
            minlength: 1,
            maxlength: 280
        }        
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = eventSchema;