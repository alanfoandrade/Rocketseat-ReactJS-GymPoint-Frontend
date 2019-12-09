/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { Form, Input } from '@rocketseat/unform';
import MaskedInput from '../../../components/MaskedInput';

import { formatPriceBrl } from '../../../utils/format';
import {
  createPlanRequest,
  updatePlanRequest,
} from '../../../store/modules/plan/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

const schema = Yup.object().shape({
  title: Yup.string().required('Título requerido'),
  length: Yup.string().required('Duração requerida'),
  price: Yup.string().required('Preço requerido'),
});

export default function FormPlan({ match }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Plano' : 'Edição de Plano';

  const dispatch = useDispatch();
  const { planUpdating } = useSelector(state => state.plan);
  const [PlanLength, setLength] = useState(planUpdating.length || 0);
  const [PlanPrice, setPrice] = useState(planUpdating.price || 0);

  const total = useMemo(() => formatPriceBrl(PlanPrice * PlanLength), [
    PlanPrice,
    PlanLength,
  ]);

  const handleChangeLength = value => {
    const lengthNumber = value.replace(/,/g, '.').split(' ', 1);
    setLength(lengthNumber);
  };

  const handleChangePrice = value => {
    const priceNumber = value.replace(/,/g, '.');
    setPrice(priceNumber);
  };

  const handleSubmit = useCallback(
    ({ title, ...data }) => {
      const length = data.length.split(' ', 1);
      const price = data.price.replace(/,/g, '.');

      if (url === 'cadastrar') {
        dispatch(createPlanRequest(title, length, price));
      } else dispatch(updatePlanRequest(planUpdating.id, title, length, price));
    },
    [dispatch, planUpdating.id, url]
  );

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form
          initialData={planUpdating}
          schema={schema}
          id="handler"
          onSubmit={handleSubmit}
        >
          <label>TÍTULO DO PLANO</label>
          <Input id="title" name="title" placeholder="Título do plano" />
          <InputContainer>
            <label>
              DURAÇÃO
              <MaskedInput
                id="length"
                name="length"
                suffix=" meses"
                precision="0"
                maxlength="8"
                defaultValue={planUpdating.length}
                value={PlanLength}
                onChange={handleChangeLength}
              />
            </label>
            <label>
              PREÇO MENSAL
              <MaskedInput
                id="price"
                name="price"
                precision="2"
                maxlength="9"
                decimalSeparator=","
                thousandSeparator=""
                defaultValue={planUpdating.price}
                value={PlanPrice}
                onChange={handleChangePrice}
              />
            </label>
            <label>
              PREÇO TOTAL
              <Input
                disabled
                id="total"
                value={total}
                name="total"
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
