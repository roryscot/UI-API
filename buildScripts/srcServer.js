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

interfaceServer.get('/advertisers/:fileName', function(req ,res) {
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});

interfaceServer.get('/advertisers/', function(req ,res) {
//   if (req.query.format === 'api json') {
//     res.json(
//       [
//           {
//               "id": 1,
//               "name": "MockAdvertiser",
//               "external_id": "1",
//               "impressions": 52721284,
//               "clicks": 93149
//           }
//       ]
//     );
//   }
//   else if (req.query.format === 'api xml') {
//     res.set('Content-Type', 'text/xml');
//     var xmlResponse = ('<?xml version="1.0" encoding="UTF-8" ?>
//
//     <advertiser>
//         <id>1</id>
//         <name>MockAdvertiser</name>
//         <external_id>1</external_id>
//         <impressions>52721284</impressions>
//         <clicks>93149</clicks>
//     </advertiser>'
//
// )
//     res.send(xmlResponse);
//   }
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});




interfaceServer.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {"http://localhost:" + port}
});
