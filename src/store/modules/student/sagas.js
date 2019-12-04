import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';

import {
  createStudentFailure,
  loadStudentSuccess,
  loadStudentFailure,
} from './actions';
import history from '../../../services/history';

import api from '../../../services/api';

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload;

    yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    history.push('/dashboard/aluno');

    yield put(createStudentFailure());
  } catch (error) {
    toast.error('Falha no cadastro, verifique os dados');
    yield put(createStudentFailure());
  }
}

export function* loadStudent() {
  try {
    const { data } = yield call(api.get, 'students');

    if (data) {
      yield put(loadStudentSuccess(data));
    } else {
      yield put(loadStudentFailure());
    }
  } catch (error) {
    toast.error('Falha ao buscar alunos, atualize a página');
    yield put(loadStudentFailure());
  }
}

export default all([
  takeLatest('@student/CREATE_REQUEST', createStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudent),
]);
