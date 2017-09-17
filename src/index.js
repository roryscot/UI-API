import './themes/style.css';
import '../lib/prism/prism.css'

import background from './img/background.png';
import ajaxController from './controllers/ajaxController.js';
import setupController from './controllers/setupController.js';
import Prism from '../lib/prism/prism.js';

import idsToBeSwapped from './idsToBeSwapped.js';
import initialStrings from './initialStrings.js';

document.body.onload = setupController.initialNodeGenerator(setupController.loadTextNode, idsToBeSwapped, initialStrings);

var url, params;
var el = document.getElementById("format-selection");
el.addEventListener("change", function() {
  url = '/advertisers/response.' + this.value
  ajaxController.renderObject(url, Prism.highlightAll);
});
