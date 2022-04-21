const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.shows);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    if (option in constants.api_urls.shows){
        let data = await utils.fetch_response(constants.api_urls.shows[option]);
        if (option === 'final_space'){
            data.data = utils.random_choice(data.data);
        }
        res.status(200).json(data);
    } else {
        res.status(404).json({
            error: 'Endpoint does not exist'
        });
    }
});

router.get(['/harry_potter', '/harry_potter/:option'], async(req, res)=>{
    let option = req.params.option;
    let url = (option) ? constants.api_urls.shows.harry_potter+option : constants.api_urls.shows.harry_potter;
    let data = await utils.fetch_response(url);
    
    data.data = utils.random_choice(data.data);
    data.options = constants.hp_options;
    
    res.status(200).json(data);
});

module.exports = router;
