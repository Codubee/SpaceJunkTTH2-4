const express = require('express');
const app = express();
const axios = require('axios');
const { urlencoded } = require('express');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

//req == body with contains the imageURL aka the url of the image we want to analyze
app.post('/imageAnalyzer', (req, res) =>{

    const body = req.body
    axios.post("https://codubee-api.herokuapp.com/vision", body)
    .then(response =>{
        console.log("This is the body:")
        console.log(body)

        //response.data contains various infomation about what the analyzer gathered from the image
        console.log("\nThis is the response")
        console.log(response.data.tags)                 //tags seems to be key-words such as "space" or "planet"
        console.log(response.data.captions[0].text)     //captions is an array and text in each element of the array seems to be a sentence descrbing the image such as "planet orbiting a star"
        res.status(200).json(response.data)
    })
    .catch(error => {
        console.log(error)
        res.status(400).json({error: "An error occured"})
    })
})


app.listen(port,()=>{
    console.log('API is up and running')
}) 

module.exports = app;