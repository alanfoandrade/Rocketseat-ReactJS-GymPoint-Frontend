export function loadHelpOrderRequest() {
  return {
    type: '@helporder/LOAD_REQUEST',
  };
}

export function loadHelpOrderSuccess(helporders) {
  return {
    type: '@helporder/LOAD_SUCCESS',
    payload: { helporders },
  };
}

export function updateHelpOrderRequest(id, answer) {
  return {
    type: '@helporder/UPDATE_REQUEST',
    payload: { id, answer },
  };
}

export function updateHelpOrderSucces(id) {
  return {
    type: '@helporder/UPDATE_SUCCESS',
    payload: { id },
  };
}
