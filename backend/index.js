const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = process.env.PORT || 8080;

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



//Get Mars photo
app.get('/mars_photo', (req, res) => {
    //Get a random Mars day to pull a photo from
    const sol = Math.floor(Math.random() * Math.floor(2979));

    axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${sol}&api_key=${process.env.MARS_WEATHER_API_KEY}`)
    .then((response) => {
        //get photo url to send back to front end
        const photo = response.data.photos[0].img_src;
        //send photo to front end
        res.send(photo);
    })
    .catch((error) => {
        console.log(error);
        res.status(400).json({error:"An error occurred"});
    });
    
});


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
