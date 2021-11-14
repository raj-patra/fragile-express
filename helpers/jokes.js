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
    res.status(200).send(constants.facts)
});

router.get('/chuck_norris', (req, res)=> fetch_response(constants.api_urls.jokes.chuck_norris, res));
router.get('/dad', (req, res)=> fetch_response(constants.api_urls.jokes.dad, res));
router.get('/yo_mama', (req, res)=> fetch_response(constants.api_urls.jokes.yo_mama, res));