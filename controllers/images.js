const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.images);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    if (option in constants.api_urls.images){
        if (option == 'nekos' || option == 'waifu' || option == 'emoji') {
            let data = await utils.fetch_response(constants.api_urls.images[option]);
            res.status(200).json(data);
        } else {
            res.redirect(constants.api_urls.images[option]);
        }
    } else {
        res.status(404).json(constants[404]);
    }
});

module.exports = router;
