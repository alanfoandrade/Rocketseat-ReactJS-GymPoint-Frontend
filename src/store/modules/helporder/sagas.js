import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import { loadHelpOrderSuccess } from './actions';

import api from '../../../services/api';

export function* loadHelpOrder() {
  try {
    const { data } = yield call(api.get, 'help-orders/unanswered');

    if (data) {
      yield put(loadHelpOrderSuccess(data));
    } else toast.error('Falha ao buscar pedidos de ajuda');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([takeLatest('@helporder/LOAD_REQUEST', loadHelpOrder)]);
