const { Schema, model } = require('mongoose');
const encounterSchema = require('./Encounter');
const commentSchema = require('./Comment');
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
        encounters: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Encounter'
            }
        ],
        comments: [commentSchema]
    },
    {
        toJSON: {
            getters: true
        }
    }
);

campaignSchema.virtual('encounterCount').get(function(){
    return this.encounters.length;
});

campaignSchema.virtual('commentCount').get(function(){
    return this.comments.length;
})

const Campaign = model('Campaign', campaignSchema);

module.exports = Campaign;