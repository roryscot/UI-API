var {expect} = require('chai');
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

  describe('getObject', function() {

  });
});
