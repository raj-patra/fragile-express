const express = require("express");
const api = require('./controllers/routes');
const constants = require('./helpers/constants');
const app = express();

const PORT = process.env.PORT || 80;
const HOST = process.env.HOST || "http://localhost"

app.use([express.json(), express.urlencoded({extended: true})]);
app.use('/api', api);

app.get('/', (req, res)=>{
    res.status(200).send(constants.root)
});

app.get('/about', (req, res)=>{
    res.status(200).send(constants.about)
});

app.listen(PORT, () => {console.log("Server is listening at %s", HOST);});
