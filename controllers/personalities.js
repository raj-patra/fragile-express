const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');

router.get('/', (req, res)=>{
    res.status(200).json(constants.personalities)
});

router.get('/insult', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.personalities.insult);
    res.status(200).json(data);
});

router.get('/advice', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.personalities.advice);
    res.status(200).json(data);
});

router.get('/affirmation', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.personalities.affirmation);
    res.status(200).json(data);
});

router.get('/inspiration', async(req, res)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    let data = await constants.fetch_response(constants.api_urls.personalities.inspiration);
    data.data = randomChoice(data.data);
    res.status(200).json(data);
});

module.exports = router;