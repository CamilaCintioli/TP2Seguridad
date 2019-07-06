var express = require('express');
var app = express();

app.get('/', function (req, res) {
  console.log('TOP SECRET INFORMATION');
  res.send('TOP SECRET INFORMATION');
});

app.listen(3001, function () {
  console.log('ABM running on port 3001!');
});
