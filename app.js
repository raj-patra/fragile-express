const express = require("express");
const api = require('./helpers/routes');
const constants = require('./helpers/constants');

const port = 3000;
const app = express();

app.use([express.json(), express.urlencoded({extended: true})]);
app.use('/api', api);

app.get('/', (req, res)=>{
    res.status(200).send({"message": "Welcome to the Fragile Express."})
});

app.get('/about', (req, res)=>{
    res.status(200).send(constants.about)
});

app.listen(3000, () => {
    console.log(`Server Listening at http://localhost:${port}`);
});