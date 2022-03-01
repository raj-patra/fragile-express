const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.personalities);
});

router.get('/insult', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.insult);
    res.status(200).json(data);
});

router.get('/advice', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.advice);
    res.status(200).json(data);
});

router.get('/affirmation', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.affirmation);
    res.status(200).json(data);
});

router.get('/inspiration', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.inspiration);
    data.data = utils.random_choice(data.data);
    res.status(200).json(data);
});

router.get('/kanye', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.kanye);
    res.status(200).json(data);
});

router.get('/trump', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.personalities.trump);
    res.status(200).json(data);
});

module.exports = router;
