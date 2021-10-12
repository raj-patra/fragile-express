const express = require("express");
const axios = require("axios");
const open = require("open");
const router = express.Router();

const constants = require('./constants');
const quotes = require('./quotes');
const facts = require('./facts');
const personalities = require('./personalities');
const games = require('./games');

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
            res.redirect(data[0]);
        })
        .catch(error => res.send(error));
});

router.use("/quotes", quotes);
router.use("/facts", facts);
router.use("/personalities", personalities);
router.use("/games", games);


module.exports = router;