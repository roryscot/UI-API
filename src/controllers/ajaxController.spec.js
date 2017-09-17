var {expect} = require('chai');
var jsdom = require("node-jsdom");
var fs = require('fs');

describe('sanity check', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

describe('interface.html', function() {
  it('basic test', function(done) {
    var interfaceHTML = fs.readFileSync('src/interface.html', 'utf-8');
    jsdom.env(interfaceHTML, function(err, window) {
      var title = window.document.getElementsByTagName('title')[0];
      expect(title.innerHTML).to.equal("Schibsted API Interface");
      done();
      window.close();
    });
  });
  describe('', function(){});
});
