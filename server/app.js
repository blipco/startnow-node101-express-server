// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data.json');
// create your express server below
var app = express();

// add your routes and middleware below
app.get('/data', function (req, res) {
    res.send(data);
});

app.get('/', function (req, res) {
    res.send('');
});


module.exports = app;
