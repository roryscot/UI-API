var {expect} = chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var sinon = require('sinon');
require('isomorphic-fetch');

var jsdom = require("node-jsdom");
var fs = require('fs');
var isomorphic = require('isomorphic-fetch');

var getObject = require('./api/fetchApi');

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
  var urls = ['/advertisers/?format=json', '/advertisers/?format=xml'];
  var formats = ['json', 'xml'];
  it('Should have main and vendor scripts', function(done) {
    jsdom.env(interfaceHTML, function(err, window) {
      var scripts = window.document.getElementsByTagName('script');
      expect(scripts.length).to.equal(2);
      done();
      window.close();
    });
  });

  it('getObject', function(done) {
    var format = formats[0];
    jsdom.env({
      html: interfaceHTML,
      src: './builds/vendor.js',
      done: function(err, window) {

        var documet = interfaceHTML;
        var fetchrequests = []; // 3
        var scripts = window.document.getElementsByTagName('script');
        //
        // window.XMLHttpRequest = sinon.useFakeXMLHttpRequest(); // 4
        // window.XMLHttpRequest.onCreate = function(xhr) { // 5
        //   ajaxRequests.push(xhr); // 6
        // };

        getObject(urls[0]);
        console.log(scripts);


        window.close();
        done();
    }
    });
  });//getObject
});//describe block
