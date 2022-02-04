const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('./constants');

function fetch_response(url, res){
    (async () => {
        try{
            await axios.get(url)
                        .then(data => {
                            res.status(200).send({"message": "Data fetch successful.", 
                                                    "data": data.data, 
                                                    "reference_api": data.config.url,
                                                    "root": constants.host})
                        })
                        .catch(error => res.send(error))
                        .next;
        }
        catch (error) {
            console.log(error)
        }
    }) ();
}

router.get('/', (req, res)=>{
    res.status(200).send(constants.memes)
});

router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.memes.random);
    res.status(200).json(data);
});

router.get('/reddit',async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.memes.reddit);
    res.status(200).json(data);
});

router.get('/namo', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.memes.namo);
    res.status(200).json(data);
});

router.get('/templates', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.memes.templates);
    res.status(200).json(data);
});

module.exports = router;