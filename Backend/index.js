const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db.js');
const cors = require('cors');

var candidateController = require('./controllers/candidateController');
var votingController = require('./controllers/votingController');
var authController = require('./controllers/authController');

var app = express();
app.use(bodyParser.json());
app.use(cors({origin: 'http://localhost:1000'}))
app.listen(3003,() => console.log('Server started at port : 3003'));
app.use('/', candidateController);
app.use('/', votingController);
app.use('/', authController);