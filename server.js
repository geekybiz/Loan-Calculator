'use strict'

var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));

app.get('/interest_rate', function (req, res) {
  res.json(Math.floor((Math.random()*2000)/10)/1000);
});







var port = 8080;
app.listen(port, function () {
  console.log('Server listening at http://localhost:' + port);
})
