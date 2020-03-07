const websiteService = require('../../src/utils/websiteService');
const Website = require('../models/website');

module.exports = {
    scrape
}

async function scrape(req, res){
    try {
        const website = await websiteService.scrapeSite(req.body);
        res.status(201).send(website);
    } catch (error) {
        res.status(400).send({ error: 'Bad Gateway'})
    }
}

async function create(req, res) {
    try{
        const website = await Website.create(req.body);
        res.json({ website });
    } catch (error) {
        res.status(401).json({err: 'Unauthorized'});
    }
}