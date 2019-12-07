/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState, useMemo } from 'react';
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
import { loadStudentRequest } from '../../../store/modules/student/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer, selectStyle } from './styles';

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

  useEffect(() => {
    dispatch(loadStudentRequest());
    dispatch(loadPlanRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const students = useSelector(state =>
    state.student.students.map(student => ({
      id: student.id,
      title: student.name,
    }))
  );

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

  function handlePlanChange(plan) {
    setHandlePlan(plan);
  }

  function handleDateChange(date) {
    setHandleDate(date);
  }

  function handleSubmit({ student_id, plan_id, start_date }) {
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
  }

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
            <ReactSelect
              name="student_id"
              options={students}
              styles={selectStyle}
              placeholder="Selecione o aluno"
              getOptionLabel={option => option.title}
              getOptionValue={option => option.id}
              defaultValue={
                enrollUpdating.student && {
                  id: enrollUpdating.student.id,
                  title: enrollUpdating.student.name,
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
                onChange={option => handlePlanChange(option)}
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
              <DatePicker
                name="start_date"
                locale={pt}
                selected={handleDate}
                dateFormat="dd 'de' MMMM 'de' yyyy"
                onChange={date => handleDateChange(date)}
              />
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
