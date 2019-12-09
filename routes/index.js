"use strict";

const router = require('express').Router();
const baseuri = "http://api.openweathermap.org/data/2.5/forecast";
const apiKey = process.env.WEATHER_API_KEY;
const axios = require('axios');



router.get('/forecast', async (req, res) => {
  try {
    const response = await axios.get(`${baseuri}?zip=91436,US&appid=${apiKey}&units=imperial`);
    console.log(JSON.stringify(response.data.list));
    res.json(response.data.list);
  } catch (e) {
    console.log(e);
    res.send('error');
  }
});


module.exports = router;