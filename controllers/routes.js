const express = require("express");
const router = express.Router();
const constants = require('../helpers/constants');

const random = require('./random');
const quotes = require('./quotes');
const shows = require('./shows');
const trivia = require('./trivia');
const personalities = require('./personalities');
const games = require('./games');
const jokes = require('./jokes');
const memes = require('./memes');
const photos = require('./photos');


router.get('/', (req, res)=>{
    res.status(200).json(constants.api);
});

router.use("/random", random);
router.use("/quotes", quotes);
router.use("/shows", shows);
router.use("/trivia", trivia);
router.use("/personalities", personalities);
router.use("/games", games);
router.use("/jokes", jokes);
router.use("/memes", memes);
router.use("/photos", photos);

module.exports = router;
