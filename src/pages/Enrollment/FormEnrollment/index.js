/* eslint-disable jsx-a11y/label-has-associated-control */
import { parseISO } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Select, Scope } from '@rocketseat/unform';
import ReactDatePicker from 'react-datepicker';
import pt from 'date-fns/locale/pt';
// import Select from 'react-select';
// import * as Yup from 'yup';

import {
  createEnrollmentRequest,
  updateEnrollmentRequest,
  loadEnrollmentRequest,
} from '../../../store/modules/enrollment/actions';
import { loadPlanRequest } from '../../../store/modules/plan/actions';
import { loadStudentRequest } from '../../../store/modules/student/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer } from './styles';

/* const schema = Yup.object().shape({
  name: Yup.string().required('Nome é requerido'),
  title: Yup.string().required('Plano requerido'),
  formattedStart: Yup.string().required('Data de início requerida'),
}); */

export default function FormEnrollment({ match }) {
  const { path } = match;
  const url = path.split('/')[3];
  const screenTitle =
    url === 'cadastrar' ? 'Cadastro de Matrícula' : 'Edição de Matrícula';

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentRequest());
    dispatch(loadPlanRequest());
    dispatch(loadEnrollmentRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const students = useSelector(s =>
    s.student.students.map(student => ({
      id: student.id,
      title: student.name,
    }))
  );
  const { plans } = useSelector(s => s.plan);

  const { enrollUpdating } = useSelector(state => state.enrollment);

  const [startDate, setStartDate] = useState(
    enrollUpdating.start_date ? parseISO(enrollUpdating.start_date) : new Date()
  );

  function handleSubmit({ student, plan }) {
    if (url === 'cadastrar') {
      dispatch(createEnrollmentRequest(student.id, plan.id, startDate));
    } else {
      dispatch(
        updateEnrollmentRequest(
          enrollUpdating.id,
          student.id,
          plan.id,
          startDate
        )
      );
    }
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form initialData={enrollUpdating} id="handler" onSubmit={handleSubmit}>
          <Scope path="student">
            <label>
              ALUNO
              <Select
                id="student_select"
                name="id"
                options={students}
                placeholder="Selecione o aluno"
              />
            </label>
          </Scope>
          <InputContainer>
            <Scope path="plan">
              <label>
                PLANO
                <Select
                  id="plan_select"
                  name="id"
                  options={plans}
                  placeholder="Selecione o plano"
                />
              </label>
            </Scope>
            <label>
              DATA DE INÍCIO
              <ReactDatePicker
                dateFormat="dd 'de' MMMM 'de' yyyy"
                selected={startDate}
                locale={pt}
                onChange={date => setStartDate(date)}
              />
            </label>
            <label>
              DATA DE TÉRMINO
              <Input
                disabled
                name="formattedEnd"
                placeholder="Data de término"
              />
            </label>
            <label id="price">
              VALOR TOTAL
              <Input
                disabled
                value="0"
                name="price"
                placeholder="Valor total"
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
