import './themes/style.css';


import {getObject} from './api/fetchApi.js';

// import ajaxController from './controllers/ajaxController.js';
import setupController from './controllers/setupController.js';
import Prism from '../lib/prism/prism.js';

import idsToBeSwapped from './idsToBeSwapped.js';
import initialStrings from './initialStrings.js';

document.body.onload = setupController.initialNodeGenerator(setupController.loadTextNode, idsToBeSwapped, initialStrings);

var url, format;
var el = document.getElementById("format-selection");
el.addEventListener("change", function() {
  format = this.value
  url = '/advertisers/response.' + format; 

  setupController.clearForSwapping(idsToBeSwapped);
  if (format === 'json') {
    getObject(url).then(function(response) {
       global.document.getElementById(idsToBeSwapped[0]).innerHTML = JSON.stringify(formatHeaders(response), null, 5)
      return response.text()
    }).then(function(text){
      formatJson(text)
    }).then(function(result) {
      Prism.highlightAll()
    }).catch(function(error) {
      console.log(error);
      console.log("");
       global.document.getElementById(idsToBeSwapped[0]).innerHTML = error;
    });
  } else {
    getObject(url).then(function(response) {
       global.document.getElementById(idsToBeSwapped[0]).innerHTML = JSON.stringify(formatHeaders(response), null, 5)
      return response.text()
    }).then(function(result) {
        formatXml(result)
    }).then(function(result) {
      Prism.highlightAll()
    });
  }
});

function formatJson(result) {
      var node = global.document.getElementById(idsToBeSwapped[1]);
      node.innerHTML = document.createTextNode("")
        node.replaceChild(
          document.createTextNode(result),
        node.lastChild
      ).innerHTML = result;
      return node.innerHTML;
}

function formatXml(result) {
  var node = global.document.getElementById(idsToBeSwapped[2]);
  node.innerHTML = document.createTextNode("")
    node.replaceChild(
      document.createTextNode(result),
    node.lastChild
    ).innerHTML = result;
  return node.innerHTML;
}

function formatHeaders(response) {
  //mocking for expediency
  var headers = {
    HTTP: response.status + " " + response.statusText,
    Vary: "Accept",
    Allow: "GET, POST, HEAD, OPTIONS",
    "Content-Type": "text/html"
  };

  for (var pair in response.headers.entries()) {
    headers[pair[0]] = pair[1];
  }
  return headers;
}
