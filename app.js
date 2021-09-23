const express = require("express");
const api = require('./helpers/routes');

const port = 3000;
const app = express();

app.use([express.json(), express.urlencoded({extended: true})]);
app.use('/api', api);

app.get('/', (req, res)=>{
    res.json({"message": "Welcome to the Fragile Express."})
})

app.listen(3000, () => {
    console.log(`Server Listening at http://localhost:${port}`);
})