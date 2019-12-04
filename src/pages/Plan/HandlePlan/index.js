/* eslint-disable jsx-a11y/label-has-associated-control */

import React from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { createPlanRequest } from '../../../store/modules/plan/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título é requerido'),
  length: Yup.number()
    .typeError('Duração requerida, apenas números')
    .required(),
  price: Yup.number()
    .typeError('Preço requerido, decimais separados por ponto')
    .required(),
});

export default function HandlePlan(props) {
  const { match } = props;
  const path = match.path.split('/')[3];
  const screenTitle =
    path === 'cadastrar' ? 'Cadastro de Plano' : 'Edição de Plano';

  const dispatch = useDispatch();

  function handleSubmit({ title, length, price }) {
    dispatch(createPlanRequest(title, length, price));
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form schema={schema} id="handler" onSubmit={handleSubmit}>
          <h2>TÍTULO DO PLANO</h2>
          <Input name="title" placeholder="Título do plano" />
          <InputContainer>
            <label>
              DURAÇÃO (em meses)
              <Input name="length" placeholder="Duração (em meses)" />
            </label>
            <label>
              PREÇO MENSAL
              <Input name="price" placeholder="Preço mensal" />
            </label>
            <label>
              PREÇO TOTAL
              <Input disabled name="total" placeholder="Preço total" />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

HandlePlan.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
