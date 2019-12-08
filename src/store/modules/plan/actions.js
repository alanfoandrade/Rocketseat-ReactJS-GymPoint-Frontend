export function createPlanRequest(title, length, price) {
  return {
    type: '@plan/CREATE_REQUEST',
    payload: { title, length, price },
  };
}

export function createPlanSuccess(plan) {
  return {
    type: '@plan/CREATE_SUCCESS',
    payload: { plan },
  };
}

export function loadPlanRequest(page, name) {
  return {
    type: '@plan/LOAD_REQUEST',
    payload: { page, name },
  };
}

export function loadPlanSuccess(page, plans) {
  return {
    type: '@plan/LOAD_SUCCESS',
    payload: { page, plans },
  };
}

export function setPlanUpdating(planUpdating) {
  return {
    type: '@plan/SET_UPDATING',
    payload: { planUpdating },
  };
}

export function resetPlanUpdating() {
  return {
    type: '@plan/RESET_UPDATING',
  };
}

export function updatePlanRequest(id, title, length, price) {
  return {
    type: '@plan/UPDATE_REQUEST',
    payload: { id, title, length, price },
  };
}

export function updatePlanSuccess(plan) {
  return {
    type: '@plan/UPDATE_SUCCESS',
    payload: { plan },
  };
}

export function deletePlanRequest(id) {
  return {
    type: '@plan/DELETE_REQUEST',
    payload: { id },
  };
}
