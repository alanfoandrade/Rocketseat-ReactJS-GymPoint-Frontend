/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { formatPriceBrl } from '../../../utils/format';
import {
  createPlanRequest,
  updatePlanRequest,
} from '../../../store/modules/plan/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título requerido'),
  length: Yup.number()
    .typeError('Duração requerida, apenas números')
    .positive('Insira um valor maior que zero')
    .required(),
  price: Yup.number()
    .typeError('Preço requerido, decimais separados por ponto')
    .positive('Insira um valor maior que zero')
    .required(),
});

export default function FormPlan({ match, location }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Plano' : 'Edição de Plano';

  const [PlanLength, setLength] = useState(
    location.state ? location.state.plan.length : 0
  );
  const [PlanPrice, setPrice] = useState(
    location.state ? location.state.plan.price : 0
  );
  const [PlanTitle, setTitle] = useState(
    location.state ? location.state.plan.title : ''
  );
  const [PlanId] = useState(location.state ? location.state.plan.id : null);

  const dispatch = useDispatch();

  const total = useMemo(() => formatPriceBrl(PlanPrice * PlanLength), [
    PlanPrice,
    PlanLength,
  ]);

  function handleSubmit({ title, length, price }) {
    if (!PlanId) dispatch(createPlanRequest(title, length, price));
    dispatch(updatePlanRequest(PlanId, title, length, price));
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form schema={schema} id="handler" onSubmit={handleSubmit}>
          <h2>TÍTULO DO PLANO</h2>
          <Input
            id="title"
            name="title"
            value={PlanTitle}
            onChange={e => setTitle(e.target.value)}
            placeholder="Título do plano"
          />
          <InputContainer>
            <label>
              DURAÇÃO (em meses)
              <Input
                type="number"
                id="length"
                name="length"
                value={PlanLength}
                onChange={e => setLength(e.target.value)}
                placeholder="Duração (em meses)"
              />
            </label>
            <label>
              PREÇO MENSAL (em R$)
              <Input
                type="number"
                id="price"
                name="price"
                value={PlanPrice}
                onChange={e => setPrice(e.target.value)}
                placeholder="Preço mensal"
              />
            </label>
            <label>
              PREÇO TOTAL
              <Input
                disabled
                id="total"
                name="total"
                value={total}
                placeholder="Preço total"
              />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

FormPlan.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      plan: PropTypes.shape({
        length: PropTypes.number,
        price: PropTypes.number,
        title: PropTypes.string,
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
