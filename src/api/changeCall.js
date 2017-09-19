var setupController = require ('../controllers/setupController.js');
var idsToBeSwapped = require('../idsToBeSwapped.js');
// import {getObject} from './fetchApi.js';
// var getObject = require('./fetchApi.js');

var id = 0;

function changeCall() {
  //format data
  function formatResponse(result, format) {
    // var id;
    if (format === 'json') {id = 1;} else if (format === 'xml') { id = 2; }
    var node = window.document.getElementById(idsToBeSwapped[id]);
    node.innerHTML = document.createTextNode("")
      node.replaceChild(
        document.createTextNode(result),
      node.lastChild
      ).innerHTML = result;
    return node.innerHTML;
  }

  //format headers of response
  //TODO: dynamically put url in html
  function formatHeaders(response) {
    //mocking for expediency
    var display = `HTTP ${response.status} ${response.statusText}, \n`
    var headers = {
      Vary: "Accept",
      Allow: "GET, POST, HEAD, OPTIONS",
      "Content-Type": response.headers.get("Content-Type")
    };
    for (var pair in response.headers.entries()) {
      headers[pair[0]] = pair[1];
    }
    for (var i in headers) {
      display += `${i}: ${headers[i]} \n`
    }
    window.document.getElementById(idsToBeSwapped[id]).innerHTML = display
    return display;
  }

  //format and display error
  function formatError(er) {
    setupController.clearForSwapping(idsToBeSwapped);
    window.document.getElementById(idsToBeSwapped[id]).innerHTML = er;
  }

return {formatHeaders, formatResponse, formatError}
}

module.exports = changeCall();
