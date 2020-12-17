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

app.post('/imageAnalyzer', (req, res) =>{

    const body = req.body
    axios.post("https://codubee-api.herokuapp.com/vision", body)
    .then(response =>{
        console.log("This is the body:")
        console.log(body)
        console.log("\nThis is the response")
        console.log(response.data.tags)
        console.log(response.data.captions[0].text)
        res.status(200).json(response.data)
    })
    .catch(error => {
        //console.log(error)
        res.status(400).json({error: "An error occured"})
    })
})


app.listen(port,()=>{
    console.log('API is up and running')
}) 

module.exports = app;