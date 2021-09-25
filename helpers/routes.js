const express = require("express");
const axios = require("axios");
const router = express.Router();
const constants = require('./constants');
const co = require('co');
const { response } = require("express");


router.get('/', (req, res, next)=>{
    res.status(200).send({"message": "List of available resources.",
        "resources": ["alias"]})
});

router.get('/alias', (req, res, next)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    res.status(200).send({"message": "Random alias generated.",
        "data": randomChoice(constants.adjective)+'-'+randomChoice(constants.noun)})
});

router.get('/insult', (req, res)=>{
    (async () => {
        try{
            await axios.get(constants.api_urls.insult)
                        .then(data => {
                            res.status(200).send({"message": "Data fetch successful.", 
                                                    "data": data.data, 
                                                    "reference_api": data.config.url})
                                                })
                        .catch(error => res.send(error));
        }
        catch (error) {
            console.log(error)
        }
    }) ();
});

router.get('/fact', (req, res)=>{
    (async () => {
        try{
            await axios.get(constants.api_urls.fact)
                        .then(data => {
                            res.status(200).send({"message": "Data fetch successful.", 
                                                    "data": data.data, 
                                                    "reference_api": data.config.url})
                                                })
                        .catch(error => res.send(error));
        }
        catch (error) {
            console.log(error)
        }
    }) ();
});


module.exports = router;