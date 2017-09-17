var {expect} = require('chai');
var ajaxController = require('./ajaxController');
var jsdom = require("node-jsdom");
var fs = require('fs');

describe('sanity check', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

describe('interface.html', function() {
  var interfaceHTML = fs.readFileSync('src/interface.html', 'utf-8');
  it('basic test', function(done) {
    jsdom.env(interfaceHTML, function(err, window) {
      var title = window.document.getElementsByTagName('title')[0];
      expect(title.innerHTML).to.equal("Schibsted API Interface");
      done();
      window.close();
    });
  });
  describe('custom ajax request', function(){``
    describe("ajaxController", function() {
      describe("load", function() {
        it('should return an httpRequest', function(){
          var testRequest = ajaxController.load('url.example.json');
          expect(typeof testRequest).to.be(object)
        });
      });
    });
  });
});
