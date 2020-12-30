const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/picOfTheDay', (req, res) => {

    axios.get("https://api.nasa.gov/planetary/apod?api_key="+process.env.ApiKeyPOTD)
    .then((response)=>{
        const url = response.data.url;
        res.send(url);
        res.status(200).json(response.data.url);

    }).catch((error)=>{

        console.log(error);
        res.status(400).json({error: 'An error has occurred'});

    });

});


app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;