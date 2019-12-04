export function createEnrollmentRequest(student_id, plan_id, start_date) {
  return {
    type: '@enrollment/CREATE_REQUEST',
    payload: { student_id, plan_id, start_date },
  };
}

export function createEnrollmentFailure() {
  return {
    type: '@enrollment/CREATE_FAILURE',
  };
}

export function loadEnrollmentRequest() {
  return {
    type: '@enrollment/LOAD_REQUEST',
  };
}

export function loadEnrollmentSuccess(enrollments) {
  return {
    type: '@enrollment/LOAD_SUCCESS',
    payload: { enrollments },
  };
}

export function loadEnrollmentFailure() {
  return {
    type: '@enrollment/LOAD_FAILURE',
  };
}
