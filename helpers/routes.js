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
        "resources": ["alias"]})
});

router.get('/alias', (req, res)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    res.status(200).send({"message": "Random alias generated.",
        "data": randomChoice(constants.adjective)+'-'+randomChoice(constants.noun)})
});

router.get('/insult', (req, res)=> fetch_response(constants.api_urls.insult, res));

router.get('/fact', (req, res)=> fetch_response(constants.api_urls.fact, res));



module.exports = router;