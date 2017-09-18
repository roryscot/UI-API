var express = require('express');
var path = require('path');
var webpack = require('webpack');
var config = require('../webpack.config.dev.js')

var port = 3000;
var interfaceServer = express();
var compiler = webpack(config);

interfaceServer.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

//declare routing
interfaceServer.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/interface.html'));
});

interfaceServer.get('/advertisers/', function(req ,res) {
  var file = path.join(__dirname, "response." + req.query.format)
    res.sendFile(file);
});

interfaceServer.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {"http://localhost:" + port}
});
