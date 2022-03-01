const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.memes);
});

router.get('/random', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.random);
    res.status(200).json(data);
});

router.get('/reddit',async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.reddit);
    res.status(200).json(data);
});

router.get('/namo', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.namo);
    res.status(200).json(data);
});

router.get('/templates', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.templates);
    res.status(200).json(data);
});

router.get('/yes', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.yes);
    res.status(200).json(data);
});
 
router.get('/no', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.memes.no);
    res.status(200).json(data);
});

module.exports = router;
