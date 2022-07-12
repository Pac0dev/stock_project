'use strict';

var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('client'));
app.use(express.static('node_modules'));

app.get('/api/:fixture/:property?', function (req, res) {
  var fixture = require('./fixtures/' + req.params.fixture);
  if (req.params.property) {
    res.send(fixture[req.params.property]);
    return;
  }
  res.send(fixture);
});

app.post('/api/test', function (req, res) {
  console.log(req.body.test);
  res.send('Success');
});

app.listen(4000, function () {
  console.log('Server now listening on port 4000!');
});
