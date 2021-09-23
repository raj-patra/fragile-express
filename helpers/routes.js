const express = require("express");
const router = express.Router();
const constants = require('./constants');

router.get('/', (req, res)=>{
    res.json({"message": "Here are the available resources",
        "resources": ["alias"]})
});


module.exports = router;