const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.photos);
});

router.get('/nekos', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.photos.nekos);
    res.status(200).json(data);
});

module.exports = router;
