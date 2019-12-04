import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content, Container } from './styles';

import Header from '../../../components/Header';
import OptionsHeader from '../../../components/OptionsHeader';

export default function DefaultLayout(props) {
  const {
    screenTitle,
    navSession,
    btnBack,
    btnSave,
    btnAdd,
    searchBox,
    largeList,
    children,
  } = props;

  return (
    <>
      <Header largeList={largeList} />
      <Wrapper largeList={largeList}>
        <Content>
          <OptionsHeader
            btnBack={btnBack}
            btnSave={btnSave}
            btnAdd={btnAdd}
            searchBox={searchBox}
            largeList={largeList}
            navSession={navSession}
            screenTitle={screenTitle}
          />
          <Container>{children}</Container>
        </Content>
      </Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  screenTitle: PropTypes.string.isRequired,
  navSession: PropTypes.string,
  btnBack: PropTypes.bool,
  btnSave: PropTypes.bool,
  btnAdd: PropTypes.bool,
  searchBox: PropTypes.bool,
  largeList: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

DefaultLayout.defaultProps = {
  navSession: null,
  btnBack: false,
  btnSave: false,
  btnAdd: false,
  searchBox: false,
  largeList: false,
};
