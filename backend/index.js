const express = require('express');
const app = express();
const axios = require('axios');
require('dotenv').config();
app.use(express.json())

const port = 8080;

app.get('/',(req,res)=>{
    res.send('Hello world');
})

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


app.listen(port,()=>{
    console.log('API is up and running')
})

module.exports = app;