/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import {
  loadHelpOrderRequest,
  updateHelpOrderRequest,
} from '../../store/modules/helporder/actions';

import DefaultLayout from '../_layouts/default';
import { HelpOrderTable, AnswerModal } from './styles';
import { StyledNav } from '../_layouts/default/styles';

const schema = Yup.object().shape({
  answer: Yup.string().required('Resposta requerida'),
});

export default function HelpOrder() {
  const dispatch = useDispatch();
  const { helporders } = useSelector(state => state.helporder);
  const [handlePage, sethandlePage] = useState(1);

  const [HelpAnswer, setHelpAnswer] = useState({
    question: null,
    visible: false,
  });

  const handleModal = useCallback(
    data => {
      setHelpAnswer({
        ...data,
        visible: !HelpAnswer.visible,
      });
    },
    [HelpAnswer.visible]
  );

  const pageChange = useCallback(
    action => {
      sethandlePage(action === 'back' ? handlePage - 1 : handlePage + 1);
    },
    [handlePage]
  );

  useEffect(() => {
    dispatch(loadHelpOrderRequest(handlePage));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handlePage]);

  const handleSubmit = useCallback(
    ({ answer }) => {
      dispatch(updateHelpOrderRequest(HelpAnswer.id, answer));

      handleModal();
    },
    [HelpAnswer.id, dispatch, handleModal]
  );

  return (
    <DefaultLayout
      screenTitle="Pedidos de auxílio"
      navSession="ajuda"
      navVisible
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
          disabled={helporders.length < 20}
        >
          {'>>'}
        </button>
      </StyledNav>
      <HelpOrderTable>
        <thead>
          <tr>
            <th id="student-title">ALUNO</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {helporders.map(helporder => (
            <tr key={helporder.id}>
              <td>{helporder.student.name}</td>
              <td>
                <div>
                  <button type="button" onClick={() => handleModal(helporder)}>
                    responder
                  </button>
                </div>
              </td>
            </tr>
          ))}
          <AnswerModal
            open={HelpAnswer.visible}
            onClose={() => handleModal(HelpAnswer)}
          >
            <div className="answer-modal">
              <label>PERGUNTA DO ALUNO</label>
              <p>{HelpAnswer.question}</p>

              <label>SUA RESPOSTA</label>
              <Form schema={schema} id="answer-form" onSubmit={handleSubmit}>
                <Input
                  multiline
                  form="answer-form"
                  name="answer"
                  id="answer"
                  placeholder="Escreva sua resposta aqui"
                />
                <button form="answer-form" type="submit">
                  Responder aluno
                </button>
              </Form>
            </div>
          </AnswerModal>
        </tbody>
      </HelpOrderTable>
    </DefaultLayout>
  );
}
