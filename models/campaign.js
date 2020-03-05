const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const campaignSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true});

module.exports = mongoose.model('Campaign', campaignSchema);