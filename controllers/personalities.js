const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.personalities);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    if (option in constants.api_urls.personalities){
        let data = await utils.fetch_response(constants.api_urls.personalities[option]);
        if (option === 'inspiration'){
            data.data = utils.random_choice(data.data);
        }
        res.status(200).json(data);
    } else {
        res.status(404).json(constants[404]);
    }
});

module.exports = router;
