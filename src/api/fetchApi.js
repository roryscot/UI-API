require('whatwg-fetch');
var setupController = require('../controllers/setupController.js');
var idsToBeSwapped = require('../idsToBeSwapped.js');

module.exports = function getObject(url) {
  return get(url);
}

//private functions
function get(url) {
  return fetch(url).then(function(response) {
  if(response.ok) {
    return response;
  }
  throw new Error(response.status + " " + response.statusText);
}).catch(function(er) {
  return onError(er)
});
}

function onSuccess(response) {
  return response;
}

function onError(error) {
  // setupController.clearForSwapping(idsToBeSwapped);
  throw error;
}

//Only handle get from api handle more complex actions in future deployments
