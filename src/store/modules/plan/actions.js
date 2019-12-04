export function createPlanRequest(title, length, price) {
  return {
    type: '@plan/CREATE_REQUEST',
    payload: { title, length, price },
  };
}

export function createPlanFailure() {
  return {
    type: '@plan/CREATE_FAILURE',
  };
}

export function loadPlanRequest() {
  return {
    type: '@plan/LOAD_REQUEST',
  };
}

export function loadPlanSuccess(plans) {
  return {
    type: '@plan/LOAD_SUCCESS',
    payload: { plans },
  };
}

export function loadPlanFailure() {
  return {
    type: '@plan/LOAD_FAILURE',
  };
}
