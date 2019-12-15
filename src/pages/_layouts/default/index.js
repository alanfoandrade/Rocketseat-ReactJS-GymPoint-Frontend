import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import OptionsHeader from '../../../components/OptionsHeader';

import { Wrapper, Content, Container } from './styles';

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
            screenTitle={screenTitle}
            btnBack={btnBack}
            btnSave={btnSave}
            btnAdd={btnAdd}
            searchBox={searchBox}
            largeList={largeList}
            navSession={navSession}
          />
          <Container largeList={largeList}>{children}</Container>
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.object),
    PropTypes.object,
  ]).isRequired,
};

/*  */

DefaultLayout.defaultProps = {
  navSession: null,
  btnBack: false,
  btnSave: false,
  btnAdd: false,
  searchBox: false,
  largeList: false,
};
