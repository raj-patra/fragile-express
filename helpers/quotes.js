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
    res.status(200).send(constants.quotes)
});

router.get('/random', (req, res)=> fetch_response(constants.api_urls.quotes.random, res));
router.get('/kanye', (req, res)=> fetch_response(constants.api_urls.quotes.kanye, res));
router.get('/trump', (req, res)=> fetch_response(constants.api_urls.quotes.trump, res));
router.get('/superhero', (req, res)=> fetch_response(constants.api_urls.quotes.superhero, res));
router.get('/poems', (req, res)=> fetch_response(constants.api_urls.quotes.poems, res));
router.get('/anime', (req, res)=> fetch_response(constants.api_urls.quotes.anime, res));
router.get('/powerful', (req, res)=> fetch_response(constants.api_urls.quotes.powerful, res));
router.get('/stoicism', (req, res)=> fetch_response(constants.api_urls.quotes.stoicism, res));

module.exports = router;