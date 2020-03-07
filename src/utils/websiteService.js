const axios = require('axios');
const cheerio = require('cheerio');
const getUrls = require('get-urls');
const BASE_URL = '/api/websites';
// let site = 'https://scrapethissite.com/';

function getData(site) {
    return axios.get(site)
    .then( res => {
        const $ = cheerio.load(res.data).html();
        console.log(getUrls($));
        return getUrls($);
    })
}

function create(data) {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: new Headers({'Content-type': 'Application/json'}),
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.ok) return res.json();
        throw new Error('Something went wrong');
    })
}

function index() {
    return fetch(BASE_URL).then(res => res.json());
}

// getData(site);

export default {
    getData,
    create,
    index
};