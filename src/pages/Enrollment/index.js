/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdCheckCircle } from 'react-icons/md';
import history from '../../services/history';
import {
  loadEnrollmentRequest,
  setEnrollUpdating,
  deleteEnrollmentRequest,
} from '../../store/modules/enrollment/actions';

import DefaultLayout from '../_layouts/default';
import { Content, EnrollmentTable } from './styles';

export default function Enrollment() {
  const enrolls = useSelector(state =>
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

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadEnrollmentRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleDelete({ id, student }) {
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: `Deseja realmente excluir a matrícula do aluno ${student.name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteEnrollmentRequest(id)),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  }

  function handleUpdate(enrollment) {
    dispatch(setEnrollUpdating(enrollment));
    history.push('/dashboard/matricula/editar');
  }

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
            {enrolls.map(enrollment => (
              <tr key={enrollment.id}>
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
                    <button
                      type="button"
                      onClick={() => handleUpdate(enrollment)}
                    >
                      editar
                    </button>
                    <button
                      type="button"
                      onClick={() => handleDelete(enrollment)}
                    >
                      apagar
                    </button>
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
