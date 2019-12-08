import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createEnrollmentSuccess,
  loadEnrollmentRequest,
  loadEnrollmentSuccess,
  updateEnrollmentSuccess,
} from './actions';

export function* createEnrollment({ payload }) {
  try {
    const { student_id, plan_id, start_date } = payload;

    const response = yield call(api.post, 'enrollments', {
      student_id,
      plan_id,
      start_date,
    });

    if (response) {
      yield put(createEnrollmentSuccess(response.data));

      history.push('/dashboard/matricula');
    }
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* loadEnrollment({ payload }) {
  try {
    const { page = 1 } = payload;
    const { data } = yield call(api.get, `enrollments?p=${page}`);

    if (data) {
      yield put(loadEnrollmentSuccess(data));
    } else toast.error('Falha ao buscar matrículas, atualize a página');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updateEnrollment({ payload }) {
  try {
    const { id, student_id, plan_id, start_date } = payload;

    const response = yield call(api.put, `enrollments/${id}`, {
      student_id,
      plan_id,
      start_date,
    });

    if (response) {
      toast.success('Matrícula atualizada com sucesso');
      yield put(updateEnrollmentSuccess(response.data));

      history.push('/dashboard/matricula');
    }
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

      yield put(loadEnrollmentRequest());
    } else toast.error('Falha ao excluir matrícula');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@enrollment/CREATE_REQUEST', createEnrollment),
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollment),
  takeLatest('@enrollment/UPDATE_REQUEST', updateEnrollment),
  takeLatest('@enrollment/DELETE_REQUEST', deleteEnrollment),
]);
