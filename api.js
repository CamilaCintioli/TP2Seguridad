var express = require('express');
var axios = require('axios');
var app = express();
var decrypt = require('./asymmetricEncryption').decrypt
var privateKey = require('./keys').privateKey

app.get('/', function (req, res, next) {
  if (req.headers.authorization) {
    next()
  } else {
    res.status(401)
    res.end()
  }
})

app.get('/', function (req, res) {
  console.log('API');
  axios.get('http://localhost:3001').then((response) => {
    console.log(response.data)
    res.send({ data: decrypt(response.data, privateKey), from: "api" })
  }).catch(() => {
    res.status(500)
    res.end()
  })
});

app.listen(3000, function () {
  console.log('API listening on port 3000!');
});
