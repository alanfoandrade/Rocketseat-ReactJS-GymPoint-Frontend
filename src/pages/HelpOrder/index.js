/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import {
  loadHelpOrderRequest,
  updateHelpOrderRequest,
} from '../../store/modules/helporder/actions';

import DefaultLayout from '../_layouts/default';
import { HelpOrderTable, AnswerModal } from './styles';

export default function HelpOrder() {
  const dispatch = useDispatch();

  const [HelpAnswer, setHelpAnswer] = useState({
    question: null,
    visible: false,
  });

  useEffect(() => {
    dispatch(loadHelpOrderRequest());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { helporders } = useSelector(state => state.helporder);

  function handleModal(data) {
    setHelpAnswer({
      ...data,
      visible: !HelpAnswer.visible,
    });
  }

  function handleSubmit({ answer }) {
    dispatch(updateHelpOrderRequest(HelpAnswer.id, answer));

    handleModal();
  }

  return (
    <DefaultLayout screenTitle="Pedidos de auxílio" navSession="ajuda">
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
              <h2>PERGUNTA DO ALUNO</h2>
              <p>{HelpAnswer.question}</p>

              <h2>SUA RESPOSTA</h2>
              <Form id="answer-form" onSubmit={handleSubmit}>
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
