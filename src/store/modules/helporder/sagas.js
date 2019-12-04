import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { loadHelpOrderSuccess, loadHelpOrderFailure } from './actions';

import api from '../../../services/api';

export function* loadHelpOrder() {
  try {
    const { data } = yield call(api.get, 'help-orders/unanswered');

    if (data) {
      yield put(loadHelpOrderSuccess(data));
    } else {
      yield put(loadHelpOrderFailure());
    }
  } catch (error) {
    toast.error('Falha ao buscar pedidos de ajuda, atualize a página');
    yield put(loadHelpOrderFailure());
  }
}

export default all([takeLatest('@helporder/LOAD_REQUEST', loadHelpOrder)]);
