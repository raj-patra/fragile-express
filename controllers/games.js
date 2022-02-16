const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.games);
});

router.get('/pc', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.games.pc);
    res.status(200).json(data);
});

router.get('/browser', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.games.browser);
    res.status(200).json(data);
});

module.exports = router;