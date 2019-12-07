/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Select from 'react-select';
import ReactDatePicker from 'react-datepicker';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

// import * as Yup from 'yup';

import {
  createEnrollmentRequest,
  updateEnrollmentRequest,
} from '../../../store/modules/enrollment/actions';
import { loadPlanRequest } from '../../../store/modules/plan/actions';
import { loadStudentRequest } from '../../../store/modules/student/actions';

import DefaultLayout from '../../_layouts/default';
import { Content, InputContainer, selectStyle } from './styles';

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

  const [handleStudent, setHandleStudent] = useState(
    enrollUpdating.student || {}
  );

  console.tron.log(handleStudent);

  const [handlePlan, setHandlePlan] = useState(enrollUpdating.plan || {});

  const [handleDate, sethandleDate] = useState(
    enrollUpdating.start_date ? parseISO(enrollUpdating.start_date) : new Date()
  );

  function handleStudentChange(student) {
    setHandleStudent(student);
  }

  function handlePlanChange(plan) {
    setHandlePlan(plan);
  }

  function handleDateChange(date) {
    sethandleDate(date);
  }

  function handleSubmit() {
    if (url === 'cadastrar') {
      dispatch(
        createEnrollmentRequest(handleStudent.id, handlePlan.id, handleDate)
      );
    } else {
      dispatch(
        updateEnrollmentRequest(
          enrollUpdating.id,
          handleStudent.id,
          handlePlan.id,
          handleDate
        )
      );
    }
  }

  return (
    <DefaultLayout screenTitle={screenTitle} btnBack btnSave>
      <Content>
        <Form initialData={enrollUpdating} id="handler" onSubmit={handleSubmit}>
          <label>
            ALUNO
            <Select
              id="student_select"
              name="id"
              options={students}
              getOptionLabel={option => option.title}
              getOptionValue={option => option.id}
              styles={selectStyle}
              placeholder="Selecione o aluno"
              onChange={option => handleStudentChange(option)}
              defaultValue={{
                id: handleStudent.id,
                title: handleStudent.name,
              }}
            />
          </label>
          <InputContainer>
            <label>
              PLANO
              <Select
                id="plan_select"
                name="id"
                options={plans}
                getOptionLabel={option => option.title}
                getOptionValue={option => option.id}
                styles={selectStyle}
                placeholder="Selecione o plano"
                onChange={option => handlePlanChange(option)}
                defaultValue={{
                  id: handlePlan.id,
                  title: handlePlan.title,
                }}
              />
            </label>
            <label>
              DATA DE INÍCIO
              <ReactDatePicker
                dateFormat="dd 'de' MMMM 'de' yyyy"
                selected={handleDate}
                locale={pt}
                onChange={date => handleDateChange(date)}
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
