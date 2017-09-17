var express = require('express');
var path = require('path');
var compression = require('compression')


// var mockPort = 3001;
// var mockServer = express();
// mockServer.use('/advertisers', express.static('buildScripts'));
//
// mockServer.get('/advertisers/:filename', function(req, res) {
//       var file = path.join(__dirname, req.params.fileName);
//       res.sendFile(file);
// });


var port = 3000;
var interfaceServer = express();

interfaceServer.use(compression());
interfaceServer.use(express.static('dist'));

//declare routing
interfaceServer.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/interface.html'));
});

interfaceServer.get('/advertisers/:fileName', function(req ,res) {
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});

interfaceServer.get('/advertisers/', function(req ,res) {
  if (req.query.format === 'api json') {
    res.json(
      [
          {
              "id": 1,
              "name": "MockAdvertiser",
              "external_id": "1",
              "impressions": 52721284,
              "clicks": 93149
          }
      ]
    );
  }
  else if (req.query.format === 'api xml') {
    res.set('Content-Type', 'text/xml');
    res.send(xml([
        {
            "id": 1,
            "name": "MockAdvertiser",
            "external_id": "1",
            "impressions": 52721284,
            "clicks": 93149
        }
    ]))
  }
    var file = path.join(__dirname, req.params.fileName);
    res.sendFile(file);
});




interfaceServer.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {"http://localhost:" + port}
});
