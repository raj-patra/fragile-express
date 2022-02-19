const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

const randomChoice = function randomChoice(arr) {
    return arr[Math.floor(arr.length * Math.random())];
}

router.get('/', (req, res)=>{
    res.status(200).json(constants.games);
});

router.get('/pc', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.games.pc);
    data.data = utils.random_choice(data.data);
    res.status(200).json(data);
});

router.get('/browser', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.games.browser);
    data.data = randomChoice(data.data);
    res.status(200).json(data);
});

module.exports = router;