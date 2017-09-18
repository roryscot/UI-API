var {expect} = require('chai');
var jsdom = require("node-jsdom");
var fs = require('fs');
var isomorphic = require('isomorphic-fetch');

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
});

describe('Built index.html', function() {
  var interfaceHTML = fs.readFileSync('src/builds/index.html', 'utf-8');
  it('Should have main and vendor scripts', function(done) {
    jsdom.env(interfaceHTML, function(err, window) {
      var scripts = window.document.getElementsByTagName('script');
      expect(scripts.length).to.equal(2);
      done();
      window.close();
    });
  });
});
