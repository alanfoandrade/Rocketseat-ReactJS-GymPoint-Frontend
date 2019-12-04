import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import {
  createEnrollmentFailure,
  loadEnrollmentSuccess,
  loadEnrollmentFailure,
} from './actions';

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

    yield put(createEnrollmentFailure());
  } catch (error) {
    toast.error('Falha no cadastro de matrícula, verifique os dados');
  }
}

export function* loadEnrollment() {
  try {
    const { data } = yield call(api.get, 'enrollments');

    if (data) {
      yield put(loadEnrollmentSuccess(data));
    } else {
      yield put(loadEnrollmentFailure());
    }
  } catch (error) {
    toast.error('Falha ao buscar matrículas, atualize a página');
    yield put(loadEnrollmentFailure());
  }
}

export default all([
  takeLatest('@enrollment/CREATE_REQUEST', createEnrollment),
  takeLatest('@enrollment/LOAD_REQUEST', loadEnrollment),
]);
