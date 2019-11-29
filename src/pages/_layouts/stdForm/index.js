import React from 'react';
import PropTypes from 'prop-types';

import FormHeader from '../../../components/FormHeader';
import { Wrapper, Container } from './styles';

export default function FormLayout({ children }) {
  return (
    <Wrapper>
      <FormHeader />
      <Container>{children}</Container>
    </Wrapper>
  );
}

FormLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
