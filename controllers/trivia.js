const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.trivia);
});

router.get('/:option', async(req, res)=>{
    let option = req.params.option;
    let data;
    if (option in constants.api_urls.trivia){
        if (option == 'quiz') {
            let query_string = "&"+req.url.split("?")[1]
            data = await utils.fetch_response(constants.api_urls.trivia[option]+query_string);
            data.options = constants.quiz_options;
        } else {
            data = await utils.fetch_response(constants.api_urls.trivia[option]);
        }
        res.status(200).json(data);
    } else {
        res.status(404).json({
            error: 'Endpoint does not exist'
        });
    }
});

module.exports = router;
