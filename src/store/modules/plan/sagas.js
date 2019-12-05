import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { loadPlanSuccess, deletePlanSuccess } from './actions';

import history from '../../../services/history';

import api from '../../../services/api';

export function* createPlan({ payload }) {
  try {
    const { title, length, price } = payload;

    const response = yield call(api.post, 'plans', {
      title,
      length,
      price,
    });

    if (response) {
      history.push('/dashboard/plano');
    } else toast.error('Falha ao cadastrar plano');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* loadPlan() {
  try {
    const { data } = yield call(api.get, 'plans');

    if (data) {
      yield put(loadPlanSuccess(data));
    } else toast.error('Falha ao buscar planos');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updatePlan({ payload }) {
  try {
    const { id, title, length, price } = payload;
    const response = yield call(api.put, `plans/${id}`, {
      title,
      length,
      price,
    });

    if (response) {
      toast.success('Plano atualizado com sucesso');
      history.push('/dashboard/plano');
    }
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* deletePlan({ payload }) {
  try {
    const { id } = payload;
    const response = yield call(api.delete, `plans/${id}`);

    if (response) {
      toast.success(response.data.message);
      yield put(deletePlanSuccess(id));
    } else toast.error('Falha ao excluir aluno');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@plan/CREATE_REQUEST', createPlan),
  takeLatest('@plan/LOAD_REQUEST', loadPlan),
  takeLatest('@plan/UPDATE_REQUEST', updatePlan),
  takeLatest('@plan/DELETE_REQUEST', deletePlan),
]);
