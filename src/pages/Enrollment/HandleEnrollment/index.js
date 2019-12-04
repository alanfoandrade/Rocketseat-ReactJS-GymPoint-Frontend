/* eslint-disable jsx-a11y/label-has-associated-control */
import { useDispatch } from 'react-redux';
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';

// import * as Yup from 'yup';
import { createEnrollmentRequest } from '../../../store/modules/enrollment/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

/* const schema = Yup.object().shape({
  name: Yup.string().required('Nome é requerido'),
  plan: Yup.string()
    .required('Plano requerido'),
  start_date: Yup.number()
    .typeError('Data de início requerida')
    .required(),
  end_date: Yup.number()
    .typeError('Data de término requerida')
    .required(),
  price: Yup.number()
    .typeError('Preço requerido')
    .required(),
}); */

export default function HandleEnrollment(props) {
  const { match } = props;
  const path = match.path.split('/')[3];
  const title =
    path === 'cadastrar' ? 'Cadastro de Matrícula' : 'Edição de Matrícula';

  const dispatch = useDispatch();

  function handleSubmit({ student_id, plan_id, start_date }) {
    dispatch(createEnrollmentRequest(student_id, plan_id, start_date));
  }
  return (
    <DefaultLayout screenTitle={title} btnBack btnSave>
      <Content>
        <Form id="handler" onSubmit={handleSubmit}>
          <h2>ALUNO</h2>
          <Input name="name" placeholder="Buscar aluno" />
          <InputContainer>
            <label>
              PLANO
              <Input name="plan" placeholder="Selecione o plano" />
            </label>
            <label>
              DATA DE INÍCIO
              <Input name="start_date" placeholder="Escolha a data" />
            </label>
            <label>
              DATA DE TÉRMINO
              <Input disabled name="end_date" placeholder="Data de término" />
            </label>
            <label>
              VALOR TOTAL
              <Input disabled name="price" placeholder="Valor total" />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

HandleEnrollment.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
};
