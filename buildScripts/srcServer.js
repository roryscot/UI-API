var express = require('express');
var xml = require('xml');
var path = require('path');
var open = require('open');
var webpack = require('webpack');
var config = require('../webpack.config.dev.js')

var port = 3000;
var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}));

app.use('/advertisers', express.static(path.join(__dirname, 'materials')));




//declare routing
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/interface.html'));
});

app.get('/advertisers', function(req, res) {
  //mock database
  res.json([
      {
          "id": 1,
          "name": "MockAdvertiser",
          "external_id": "1",
          "impressions": 52721284,
          "clicks": 93149
      }
  ]);
});

app.get('/advertisers/:fileName', function(req ,res) {
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});



app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {"http://localhost:" + port}
});
