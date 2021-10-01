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
    res.status(200).send(constants.quote)
});

router.get('/random', (req, res)=> fetch_response(constants.api_urls.quote.random, res));
router.get('/kanye', (req, res)=> fetch_response(constants.api_urls.quote.kanye, res));
router.get('/trump', (req, res)=> fetch_response(constants.api_urls.quote.trump, res));
router.get('/superhero', (req, res)=> fetch_response(constants.api_urls.quote.superhero, res));
router.get('/poems', (req, res)=> fetch_response(constants.api_urls.quote.poems, res));
router.get('/anime', (req, res)=> fetch_response(constants.api_urls.quote.anime, res));
router.get('/powerful', (req, res)=> fetch_response(constants.api_urls.quote.powerful, res));

module.exports = router;