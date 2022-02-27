const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.quotes);
});

router.get('/random', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.random);
    res.status(200).json(data);
});

router.get('/superhero', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.superhero);
    res.status(200).json(data);
});

router.get('/poems', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.poems);
    data.data = utils.random_choice(data.data);
    res.status(200).json(data);
});

router.get('/anime', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.anime);
    res.status(200).json(data);
});

router.get('/powerful', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.powerful);
    res.status(200).json(data);
});

router.get('/stoicism', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.stoicism);
    res.status(200).json(data);
});

router.get('/game_of_thrones', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.game_of_thrones);
    res.status(200).json(data);
});

router.get('/brba', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.brba);
    res.status(200).json(data);
});

router.get('/breaking_bad', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.breaking_bad);
    res.status(200).json(data);
});

module.exports = router;