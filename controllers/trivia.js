const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.trivia);
});

router.get('/random', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.random);
    res.status(200).json(data);
});

router.get('/useless', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.useless);
    res.status(200).json(data);
});

router.get('/chuck_norris', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.chuck_norris);
    res.status(200).json(data);
});

router.get('/number', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.number);
    res.status(200).json(data);
});

router.get('/math', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.math);
    res.status(200).json(data);
});

router.get('/date', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.date);
    res.status(200).json(data);
});

router.get('/year', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.year);
    res.status(200).json(data);
});

router.get('/cat', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.trivia.cat);
    res.status(200).json(data);
});

router.get('/quiz', async(req, res)=>{
    let query_string = "&"+req.url.split("?")[1]
    let data = await utils.fetch_response(constants.api_urls.trivia.quiz+query_string);
    data.options = constants.quiz_options;
    res.status(200).json(data);
});

module.exports = router;
