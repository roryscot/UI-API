//display ids
var setupController = require('./setupController.js');
var idsToBeSwapped = require('../idsToBeSwapped.js');
var xmlResponse = 'responseDisplayXML';
var jsonResponse = 'responseDisplayJSON';
var headersResponse = 'responseDisplayHeaders';

function ajaxController() {
  function load (url, callback, syntaxHighlighting) {
    var httpRequest;
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function(){
        // Process the server response here.
        if (httpRequest.readyState < 4) {
          return;
        }
        //Error handling
        if (httpRequest.status < 200 || httpRequest.status >= 300) {
          alert("There was a problem processing your request.")
          var errorMessage = `Error: ${httpRequest.status} ${httpRequest.statusText}`;
          document.getElementById(idsToBeSwapped[0]).innerHTML = errorMessage;
          return httpRequest;
        }
        // all is well
        if (httpRequest.readyState === 4) {
          var responseId = "", last = url.length-1;
          if (url[last] === 'l') { responseId = xmlResponse }
          else if (url[last] === 'n') { responseId = jsonResponse }

          var headersId = headersResponse;
          callback(httpRequest, url, headersId, responseId, syntaxHighlighting);
        }
    };

    console.log(httpRequest)
    httpRequest.open('GET', url, true);
    httpRequest.send();

    return httpRequest;
  }
// run replaceObject on an instance of a request
  function replaceObject(httpRequest, url, headersId, responseId, syntaxHighlighting) {
    console.log(responseText);
    var responseToBeFormatted = httpRequest.responseText;
    var headers = `HTTP ${httpRequest.status} ${httpRequest.statusText}\n`;
    headers += (httpRequest.getAllResponseHeaders());
    //set headers
    document.getElementById(headersId)
      .replaceChild(
        document.createTextNode(headers),
        document.getElementById(headersId)
        .lastChild).innerHTML = headers;
    //set response
    document.getElementById(responseId)
      .replaceChild(
        document.createTextNode(responseToBeFormatted),
        document.getElementById(responseId).lastChild
      ).innerHTML = responseToBeFormatted;
      //highlight response
      if (syntaxHighlighting) {
        syntaxHighlighting();
      }
    }

    function renderObject (url, syntaxHighlighting) {
      setupController.clearForSwapping(idsToBeSwapped);
      this.load(url, this.replaceObject, syntaxHighlighting);
    }
  return {load, replaceObject, renderObject}
}

module.exports = ajaxController();
