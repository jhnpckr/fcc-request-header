'use strict';

var express = require('express');
var useragent = require('useragent');

var app = express();

app.get('/', function (req, res) {

  var outputobj = {};

  var agent = useragent.parse(req.headers['user-agent']);

  outputobj.ipaddress = req.ip;
  outputobj.language = req.headers['accept-language'].split(',')[0];
  outputobj.software = agent.os.toString();

  res.send(JSON.stringify(outputobj));
});


app.listen(process.env.PORT || 3000, function () {
    console.log('Listening on port ' + (process.env.PORT ? process.env.PORT : '3000') + '...');
});
