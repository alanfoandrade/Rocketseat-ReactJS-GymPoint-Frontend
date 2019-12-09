/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import history from '../../services/history';
import {
  loadStudentRequest,
  setStudentUpdating,
  deleteStudentRequest,
} from '../../store/modules/student/actions';

import DefaultLayout from '../_layouts/default';
import { StyledNav } from '../_layouts/default/styles';
import { StudentTable } from './styles';

export default function Student() {
  const dispatch = useDispatch();
  const { students, page } = useSelector(state => state.student);
  const [handlePage, sethandlePage] = useState(page);

  const pageChange = useCallback(
    action => {
      sethandlePage(action === 'back' ? handlePage - 1 : handlePage + 1);
    },
    [handlePage]
  );

  const handleUpdate = student => {
    dispatch(setStudentUpdating(student));
    history.push('/dashboard/aluno/editar');
  };

  const handleDelete = ({ id, name }) => {
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: `Deseja realmente excluir o cadastro do aluno ${name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deleteStudentRequest(id)),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  useEffect(() => {
    dispatch(loadStudentRequest(handlePage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePage]);

  useEffect(() => {
    sethandlePage(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <DefaultLayout
      screenTitle="Gerenciando Alunos"
      navSession="aluno"
      btnAdd
      searchBox
      largeList
    >
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
          disabled={students.length < 20}
        >
          {'>>'}
        </button>
      </StyledNav>
      <StudentTable>
        <thead>
          <tr>
            <th id="name-title">NOME</th>
            <th id="email-title">E-MAIL</th>
            <th id="age-title">IDADE</th>
            <th id="options" />
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td id="age-student">{student.age}</td>
              <td>
                <div>
                  <button type="button" onClick={() => handleUpdate(student)}>
                    editar
                  </button>
                  <button type="button" onClick={() => handleDelete(student)}>
                    apagar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </StudentTable>
    </DefaultLayout>
  );
}
