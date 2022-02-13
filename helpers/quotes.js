const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('./constants');

router.get('/', (req, res)=>{
    res.status(200).json(constants.quotes)
});

router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.random);
    res.status(200).json(data);
});

router.get('/kanye', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.kanye);
    res.status(200).json(data);
});

router.get('/trump', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.trump);
    res.status(200).json(data);
});

router.get('/superhero', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.superhero);
    res.status(200).json(data);
});

router.get('/poems', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.poems);
    res.status(200).json(data);
});

router.get('/anime', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.anime);
    res.status(200).json(data);
});

router.get('/powerful', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.powerful);
    res.status(200).json(data);
});

router.get('/stoicism', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.stoicism);
    res.status(200).json(data);
});

router.get('/got', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.quotes.game_of_thrones);
    res.status(200).json(data);
});

module.exports = router;