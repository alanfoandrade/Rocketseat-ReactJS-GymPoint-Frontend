import { takeLatest, call, put, all } from 'redux-saga/effects';
import { signInSuccess } from './actions';

import history from '../../../services/history';
import api from '../../../services/api';

export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'auth', {
    email,
    password,
  });

  const { token, user } = response.data;

  console.tron.log(token);
  console.tron.log(user);

  if (user.auth_level !== 0 && user.auth_level !== 1) {
    console.tron.error('Não é funcionário');
    return;
  }

  yield put(signInSuccess(token, user));

  history.push('/dashboard/aluno');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
