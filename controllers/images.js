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

router.get('/emoji', async(req, res)=>{
    let data = await utils.fetch_response(constants.api_urls.images.emoji);
    res.status(200).json(data);
});

router.get('/unsplash', async(req, res)=>{
    res.redirect(constants.api_urls.images.unsplash);
});

router.get('/lorem_picsum', async(req, res)=>{
    res.redirect(constants.api_urls.images.lorem_picsum);
});

router.get('/cat', async(req, res)=>{
    res.redirect(constants.api_urls.images.cat);
});

router.get('/dog', async(req, res)=>{
    res.redirect(constants.api_urls.images.dog);
});

router.get('/fox', async(req, res)=>{
    res.redirect(constants.api_urls.images.fox);
});

module.exports = router;
