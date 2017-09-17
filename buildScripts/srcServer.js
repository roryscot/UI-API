var express = require('express');
var xml = require('xml');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('../webpack.config.dev.js')

var mockPort = 3001;
var mockServer = express();
mockServer.use('/advertisers', express.static(path.join(__dirname, '')));

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

interfaceServer.get('/advertisers/:fileName', function(req ,res) {
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});



interfaceServer.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {"http://localhost:" + port}
});
