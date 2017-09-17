import 'whatwg-fetch';
import xml from 'xml';
import ajaxController from '../controllers/ajaxController.js';
import Prism from '../../lib/prism/prism.js'

export function getObj(url, params) {
  return get(url, params);
}


//private functions

function get(url, params) {
  if (url) {
    console.log(url)
    if (params === 'xml') {
      return xml(fetch(url).then(onSuccess, onError));
    }
    return fetch(url).then(onSuccess, onError);

    // return ajaxController.renderObject(url)
  }
}

function onSuccess(response) {
  console.log(response)
  return response
}

function onError(error) {
  return error;
}
