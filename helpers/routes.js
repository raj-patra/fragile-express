const express = require("express");
const axios = require("axios");
const open = require("open");
const router = express.Router();

const constants = require('./constants');
const quote = require('./quotes');
const fact = require('./facts');
const personality = require('./personalities');

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
    res.status(200).send(constants.api)
});

router.get('/alias', (req, res)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    res.status(200).send({"message": "Random alias generated.",
        "data": randomChoice(constants.adjective)+'-'+randomChoice(constants.noun)})
});

router.get('/bored', (req, res)=> {
    
    axios.get(constants.api_urls.random_website)
        .then(response => {
            var data = response.data.split(`iframe src="`)[1].split(`">`)[0].split(`" title="`)
            res.status(200).send({"message": "Random website fetched.",
                                    "data": {
                                        "title": data[1],
                                        "url": data[0]
                                    },
                                    "reference_api": constants.api_urls.random_website,
                                    "root": constants.host})
            open(data[0]);
        })
        .catch(error => res.send(error));
});

router.use("/quotes", quote);
router.use("/fact", fact);
router.use("/personality", personality);


module.exports = router;