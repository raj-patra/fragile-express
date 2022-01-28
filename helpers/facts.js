const express = require("express");
const axios = require("axios");
const router = express.Router();

const constants = require('./constants');

function fetch_response(url, res){
    const headers = {"Accept": "application/json"};
    (async () => {
        try{
            await axios.get(url, {
                headers: headers
                })
                    .then(data => {
                        if (data.status == 200){
                            res.status(200).json({
                                message: "Data fetch successful.", 
                                data: data.data, 
                                reference_api: data.config.url,
                                root: constants.host})
                        }
                        else{
                            res.status(data.status).json({
                                message: "Data fetch unsuccessful.", 
                                data: null, 
                                reference_api: data.config.url,
                                root: constants.host})
                        }
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
    res.status(200).json(constants.facts)
});

router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.random);
    res.status(200).json(data);
});
router.get('/useless', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.facts.useless);
    res.status(200).json(data);
});
router.get('/chuck_norris', (req, res)=> fetch_response(constants.api_urls.facts.chuck_norris, res));
router.get('/trivia', (req, res)=> fetch_response(constants.api_urls.facts.trivia, res));
router.get('/math', (req, res)=> fetch_response(constants.api_urls.facts.math, res));
router.get('/date', (req, res)=> fetch_response(constants.api_urls.facts.date, res));
router.get('/year', (req, res)=> fetch_response(constants.api_urls.facts.year, res));
router.get('/cat', (req, res)=> fetch_response(constants.api_urls.facts.cat, res));

module.exports = router;