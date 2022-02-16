const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.jokes);
});

router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.random);
    res.status(200).json(data);
});

router.get('/chuck_norris', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.chuck_norris);
    res.status(200).json(data);
});

router.get('/dad', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.dad);
    res.status(200).json(data);
});

router.get('/yo_mama', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.yo_mama);
    res.status(200).json(data);
});

module.exports = router;