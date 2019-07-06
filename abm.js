var express = require('express');
var aes = require('./aes.js');
var app = express();
var key = "superSecretK";

app.get('/', function (req, res) {
  console.log('TOP SECRET INFORMATION');
  res.send(
    aes.encrypt('TOP SECRET INFORMATION',key))
});

app.listen(3001, function () {
  console.log('ABM running on port 3001!');
});
