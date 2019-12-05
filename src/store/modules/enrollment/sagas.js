import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { loadEnrollmentSuccess, deleteEnrollmentSuccess } from './actions';

import history from '../../../services/history';

import api from '../../../services/api';

export function* createEnrollment({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    yield call(api.post, 'enrollments', {
      student_id,
      plan_id,
      start_date,
    });

    history.push('/dashboard/matricula');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* loadEnrollment() {
  try {
    const { data } = yield call(api.get, 'enrollments');

    if (data) {
      yield put(loadEnrollmentSuccess(data));
    } else toast.error('Falha ao buscar matrículas, atualize a página');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* deleteEnrollment({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `enrollments/${id}`);

    if (response) {
      toast.success(response.data.message);
      yield put(deleteEnrollmentSuccess(id));
    } else toast.error('Falha ao excluir matrícula');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@enrollment/CREATE_REQUEST', createEnrollment),
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollment),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
