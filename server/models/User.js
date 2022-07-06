const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
            minlength: 5
        },
        events: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Event'
            }
        ],
        campaigns: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Campaign'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        }
    }
);

// set up pre-save middleware to create password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
});
  
  // compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password);
};

// return numbers of events created
userSchema.virtual('eventCount').get(function(){
    return this.events.length;
});

// return numbers of campaigns created
userSchema.virtual('campaignCount').get(function(){
    return this.campaigns.length;
});

  const User = model('User', userSchema);

  module.exports = User;
