/* eslint-disable jsx-a11y/control-has-associated-label */

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadPlanRequest } from '../../store/modules/plan/actions';

import DefaultLayout from '../_layouts/default';
import { Content, PlanTable } from './styles';

export default function Plan() {
  const dispatch = useDispatch();
  const { plans } = useSelector(state => state.plan);

  useEffect(() => {
    dispatch(loadPlanRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
              <th id="name-title">TÍTULO</th>
              <th id="length-title">DURAÇÃO</th>
              <th id="price-title">PREÇO MENSAL</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {plans &&
              plans.map(plan => (
                <tr>
                  <td>{plan.title}</td>
                  <td id="length-plan">{plan.length}</td>
                  <td id="price-plan">{plan.price}</td>
                  <td>
                    <div>
                      <Link to="plano/editar">editar</Link>
                      <Link to="/">apagar</Link>
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
