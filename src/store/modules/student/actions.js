export function createStudentRequest(name, email, age, weight, height) {
  return {
    type: '@student/CREATE_REQUEST',
    payload: { name, email, age, weight, height },
  };
}

export function createStudentSuccess(student) {
  return {
    type: '@student/CREATE_SUCCESS',
    payload: { student },
  };
}

export function loadStudentRequest(page, name) {
  return {
    type: '@student/LOAD_REQUEST',
    payload: { page, name },
  };
}

export function loadStudentSuccess(page, students) {
  return {
    type: '@student/LOAD_SUCCESS',
    payload: { page, students },
  };
}

export function setStudentUpdating(studentUpdating) {
  return {
    type: '@student/SET_UPDATING',
    payload: { studentUpdating },
  };
}

export function resetStudentUpdating() {
  return {
    type: '@student/RESET_UPDATING',
  };
}

export function updateStudentRequest(id, name, email, age, weight, height) {
  return {
    type: '@student/UPDATE_REQUEST',
    payload: { id, name, email, age, weight, height },
  };
}

export function updateStudentSuccess(student) {
  return {
    type: '@student/UPDATE_SUCCESS',
    payload: { student },
  };
}

export function deleteStudentRequest(id) {
  return {
    type: '@student/DELETE_REQUEST',
    payload: { id },
  };
}
