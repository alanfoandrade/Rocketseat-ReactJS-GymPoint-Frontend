/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  loadStudentRequest,
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

  function handleDelete(id) {
    dispatch(deleteStudentRequest(id));
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
              <tr>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td id="age-student">{student.age}</td>
                <td>
                  <div>
                    <Link
                      id="edit"
                      to={{
                        pathname: 'aluno/editar',
                        state: {
                          student,
                        },
                      }}
                    >
                      editar
                    </Link>
                    <button
                      type="button"
                      onClick={() => handleDelete(student.id)}
                    >
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
