const express = require("express");
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


module.exports = router;