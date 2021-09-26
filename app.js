const express = require("express");
const api = require('./helpers/routes');
const constants = require('./helpers/constants');

const PORT = process.env.PORT || 46444;
const app = express();

app.use([express.json(), express.urlencoded({extended: true})]);
app.use('/api', api);

app.get('/', (req, res)=>{
    res.status(200).send({"message": "Welcome to the Fragile Express."})
});

app.get('/about', (req, res)=>{
    res.status(200).send(constants.about)
});

var server = app.listen(PORT, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log("Server is listening at http://%s:%s", host, port);
});