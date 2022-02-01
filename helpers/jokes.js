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
                            res.status(200).send({"message": "Data fetch successful.", 
                                                    "data": data.data, 
                                                    "reference_api": data.config.url,
                                                    "root": constants.host})
                        }
                        else{
                            res.status(data.status).send({"message": "Data fetch unsuccessful.", 
                                                    "data": null, 
                                                    "reference_api": data.config.url,
                                                    "root": constants.host})
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
    res.status(200).send(constants.jokes)
});

router.get('/random', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.random);
    res.status(200).json(data);
});
router.get('/chuck_norris', async(req, res)=>{
    let data = await constants.fetch_response(constants.api_urls.jokes.chuck_norris);
    res.status(200).json(data);
});
router.get('/dad', (req, res)=> fetch_response(constants.api_urls.jokes.dad, res));
router.get('/yo_mama', (req, res)=> fetch_response(constants.api_urls.jokes.yo_mama, res));

module.exports = router;