import { takeLatest, call, put, all } from 'redux-saga/effects';

import { toast } from 'react-toastify';
import history from '../../../services/history';

import { loadHelpOrderSuccess, updateHelpOrderSucces } from './actions';

import api from '../../../services/api';

export function* loadHelpOrder() {
  try {
    const { data } = yield call(api.get, 'help-orders/unanswered');

    if (data) {
      yield put(loadHelpOrderSuccess(data));

      history.push('/dashboard/ajuda');
    } else toast.error('Falha ao buscar pedidos de ajuda');
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export function* updateHelpOrder({ payload }) {
  try {
    const { id, answer } = payload;

    const response = yield call(api.post, `help-orders/${id}/answer`, {
      answer,
    });

    if (response) {
      toast.success('Pedido de ajuda respondido com sucesso');
      yield put(updateHelpOrderSucces(id));
    }
  } catch (err) {
    toast.error(err.response.data.error);
  }
}

export default all([
  takeLatest('@helporder/LOAD_REQUEST', loadHelpOrder),
  takeLatest('@helporder/UPDATE_REQUEST', updateHelpOrder),
]);
