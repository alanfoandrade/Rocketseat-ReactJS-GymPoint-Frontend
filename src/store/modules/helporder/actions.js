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
