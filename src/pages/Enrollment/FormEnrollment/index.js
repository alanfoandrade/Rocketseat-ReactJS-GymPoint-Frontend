/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { format, parseISO, addMonths } from 'date-fns';
import pt from 'date-fns/locale/pt';
import * as Yup from 'yup';
import { formatPriceBrl } from '../../../utils/format';
import ReactSelect from '../../../components/ReactSelect';
import DatePicker from '../../../components/DatePicker';

import {
  createEnrollmentRequest,
  updateEnrollmentRequest,
} from '../../../store/modules/enrollment/actions';
import { loadPlanRequest } from '../../../store/modules/plan/actions';

import DefaultLayout from '../../_layouts/default';
import ReactAsyncSelect from '../../../components/ReactAsyncSelect';
import { Content, InputContainer } from './styles';
import { selectStyle } from '../../../styles/global';

const schema = Yup.object().shape({
  student_id: Yup.number()
    .typeError('Selecione um Aluno')
    .required('Aluno requerido'),
  plan_id: Yup.number()
    .typeError('Selecione um Plano')
    .required('Plano requerido'),
  start_date: Yup.date('Formato de data inválido')
    .typeError('Selecione uma Data')
    .required('Data de início requerida'),
});

export default function FormEnrollment({ match }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Matrícula' : 'Edição de Matrícula';

  const dispatch = useDispatch();

  const { students } = useSelector(state => state.student);
  const { plans } = useSelector(state => state.plan);
  const { enrollUpdating } = useSelector(state => state.enrollment);
  const [handlePlan, setHandlePlan] = useState(enrollUpdating.plan || {});
  const [handleDate, setHandleDate] = useState(
    enrollUpdating.start_date ? parseISO(enrollUpdating.start_date) : new Date()
  );

  const end_date = useMemo(
    () =>
      handlePlan.length
        ? format(
            addMonths(handleDate, handlePlan.length),
            "dd 'de' MMMM 'de' yyyy",
            { locale: pt }
          )
        : '',
    [handleDate, handlePlan.length]
  );

  const total = useMemo(
    () =>
      handlePlan.length
        ? formatPriceBrl(handlePlan.length * handlePlan.price)
        : '',
    [handlePlan]
  );

  const handlePlanChange = plan => {
    setHandlePlan(plan);
  };

  const handleDateChange = date => {
    setHandleDate(date);
  };

  const handleSubmit = useCallback(
    ({ student_id, plan_id, start_date }) => {
      if (url === 'cadastrar') {
        dispatch(createEnrollmentRequest(student_id, plan_id, start_date));
      } else {
        dispatch(
          updateEnrollmentRequest(
            enrollUpdating.id,
            student_id,
            plan_id,
            start_date
          )
        );
      }
    },
    [dispatch, enrollUpdating.id, url]
  );

  useEffect(() => {
    dispatch(loadPlanRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form
          schema={schema}
          initialData={enrollUpdating}
          id="handler"
          onSubmit={handleSubmit}
        >
          <label>
            ALUNO
            <ReactAsyncSelect
              name="student_id"
              placeholder="Selecione o aluno"
              options={students}
              cacheOptions
              getOptionLabel={option => option.name}
              getOptionValue={option => option.id}
              initialState={enrollUpdating}
              defaultValue={
                enrollUpdating.student && {
                  id: enrollUpdating.student.id,
                  name: enrollUpdating.student.name,
                }
              }
            />
          </label>
          <InputContainer>
            <label>
              PLANO
              <ReactSelect
                name="plan_id"
                options={plans}
                styles={selectStyle}
                placeholder="Selecione o plano"
                getOptionLabel={option => option.title}
                getOptionValue={option => option.id}
                onChange={handlePlanChange}
                defaultValue={
                  enrollUpdating.plan && {
                    id: enrollUpdating.plan.id,
                    title: enrollUpdating.plan.title,
                  }
                }
              />
            </label>
            <label>
              DATA DE INÍCIO
              <div id="date-input">
                <DatePicker
                  name="start_date"
                  locale={pt}
                  selected={handleDate}
                  dateFormat="dd 'de' MMMM 'de' yyyy"
                  onChange={date => handleDateChange(date)}
                />
              </div>
            </label>
            <label>
              DATA DE TÉRMINO
              <Input
                name="end_date"
                value={end_date}
                placeholder="Data de término"
                disabled
              />
            </label>
            <label id="price">
              VALOR TOTAL
              <Input
                name="price"
                value={total}
                placeholder="Valor total"
                disabled
              />
            </label>
          </InputContainer>
        </Form>
      </Content>
    </DefaultLayout>
  );
}

FormEnrollment.propTypes = {
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
  location: PropTypes.shape({
    state: PropTypes.shape({
      enrollment: PropTypes.shape({
        id: PropTypes.number,
      }),
    }),
  }).isRequired,
};
