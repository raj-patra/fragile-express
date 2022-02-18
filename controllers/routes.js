const express = require("express");
const router = express.Router();

const constants = require('../helpers/constants');
const quotes = require('./quotes');
const facts = require('./facts');
const personalities = require('./personalities');
const games = require('./games');
const random = require('./random');
const jokes = require('./jokes');
const memes = require('./memes');


router.get('/', (req, res)=>{
    res.status(200).json(constants.api);
});

router.use("/quotes", quotes);
router.use("/facts", facts);
router.use("/personalities", personalities);
router.use("/games", games);
router.use("/random", random);
router.use("/jokes", jokes);
router.use("/memes", memes);

module.exports = router;