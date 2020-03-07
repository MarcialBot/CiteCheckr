const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebsiteSchema = new Schema({
    name: String,
    urls: Array,
},{timestamps: true});

module.exports = mongoose.model('Website', WebsiteSchema);

