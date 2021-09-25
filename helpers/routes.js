const express = require("express");
const axios = require("axios");
const router = express.Router();
const constants = require('./constants');

router.get('/', (req, res)=>{
    res.json({"message": "List of available resources.",
        "resources": ["alias"]})
});

router.get('/alias', (req, res)=>{
    function randomChoice(arr) {
        return arr[Math.floor(arr.length * Math.random())];
    }
    res.json({"message": "Random alias generated.",
        "data": randomChoice(constants.adjective)+'-'+randomChoice(constants.noun)})
});

router.get('/insult', (req, res)=>{
    (async () => {
        try{
            const response = await axios.get(constants.api_urls.insult)
            if (response.status === 200){
                res.json({"message": "Data fetch successful.",
                    "data": response.data,
                    "original_api": response.config.url})
            }
        }
        catch (error) {
            console.log(error.response.body)
        }
    }) ();
})


module.exports = router;