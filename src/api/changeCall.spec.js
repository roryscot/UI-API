//testing mods
var {expect} = chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var sinon = require('sinon');

//browser simulation
var jsdom = require("node-jsdom");
var fs = require('fs');
var isomorphic = require('isomorphic-fetch');
var idsToBeSwapped = require('../idsToBeSwapped.js');

//tested file
var changeCall = require('./changeCall.js');

describe('sanity check', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

//it should test formatHeaders, formatResponse, formatError

describe('Changes called by dropdown:', function() {
  describe('changeCall()', function() {

      var interfaceHTML = fs.readFileSync('src/builds/index.html', 'utf-8');
      var urls = ['/advertisers/?format=json', '/advertisers/?format=xml'];
      var formats = ['json', 'xml'];

      it('Should return correct text', function(done) {
        jsdom.env(interfaceHTML, function(err, window) {
          // var scripts = window.document.getElementsByTagName('script');
          // expect(changeCall.formatResponse("text")).to.equal("")

          done();
          window.close();
        });
      });

      describe('formatHeaders', function() {
        it('Should return correct text', function() {
          var id = 0;
          var response = {
            headers: {
            entries: function(array) {
                var nextIndex = 0;

                return {
                   next: function() {
                       return nextIndex < array.length ?
                           {value: array[nextIndex++], done: false} :
                           {done: true};
                   }
                };
            }
            },
          }
          jsdom.env({
            html: interfaceHTML,
            src: './builds/vendor.js',
            done: function(err, window) {
              expect(changeCall.formatHeaders(response)).to.equal("text")

              window.close();
              done();
            }//callback
          });//browsers env
          // expect(changeCall.formatHeaders("text")).to.not.equal("")
        });
      });//describe formatHeaders
      describe('formatResponse', function() {
        it('Should return correct text', function() {
          var id = 1;
          var format = formats[0];
          jsdom.env({
            html: interfaceHTML,
            src: './builds/vendor.js',
            done: function(err, window) {
              console.log(changeCall.formatResponse("text"))
              expect(changeCall.formatResponse("text")).to.equal("text")
              expect(changeCall.formatResponse("text")).to.not.equal("")
              window.close();
              done();
            }//callback
          });//browsers env
        });
      });//describe formatHeaders
  });
});//describe block
