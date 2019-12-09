"use strict";

const express = require('express');
const app = express();
const port = 5000;
require('dotenv').config();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', require('./routes'));


app.get('/', (req, res) => {
	res.send('PORT 5000');
})


app.listen(port, (err) => {
	if(err) { console.log(err) };
	console.log('Listening on port ' + port);
})