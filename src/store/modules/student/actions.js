export function createStudentRequest(name, email, age, weight, height) {
  return {
    type: '@student/CREATE_REQUEST',
    payload: { name, email, age, weight, height },
  };
}

export function createStudentFailure() {
  return {
    type: '@student/CREATE_FAILURE',
  };
}

export function loadStudentRequest() {
  return {
    type: '@student/LOAD_REQUEST',
  };
}

export function loadStudentSuccess(students) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { students },
  };
}

export function loadStudentFailure() {
  return {
    type: '@student/LOAD_FAILURE',
  };
}
