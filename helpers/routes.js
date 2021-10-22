const express = require("express");
const axios = require("axios");
const open = require("open");
const router = express.Router();

const constants = require('./constants');
const quotes = require('./quotes');
const facts = require('./facts');
const personalities = require('./personalities');
const games = require('./games');
const random = require('./random');

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
    res.status(200).send(constants.root)
});


router.use("/quotes", quotes);
router.use("/facts", facts);
router.use("/personalities", personalities);
router.use("/games", games);
router.use("/random", random);


module.exports = router;