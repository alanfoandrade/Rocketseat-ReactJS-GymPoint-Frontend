import React from 'react';

import DefaultLayout from '../_layouts/default';

import api from '../../services/api';

export default function List() {
  api.get('students');

  return (
    <DefaultLayout
      screenTitle="Gerenciando Alunos"
      navSession="aluno"
      btnAdd
      searchBox
      largeList
    >
      <h1>Lista Alunos</h1>
    </DefaultLayout>
  );
}
