const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('../helpers/constants');
const utils = require('../helpers/utils');

router.get('/', (_, res)=>{
    res.status(200).json(constants.random);
});

router.get('/alias', (_, res)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    res.status(200).send({
        message: "Random alias generated.",
        data: randomChoice(constants.adjective)+'-'+randomChoice(constants.noun),
        root: constants.host
    });
});

router.get('/website', (_, res)=> {
    axios.get(constants.api_urls.random.website)
        .then(response => {
            let data = response.data.split(`iframe src="`)[1].split(`">`)[0].split(`" title="`)
            res.redirect(data[0]);
        })
        .catch(error => res.send(error));
});

router.get('/human', (_, res)=> {
    res.redirect(constants.api_urls.random.human);
});

router.get('/activity', async(_, res)=>{
    let data = await utils.fetch_response(constants.api_urls.random.activity);
    res.status(200).json(data);
});

module.exports = router;
