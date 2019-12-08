export function createEnrollmentRequest(student_id, plan_id, start_date) {
  return {
    type: '@enrollment/CREATE_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function createEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/CREATE_SUCCESS',
    payload: { enrollment },
  };
}

export function loadEnrollmentRequest(page) {
  return {
    type: '@enrollment/LOAD_REQUEST',
    payload: { page },
  };
}

export function loadEnrollmentSuccess(enrollments) {
  return {
    type: '@enrollment/LOAD_SUCCESS',
    payload: { enrollments },
  };
}

export function setEnrollUpdating(enrollUpdating) {
  return {
    type: '@enrollment/SET_UPDATING',
    payload: { enrollUpdating },
  };
}

export function resetEnrollmentUpdating() {
  return {
    type: '@enrollment/RESET_UPDATING',
  };
}

export function updateEnrollmentRequest(id, student_id, plan_id, start_date) {
  return {
    type: '@enrollment/UPDATE_REQUEST',
    payload: { id, student_id, plan_id, start_date },
  };
}

export function updateEnrollmentSuccess(enrollment) {
  return {
    type: '@enrollment/UPDATE_SUCCESS',
    payload: { enrollment },
  };
}

export function deleteEnrollmentRequest(id) {
  return {
    type: '@enrollment/DELETE_REQUEST',
    payload: { id },
  };
}
