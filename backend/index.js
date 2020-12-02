const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

//Get weather on Mars
app.get('/mars_weather', (req, res) => {
    
    axios.get(`https://api.nasa.gov/insight_weather/?api_key=${process.env.MARS_WEATHER_API_KEY}&feedtype=json&ver=1.0`)
    .then((response) => {
        console.log(response.data);
        res.status(200).json(response.data);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    });
});

app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;