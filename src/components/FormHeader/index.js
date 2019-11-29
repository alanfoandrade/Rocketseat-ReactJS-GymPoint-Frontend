import React from 'react';
import { Content, BackButton, SaveButton } from './styles';

export default function FormHeader() {
  return (
    <Content>
      <h1>FORM_NAME</h1>
      <div>
        <BackButton>VOLTAR</BackButton>
        <SaveButton>SALVAR</SaveButton>
      </div>
    </Content>
  );
}
