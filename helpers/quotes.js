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
                                                    "reference_api": data.config.url})
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
    res.status(200).send({"message": "List of available resources.",
        "resources": ["random", "kanye", "trump", "superhero"]})
});

router.get('/random', (req, res)=> fetch_response(constants.api_urls.quote, res));
router.get('/kanye', (req, res)=> fetch_response(constants.api_urls.kanye, res));
router.get('/trump', (req, res)=> fetch_response(constants.api_urls.trump, res));
router.get('/superhero', (req, res)=> fetch_response(constants.api_urls.superhero, res));

module.exports = router;