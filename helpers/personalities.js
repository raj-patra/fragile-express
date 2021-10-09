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
    res.status(200).send(constants.personalities)
});

router.get('/insult', (req, res)=> fetch_response(constants.api_urls.personalities.insult, res));
router.get('/advice', (req, res)=> fetch_response(constants.api_urls.personalities.advice, res));
router.get('/affirmation', (req, res)=> fetch_response(constants.api_urls.personalities.affirmation, res));
router.get('/inspiration', (req, res)=> fetch_response(constants.api_urls.personalities.inspiration, res));

module.exports = router;