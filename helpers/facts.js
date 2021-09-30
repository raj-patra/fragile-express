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

router.get('/random', (req, res)=> fetch_response(constants.api_urls.fact.random, res));
router.get('/useless', (req, res)=> fetch_response(constants.api_urls.fact.useless, res));
router.get('/chuck_norris', (req, res)=> fetch_response(constants.api_urls.fact.chuck_norris, res));
router.get('/trivia', (req, res)=> fetch_response(constants.api_urls.fact.trivia, res));
router.get('/math', (req, res)=> fetch_response(constants.api_urls.fact.math, res));
router.get('/date', (req, res)=> fetch_response(constants.api_urls.fact.date, res));
router.get('/year', (req, res)=> fetch_response(constants.api_urls.fact.year, res));

module.exports = router;