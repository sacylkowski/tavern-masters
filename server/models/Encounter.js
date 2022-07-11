const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const encounterSchema = new Schema(
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
        encounterGiverName: {
            type: String,
            required: 'There must be an encounter giver!',
            minlength: 1,
            maxlength: 20
        },
        encounterGiverOccupation: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 20
        },
        encounterGiverDescription: {
            type: String,
            required: false,
            minlength: 1,
            maxlength: 280
        },
        encounterName: {
            type: String,
            required: 'Your encounter must have a name!',
            minlength: 1, 
            maxlength: 50
        },
        encounterDescription: {
            type: String,
            required: 'Your encounter must have a description!',
            minlength: 1,
            maxlength: 560
        },
        encounterReward: {
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

const Encounter = model('Encounter', encounterSchema);

module.exports = Encounter;