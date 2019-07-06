var express = require('express');
var app = express();
var encrypt = require('./asymmetricEncryption').encrypt
var publicKey = require('./keys').publicKey

app.get('/', function (req, res) {
  console.log('TOP SECRET INFORMATION');
  res.send(encrypt('TOP SECRET INFORMATION', publicKey));
});

app.listen(3001, function () {
  console.log('ABM running on port 3001!');
});
