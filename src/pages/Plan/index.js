/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import history from '../../services/history';
import {
  loadPlanRequest,
  setPlanUpdating,
  deletePlanRequest,
} from '../../store/modules/plan/actions';

import DefaultLayout from '../_layouts/default';
import { Content, PlanTable } from './styles';

export default function Plan() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlanRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { plans } = useSelector(state => state.plan);

  function handleUpdate(plan) {
    dispatch(setPlanUpdating(plan));
    history.push('/dashboard/plano/editar');
  }

  function handleDelete(id) {
    dispatch(deletePlanRequest(id));
  }

  return (
    <DefaultLayout
      screenTitle="Gerenciando Planos"
      navSession="plano"
      btnAdd
      searchBox
    >
      <Content>
        <PlanTable>
          <thead>
            <tr>
              <th id="plan-title">TÍTULO</th>
              <th id="length-title">DURAÇÃO</th>
              <th id="price-title">PREÇO MENSAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans.map(plan => (
              <tr>
                <td id="plan-name">{plan.title}</td>
                <td>{plan.length}</td>
                <td>{plan.price}</td>
                <td>
                  <div>
                    <button type="button" onClick={() => handleUpdate(plan)}>
                      editar
                    </button>
                    <button type="button" onClick={() => handleDelete(plan.id)}>
                      apagar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </PlanTable>
      </Content>
    </DefaultLayout>
  );
}
