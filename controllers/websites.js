const Website = require('../models/website');

module.exports = {
    create,
    index
};


async function create(req, res) {
    try{
        const website = await Website.create(req.body);
        res.json({ website });
    } catch (error) {
        res.status(401).json({err: 'Unauthorized'});
    }
};

async function index(req, res) {
    try{
        const websites = await Website.find({})
        .sort('-createdAt').populate('urls');
        res.json({ websites });

    } catch (error) {
        res.status(401).json({err: 'Unauthorized'});
    }
};