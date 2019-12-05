/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { loadHelpOrderRequest } from '../../store/modules/helporder/actions';

import DefaultLayout from '../_layouts/default';
import { Content, HelpOrderTable } from './styles';

export default function HelpOrder() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadHelpOrderRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { helporders } = useSelector(state => state.helporder);

  return (
    <DefaultLayout screenTitle="Pedidos de auxílio" navSession="ajuda">
      <Content>
        <HelpOrderTable>
          <thead>
            <tr>
              <th id="student-title">ALUNO</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {helporders.map(helporder => (
              <tr>
                <td>{helporder.student.name}</td>
                <td>
                  <div>
                    <Link to="ajuda/responder">responder</Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </HelpOrderTable>
      </Content>
    </DefaultLayout>
  );
}
