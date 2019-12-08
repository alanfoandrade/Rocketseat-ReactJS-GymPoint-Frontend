import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import {
  createPlanSuccess,
  loadPlanRequest,
  loadPlanSuccess,
  updatePlanSuccess,
} from './actions';

export function* createPlan({ payload }) {
  try {
    const { title, length, price } = payload;

    const response = yield call(api.post, 'plans', {
      title,
      length,
      price,
    });

    if (response) {
      yield put(createPlanSuccess(response.data));

      history.push('/dashboard/plano');
    } else toast.error('Falha ao cadastrar plano');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* loadPlan({ payload }) {
  try {
    let { page = 1 } = payload;
    const { name = '' } = payload;
    const { data } = yield call(api.get, `plans?p=${page}&q=${name}`);

    if (name && page !== 1) page = 1;

    if (data) {
      yield put(loadPlanSuccess(page, data));
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
      yield put(updatePlanSuccess(response.data));

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

      yield put(loadPlanRequest());
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
