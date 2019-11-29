import React from 'react';

import DefaultLayout from '../_layouts/default';

export default function List() {
  return (
    <DefaultLayout
      screenTitle="Gerenciando Planos"
      navSession="plano"
      btnAdd
      searchBox
    >
      <h1>Lista Planos</h1>
    </DefaultLayout>
  );
}
