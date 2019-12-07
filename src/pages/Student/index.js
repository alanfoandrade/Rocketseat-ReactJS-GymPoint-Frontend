/* eslint-disable jsx-a11y/control-has-associated-label */

import { confirmAlert } from 'react-confirm-alert';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import history from '../../services/history';
import {
  loadStudentRequest,
  setStudentUpdating,
  deleteStudentRequest,
} from '../../store/modules/student/actions';

import DefaultLayout from '../_layouts/default';
import { Content, StudentTable } from './styles';

export default function Student() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadStudentRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { students } = useSelector(state => state.student);

  function handleUpdate(student) {
    dispatch(setStudentUpdating(student));
    history.push('/dashboard/aluno/editar');
  }

  function handleDelete({ id, name }) {
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
  }

  return (
    <DefaultLayout
      screenTitle="Gerenciando Alunos"
      navSession="aluno"
      btnAdd
      searchBox
      largeList
    >
      <Content>
        <StudentTable>
          <thead>
            <tr>
              <th id="name-title">NOME</th>
              <th id="email-title">E-MAIL</th>
              <th id="age-title">IDADE</th>
              <th />
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
      </Content>
    </DefaultLayout>
  );
}
