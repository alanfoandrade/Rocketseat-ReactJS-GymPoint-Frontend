import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo-big.svg';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail requerido'),
  password: Yup.string()
    .min(6, 'Mínimo 6 caracteres')
    .required('Senha requerida'),
});

export default function Login() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img src={logo} alt="GymPoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <h1>SEU E-MAIL</h1>
        <Input name="email" type="email" placeholder="E-mail cadastrado" />
        <h1>SUA SENHA</h1>
        <Input name="password" type="password" placeholder="Senha secreta" />

        <button type="submit">Entrar no sistema</button>
      </Form>
    </>
  );
}
