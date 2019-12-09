/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState, useCallback } from 'react';
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
import { StyledNav } from '../_layouts/default/styles';

export default function Enrollment() {
  const dispatch = useDispatch();
  const [handlePage, sethandlePage] = useState(1);

  const enroll = useSelector(state => ({
    ...state.enrollment,
    enrollments: state.enrollment.enrollments.map(e => ({
      ...e,
      formattedStart: format(parseISO(e.start_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
      formattedEnd: format(parseISO(e.end_date), "dd 'de' MMMM 'de' yyyy", {
        locale: pt,
      }),
    })),
  }));

  const pageChange = useCallback(
    action => {
      sethandlePage(action === 'back' ? handlePage - 1 : handlePage + 1);
    },
    [handlePage]
  );

  const handleDelete = ({ id, student }) => {
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
  };

  useEffect(() => {
    dispatch(loadEnrollmentRequest(handlePage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePage]);

  function handleUpdate(enrollment) {
    dispatch(setEnrollUpdating(enrollment));
    history.push('/dashboard/matricula/editar');
  }

  return (
    <DefaultLayout
      screenTitle="Gerenciando Matrículas"
      navSession="matricula"
      navVisible
      btnAdd
      largeList
    >
      <Content>
        <StyledNav>
          <button
            type="button"
            onClick={() => pageChange('back')}
            disabled={handlePage < 2}
          >
            {'<<'}
          </button>
          <span>página {handlePage}</span>
          <button
            type="button"
            onClick={() => pageChange('next')}
            disabled={enroll.enrollments.length < 20}
          >
            {'>>'}
          </button>
        </StyledNav>
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
            {enroll.enrollments.map(enrollment => (
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
