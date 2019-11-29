import React from 'react';

import DefaultLayout from '../_layouts/default';

export default function List() {
  return (
    <DefaultLayout
      screenTitle="Gerenciando Matrículas"
      navSession="matricula"
      btnAdd
      searchBox
      largeList
    >
      <h1>Lista Matrículas</h1>
    </DefaultLayout>
  );
}
