/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import history from '../../services/history';
import {
  loadPlanRequest,
  setPlanUpdating,
  deletePlanRequest,
} from '../../store/modules/plan/actions';

import DefaultLayout from '../_layouts/default';
import { StyledNav } from '../_layouts/default/styles';
import { PlanTable } from './styles';

export default function Plan() {
  const dispatch = useDispatch();

  const { plans, page } = useSelector(state => state.plan);

  const [handlePage, sethandlePage] = useState(page);

  useEffect(() => {
    dispatch(loadPlanRequest(handlePage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePage]);

  useEffect(() => {
    sethandlePage(page);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function pageChange(action) {
    sethandlePage(action === 'back' ? handlePage - 1 : handlePage + 1);
  }

  function handleUpdate(plan) {
    dispatch(setPlanUpdating(plan));
    history.push('/dashboard/plano/editar');
  }

  function handleDelete({ id, name }) {
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: `Deseja realmente excluir o plano ${name}?`,
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(deletePlanRequest(id)),
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
      screenTitle="Gerenciando Planos"
      navSession="plano"
      navVisible
      btnAdd
      searchBox
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
          disabled={plans.length < 20}
        >
          {'>>'}
        </button>
      </StyledNav>
      <PlanTable>
        <thead>
          <tr>
            <th id="plan-title">TÍTULO</th>
            <th id="length-title">DURAÇÃO</th>
            <th id="price-title">PREÇO MENSAL</th>
            <th id="options" />
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td id="plan-name">{plan.title}</td>
              <td>{plan.length}</td>
              <td>{plan.price}</td>
              <td>
                <div>
                  <button type="button" onClick={() => handleUpdate(plan)}>
                    editar
                  </button>
                  <button type="button" onClick={() => handleDelete(plan)}>
                    apagar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </PlanTable>
    </DefaultLayout>
  );
}
