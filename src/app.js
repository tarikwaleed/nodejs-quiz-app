require("dotenv").config();
var express = require('express');
const serverless=require('serverless-http');

//! HERE
const registerRouter=require('./routes/register.route');
const quizRouter=require('./routes/quiz.route');

var app = express();


app.use(express.json());

//! HERE
app.use('/.netlify/functions/api/register', registerRouter);
app.use('/.netlify/functions/api/quiz', quizRouter);



module.exports.handler =serverless(app);
