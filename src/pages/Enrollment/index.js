/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdCheckCircle } from 'react-icons/md';
import { loadEnrollmentRequest } from '../../store/modules/enrollment/actions';

import DefaultLayout from '../_layouts/default';
import { Content, EnrollmentTable } from './styles';

export default function Enrollment() {
  const dispatch = useDispatch();

  const enrolls = useSelector(
    state =>
      state.enrollment.enrollments &&
      state.enrollment.enrollments.map(enroll => ({
        ...enroll,
        formattedStart: format(
          parseISO(enroll.start_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
        formattedEnd: format(
          parseISO(enroll.end_date),
          "dd 'de' MMMM 'de' yyyy",
          { locale: pt }
        ),
      }))
  );

  useEffect(() => {
    dispatch(loadEnrollmentRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayout
      screenTitle="Gerenciando Matrículas"
      navSession="matricula"
      btnAdd
      searchBox
      largeList
    >
      <Content>
        <EnrollmentTable>
          <thead>
            <tr>
              <th id="student-title">ALUNO</th>
              <th>PLANO</th>
              <th>INÍCIO</th>
              <th>TÉRMINO</th>
              <th>ATIVA</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {enrolls &&
              enrolls.map(enrollment => (
                <tr>
                  <td id="name-student">{enrollment.student.name}</td>
                  <td>{enrollment.plan.title}</td>
                  <td>{enrollment.formattedStart}</td>
                  <td>{enrollment.formattedEnd}</td>
                  <td>
                    <MdCheckCircle
                      color={enrollment.active ? '#42cb59' : '#ddd'}
                      size={20}
                    />
                  </td>
                  <td>
                    <div>
                      <Link to="matricula/editar">editar</Link>
                      <Link to="/">apagar</Link>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </EnrollmentTable>
      </Content>
    </DefaultLayout>
  );
}
