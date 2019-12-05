export function createPlanRequest(title, length, price) {
  return {
    type: '@plan/CREATE_REQUEST',
    payload: { title, length, price },
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

export function updatePlanRequest(id, title, length, price) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { id, title, length, price },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}

export function deletePlanSuccess(id) {
  return {
    type: '@plan/DELETE_SUCCESS',
    payload: { id },
  };
}
