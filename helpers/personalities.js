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
    res.status(200).json(constants.personalities)
});

router.get('/insult',  async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.personalities.insult);
    res.status(200).json(data);
});

router.get('/advice', (req, res)=> fetch_response(constants.api_urls.personalities.advice, res));
router.get('/affirmation', (req, res)=> fetch_response(constants.api_urls.personalities.affirmation, res));
router.get('/inspiration', (req, res)=> {
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    axios.get(constants.api_urls.personalities.inspiration)
        .then(response => {
            res.status(200).send({"message": "Data fetch successful.", 
                                    "data": randomChoice(response.data), 
                                    "reference_api": response.config.url,
                                    "root": constants.host});
        })
        .catch(error => res.send(error));
});

module.exports = router;