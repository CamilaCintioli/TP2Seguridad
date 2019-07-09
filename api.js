var express = require('express');
var axios = require('axios');
var app = express();

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
  axios.get('http://localhost:3001/?apiKey=fafafa').then((response) => {
    console.log(response.data)
    res.send({ data: response.data, from: "api" })
  }).catch(() => {
    res.status(500)
    res.end()
  })
});

app.listen(3000, function () {
  console.log('API listening on port 3000!');
});
