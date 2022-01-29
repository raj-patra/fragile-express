const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('./constants');

router.get('/', (req, res)=>{
    res.status(200).json(constants.facts)
});
router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.random);
    res.status(200).json(data);
});
router.get('/useless', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.useless);
    res.status(200).json(data);
});
router.get('/chuck_norris', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.chuck_norris);
    res.status(200).json(data);
});
router.get('/trivia', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.trivia);
    res.status(200).json(data);
});
router.get('/math', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.math);
    res.status(200).json(data);
});
router.get('/date', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.date);
    res.status(200).json(data);
});
router.get('/year', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.year);
    res.status(200).json(data);
});
router.get('/cat', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.cat);
    res.status(200).json(data);
});

module.exports = router;