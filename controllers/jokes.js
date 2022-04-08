const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (req, res)=>{
    res.status(200).json(constants.jokes);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    let data;
    if (option in constants.api_urls.jokes){
        data = await utils.fetch_response(constants.api_urls.jokes[option]);
        res.status(200).json(data);
    } else {
        res.status(404).json({
            error: 'Endpoint does not exist'
        });
    }
});

// router.get('/random', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.jokes.random);
//     res.status(200).json(data);
// });

// router.get('/chuck_norris', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.jokes.chuck_norris);
//     res.status(200).json(data);
// });

// router.get('/dad', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.jokes.dad);
//     res.status(200).json(data);
// });

// router.get('/yo_mama', async(req, res)=>{
//     let data = await utils.fetch_response(constants.api_urls.jokes.yo_mama);
//     res.status(200).json(data);
// });

module.exports = router;
