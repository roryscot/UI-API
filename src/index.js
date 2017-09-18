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
  url = '/advertisers/?format=' + format;

  setupController.clearForSwapping(idsToBeSwapped);
  getObject(url).then(function(response) {
      global.document.getElementById(idsToBeSwapped[0]).innerHTML = formatHeaders(response)
      return response.text()
    }).then(function(result) {
        formatResponse(result)
    }).then(function(result) {
      Prism.highlightAll()
    });
});

function formatResponse(result) {
  var id;
  if (format === 'json') {
    id = 1;
  }
  else if (format === 'xml') {
    id = 2;
  }
  var node = global.document.getElementById(idsToBeSwapped[id]);
  node.innerHTML = document.createTextNode("")
    node.replaceChild(
      document.createTextNode(result),
    node.lastChild
    ).innerHTML = result;
  return node.innerHTML;
}

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
  return display;
}
