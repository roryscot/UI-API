import 'whatwg-fetch';

export function getObject(url) {
  return get(url);
}

//private functions
function get(url) {
  return fetch(url).then(onSuccess, onError)
}

function onSuccess(response) {
  return response;
}

function onError(error) {
  return error;
}


//Only handle get from api handle more complex actions in future deployments
