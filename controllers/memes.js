const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.memes);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    if (option in constants.api_urls.memes){
        let data = await utils.fetch_response(constants.api_urls.memes[option]);
        res.status(200).json(data);
    } else {
        res.status(404).json({
            error: 'Endpoint does not exist'
        });
    }
});

// router.get('/random', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.random);
//     res.status(200).json(data);
// });

// router.get('/reddit',async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.reddit);
//     res.status(200).json(data);
// });

// router.get('/namo', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.namo);
//     res.status(200).json(data);
// });

// router.get('/templates', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.templates);
//     res.status(200).json(data);
// });

// router.get('/yes', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.yes);
//     res.status(200).json(data);
// });
 
// router.get('/no', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.memes.no);
//     res.status(200).json(data);
// });

module.exports = router;
