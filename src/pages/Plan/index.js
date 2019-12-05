/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  loadPlanRequest,
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
                    <Link
                      id="edit"
                      to={{
                        pathname: 'plano/editar',
                        state: {
                          plan,
                        },
                      }}
                    >
                      editar
                    </Link>
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
