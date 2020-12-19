const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/asteroid_news', (req,res) =>{
    const START_DATE = 2020-12-10;
    const END_DATE = 2020-12-17;
    axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2020-12-10&end_date=2020-12-17&api_key=${process.env.NEWS_API_KEY}')
    .then((response)=>{
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:'An error ocurred.'})
    })
    //res.send('Hello world');
})

app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;