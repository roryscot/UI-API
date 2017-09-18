import './themes/style.css';


import {getObject} from './api/fetchApi.js';

import ajaxController from './controllers/ajaxController.js';
import setupController from './controllers/setupController.js';
import Prism from '../lib/prism/prism.js';

import idsToBeSwapped from './idsToBeSwapped.js';
import initialStrings from './initialStrings.js';

document.body.onload = setupController.initialNodeGenerator(setupController.loadTextNode, idsToBeSwapped, initialStrings);

var url, format;
var el = document.getElementById("format-selection");
el.addEventListener("change", function() {
  format = this.value
  url = '/advertisers/response.' + format
  // ajaxController.renderObject(url, Prism.highlightAll);

  setupController.clearForSwapping(idsToBeSwapped);
  if (format === 'json') {
    getObject(url).then(function(response) {
       global.document.getElementById("responseDisplayHeaders").innerHTML = JSON.stringify(formatHeaders(response), null, 5)
      return response.text()
    }).then(function(json){
      formatJson(json)
    }).then(function(result) {
      Prism.highlightAll()
    });
  } else {
    getObject(url).then(function(response) {
       global.document.getElementById("responseDisplayHeaders").innerHTML = JSON.stringify(formatHeaders(response), null, 5)
      return response.text()
    }).then(function(result) {
        formatXml(result)
    }).then(function(result) {
      Prism.highlightAll()
    });
  }
});

global.document.getElementById("responseDisplayHeaders").addEventListener("click", function() {
  console.log("click")
  Prism.highlightAll()
})

function formatJson(result) {
      var node = global.document.getElementById('responseDisplayJSON');
      node.innerHTML = document.createTextNode("")
        node.replaceChild(
          document.createTextNode(result),
        node.lastChild
      ).innerHTML = result;
      return node.innerHTML;
}

function formatXml(result) {
  var node = global.document.getElementById('responseDisplayXML');
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

// url = '/advertisers/?format=api+json'
// url = '/advertisers/?format=api+xml'
// url = '/advertisers/response.json'
// url = '/advertisers/response.xml'

//switch to fetch
