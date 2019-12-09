/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import MaskedInput from '../../../components/MaskedInput';
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
  age: Yup.string().required('Peso requerido'),
  weight: Yup.string().required('Peso requerido'),
  height: Yup.string().required('Peso requerido'),
});

export default function FormStudent({ match }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Aluno' : 'Edição de Aluno';

  const dispatch = useDispatch();
  const { studentUpdating } = useSelector(state => state.student);

  const handleSubmit = useCallback(
    ({ name, email, ...data }) => {
      const age = data.age.split(' ', 1);
      const weight = data.weight.replace(/,/g, '.').split(' ', 1);
      const height = data.height.replace(/,/g, '.').split(' ', 1);

      if (url === 'cadastrar') {
        dispatch(
          createStudentRequest(name, email, age[0], weight[0], height[0])
        );
      } else
        dispatch(
          updateStudentRequest(
            studentUpdating.id,
            name,
            email,
            age[0],
            weight[0],
            height[0]
          )
        );
    },
    [dispatch, studentUpdating.id, url]
  );

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form
          initialData={studentUpdating}
          schema={schema}
          id="handler"
          onSubmit={handleSubmit}
        >
          <label>NOME COMPLETO</label>
          <Input id="name" name="name" placeholder="Nome completo" />
          <label id="address-title">ENDEREÇO DE E-MAIL</label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Seu endereço de e-mail"
          />

          <InputContainer>
            <label>
              IDADE
              <MaskedInput
                id="age"
                name="age"
                suffix=" anos"
                precision="0"
                maxlength="7"
                decimalSeparator=","
                thousandSeparator=""
                defaultValue={studentUpdating.age}
              />
            </label>
            <label>
              PESO
              <MaskedInput
                id="weight"
                name="weight"
                suffix=" Kg"
                precision="2"
                maxlength="9"
                decimalSeparator=","
                thousandSeparator=""
                defaultValue={studentUpdating.weight}
              />
            </label>
            <label>
              ALTURA
              <MaskedInput
                id="height"
                name="height"
                suffix=" metros"
                precision="2"
                maxlength="12"
                decimalSeparator=","
                thousandSeparator=""
                defaultValue={studentUpdating.height}
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
