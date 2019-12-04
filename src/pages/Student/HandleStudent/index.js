/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { createStudentRequest } from '../../../store/modules/student/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Nome é requerido'),
  email: Yup.string()
    .email('E-mail inválido')
    .required('E-mail requerido'),
  age: Yup.number()
    .typeError('Idade requerida, apenas números')
    .required(),
  weight: Yup.number()
    .typeError('Peso requerido, decimais separados por ponto')
    .required(),
  height: Yup.number()
    .typeError('Altura requerida, decimais separados por ponto')
    .required(),
});

export default function HandleStudent(props) {
  const { match } = props;
  const path = match.path.split('/')[3];
  const screenTitle =
    path === 'cadastrar' ? 'Cadastro de Aluno' : 'Edição de Aluno';

  const dispatch = useDispatch();

  function handleSubmit({ name, email, age, weight, height }) {
    dispatch(createStudentRequest(name, email, age, weight, height));
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form schema={schema} id="handler" onSubmit={handleSubmit}>
          <h2>NOME COMPLETO</h2>
          <Input name="name" placeholder="Nome completo" />
          <h2 id="address-title">ENDEREÇO DE E-MAIL</h2>
          <Input
            name="email"
            type="email"
            placeholder="Seu endereço de e-mail"
          />

          <InputContainer>
            <label>
              IDADE
              <Input name="age" placeholder="Idade" />
            </label>
            <label>
              PESO (em kg)
              <Input name="weight" placeholder="Peso em kg" />
            </label>
            <label>
              ALTURA
              <Input name="height" placeholder="Altura" />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

HandleStudent.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
