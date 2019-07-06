var express = require('express');
var app = express();

app.get('/', function (req, res, next) {
  const apiKey = req.query.apiKey;
  if (apiKey) {
    next()
  } else {
    res.status(401)
    res.end()
  }
})

app.get('/', function (req, res) {
  console.log('TOP SECRET INFORMATION');
  res.send('TOP SECRET INFORMATION');
});

app.listen(3001, function () {
  console.log('ABM running on port 3001!');
});
