import './themes/style.css';
var getObject = require('./api/fetchApi.js');
var changeCall = require('./api/changeCall.js');
// import changeCall from './api/changeCall.js';

import setupController from './controllers/setupController.js';
import Prism from '../lib/prism/prism.js';

import idsToBeSwapped from './idsToBeSwapped.js';
import initialStrings from './initialStrings.js';

document.body.onload =
  setupController.initialNodeGenerator(setupController.loadTextNode, idsToBeSwapped, initialStrings);

//declare variables for build
var url, format, id;
var dropdown = document.getElementById("format-selection");


//attach functionality to dropdown menu
dropdown.addEventListener("change", function() {
  id = 0;
  format = this.value
  url = '/advertisers/?format=' + format;
  setupController.clearForSwapping(idsToBeSwapped);
  formatGetter(url)
});

//fetch data and dynamically format html
function formatGetter(url) {
  getObject(url).then(function(response) {
      changeCall.formatHeaders(response)
      return response.text()
    }).then(function(result) {
        formatResponse(result)
    }).then(function(result) {
      Prism.highlightAll()
    }).catch(function(er) {
      changeCall.formatError(er);
    });
}

//out here to have access to 'format'

function formatResponse(result) {
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
