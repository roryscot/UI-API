var {expect} = chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var sinon = require('sinon');

var changeCall = require('./changeCall.js');

describe('sanity check', function() {
  it('should pass', function() {
    expect(true).to.equal(true);
  });
});

//it should test formatHeaders, formatResponse, formatError
