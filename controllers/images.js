const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.images);
});

router.get('/nekos', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.images.nekos);
    res.status(200).json(data);
});

router.get('/waifu', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.images.waifu);
    res.status(200).json(data);
});

module.exports = router;
