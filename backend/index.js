const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/asteroid_news_feed', (req,res) =>{
    axios.get('https://api.nasa.gov/neo/rest/v1/feed/today?detailed=true&api_key='+process.env.NEWS_API_KEY)
    .then((response)=>{
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:'An error ocurred.'})
    })
})

app.get('/asteroid_news_browse', (req,res) =>{
    axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key='+process.env.NEWS_API_KEY)
    .then((response)=>{
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch((error)=>{
        console.log(error)
        res.status(400).json({error:'An error ocurred.'})
    })
})

app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;