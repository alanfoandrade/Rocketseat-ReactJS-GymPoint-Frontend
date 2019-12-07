/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import {
  createStudentRequest,
  updateStudentRequest,
} from '../../../store/modules/student/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome requerido'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail requerido'),
  age: Yup.number()
    .typeError('Idade requerida, apenas números')
    .positive('Insira um valor maior que zero')
    .required(),
  weight: Yup.number()
    .typeError('Peso requerido, decimais separados por ponto')
    .positive('Insira um valor maior que zero')
    .required(),
  height: Yup.number()
    .typeError('Altura requerida, decimais separados por ponto')
    .positive('Insira um valor maior que zero')
    .required(),
});

export default function FormStudent({ match }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Aluno' : 'Edição de Aluno';

  const { studentUpdating } = useSelector(state => state.student);

  const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    if (url === 'cadastrar') {
      dispatch(createStudentRequest(name, email, age, weight, height));
    } else
      dispatch(
        updateStudentRequest(
          studentUpdating.id,
          name,
          email,
          age,
          weight,
          height
        )
      );
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form
          initialData={studentUpdating}
          schema={schema}
          id="handler"
          onSubmit={handleSubmit}
        >
          <h2>NOME COMPLETO</h2>
          <Input id="name" name="name" placeholder="Nome completo" />
          <h2 id="address-title">ENDEREÇO DE E-MAIL</h2>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Seu endereço de e-mail"
          />

          <InputContainer>
            <label>
              IDADE
              <Input type="number" id="age" name="age" placeholder="Idade" />
            </label>
            <label>
              PESO (em kg)
              <Input
                type="number"
                id="weight"
                name="weight"
                placeholder="Peso em kg"
              />
            </label>
            <label>
              ALTURA
              <Input
                type="number"
                id="height"
                name="height"
                placeholder="Altura"
              />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

FormStudent.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      student: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        weight: PropTypes.number,
        height: PropTypes.number,
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
