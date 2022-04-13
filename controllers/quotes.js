const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.quotes);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    if (option in constants.api_urls.quotes){
        let data = await utils.fetch_response(constants.api_urls.quotes[option]);
        if (option === 'inspiration'){
            data.data = utils.random_choice(data.data);
        }
        res.status(200).json(data);
    } else {
        res.status(404).json({
            error: 'Endpoint does not exist'
        });
    }
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

router.get('/zen', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.zen);
    res.status(200).json(data);
});

router.get('/qotd', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.qotd);
    res.status(200).json(data);
});

router.get('/design', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.quotes.design);
    res.status(200).json(data);
});

module.exports = router;
