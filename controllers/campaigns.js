const Campaign = require('../models/campaign');

module.exports = {
    create,
    index
};

async function index(req, res) {
    try{
        const campaigns = await Campaign.find({}).sort('-createdAt');
        res.json({ campaigns });

    } catch (error) {
        res.status(401).json({err: 'Unauthorized'});
    }
}

async function create(req, res) {
    try{
        const campaign = await Campaign.create(req.body);
        res.json({ campaign });
    } catch (error) {
        res.status(401).json({err: 'Unauthorized'});
    }
}