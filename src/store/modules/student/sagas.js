import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createStudentSuccess,
  loadStudentRequest,
  loadStudentSuccess,
  updateStudentSuccess,
} from './actions';

export function* createStudent({ payload }) {
  try {
    const { name, email, age, weight, height } = payload;

    const response = yield call(api.post, 'students', {
      name,
      email,
      age,
      weight,
      height,
    });

    if (response) {
      yield put(createStudentSuccess(response.data));

      history.push('/dashboard/aluno');
    }
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* loadStudent({ payload }) {
  try {
    let { page = 1 } = payload;
    const { name = '' } = payload;
    const { data } = yield call(api.get, `students?p=${page}&q=${name}`);

    if (name && page !== 1) page = 1;

    if (data) {
      yield put(loadStudentSuccess(page, data));
    } else toast.error('Falha ao buscar alunos');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updateStudent({ payload }) {
  try {
    const { id, name, email, age, weight, height } = payload;

    const response = yield call(api.put, `students/${id}`, {
      name,
      email,
      age,
      weight,
      height,
    });

    if (response) {
      toast.success('Aluno atualizado com sucesso');
      yield put(updateStudentSuccess(response.data));

      history.push('/dashboard/aluno');
    }
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* deleteStudent({ payload }) {
  try {
    const { id } = payload;

    const response = yield call(api.delete, `students/${id}`);

    if (response) {
      toast.success(response.data.message);

      yield put(loadStudentRequest());
    } else toast.error('Falha ao excluir aluno');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@student/CREATE_REQUEST', createStudent),
  takeLatest('@student/LOAD_REQUEST', loadStudent),
  takeLatest('@student/UPDATE_REQUEST', updateStudent),
  takeLatest('@student/DELETE_REQUEST', deleteStudent),
]);
