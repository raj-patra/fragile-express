const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.shows);
});

router.get('/random', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.random);
    res.status(200).json(data);
});

router.get('/game_of_thrones', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.game_of_thrones);
    res.status(200).json(data);
});

router.get('/brba', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.brba);
    res.status(200).json(data);
});

router.get('/breaking_bad', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.breaking_bad);
    res.status(200).json(data);
});

router.get('/lucifer', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.lucifer);
    res.status(200).json(data);
});

router.get('/stranger_things', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.shows.stranger_things);
    res.status(200).json(data);
});

router.get(['/harry_potter', '/harry_potter/:option', '/harry_potter/house/:option'], async(req, res)=>{
    let option = req.params.option;
    let url = (option) ? constants.api_urls.shows.harry_potter+option : constants.api_urls.shows.harry_potter;
    let data = await utils.fetch_response(url);

    data.data = utils.random_choice(data.data);
    data.options = constants.hp_options;

    res.status(200).json(data);
});

module.exports = router;
