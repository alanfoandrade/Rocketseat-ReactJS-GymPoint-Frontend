import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { createPlanFailure, loadPlanSuccess, loadPlanFailure } from './actions';

import history from '../../../services/history';

import api from '../../../services/api';

export function* createPlan({ payload }) {
  try {
    const { title, length, price } = payload;

    console.tron.log(payload);

    yield call(api.post, 'plans', {
      title,
      length,
      price,
    });

    history.push('/dashboard/plano');

    yield put(createPlanFailure());
  } catch (error) {
    toast.error('Falha na criação de plano, verifique os dados');
    yield put(createPlanFailure());
  }
}

export function* loadPlan() {
  try {
    const { data } = yield call(api.get, 'plans');

    if (data) {
      yield put(loadPlanSuccess(data));
    } else {
      yield put(loadPlanFailure());
    }
  } catch (error) {
    toast.error('Falha ao buscar planos, atualize a página');
    yield put(loadPlanFailure());
  }
}

export default all([
  takeLatest('@plan/CREATE_REQUEST', createPlan),
  takeLatest('@plan/LOAD_REQUEST', loadPlan),
]);
