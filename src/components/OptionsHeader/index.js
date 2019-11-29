import React from 'react';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { MdAdd, MdKeyboardArrowLeft, MdCheck, MdSearch } from 'react-icons/md';
import history from '../../services/history';
import {
  Container,
  Content,
  BackButton,
  SaveButton,
  AddButton,
  SearchBox,
  SearchButton,
} from './styles';

export default function OptionsHeader(props) {
  const {
    screenTitle,
    navSession,
    btnBack,
    btnSave,
    btnAdd,
    searchBox,
    largeList,
  } = props;

  return (
    <Container largeList={largeList}>
      <Content>
        <h1>{screenTitle}</h1>
        <div>
          <BackButton onClick={() => history.goBack()} visible={btnBack}>
            <MdKeyboardArrowLeft color="#fff" size={27} /> VOLTAR
          </BackButton>
          <SaveButton onClick={() => {}} visible={btnSave}>
            <MdCheck color="#fff" size={21} /> SALVAR
          </SaveButton>
          <AddButton
            onClick={() => history.push(`/dashboard/${navSession}/cadastrar`)}
            visible={btnAdd}
          >
            <MdAdd color="#fff" size={21} /> CADASTRAR
          </AddButton>
          <SearchBox visible={searchBox}>
            <SearchButton visible={searchBox} onClick={() => {}}>
              <MdSearch size={20} />
            </SearchButton>
            <Input name="search" type="search" placeholder="Buscar por nome" />
          </SearchBox>
        </div>
      </Content>
    </Container>
  );
}

OptionsHeader.propTypes = {
  screenTitle: PropTypes.bool.isRequired,
  navSession: PropTypes.string,
  btnBack: PropTypes.bool,
  btnSave: PropTypes.bool,
  btnAdd: PropTypes.bool,
  searchBox: PropTypes.bool,
  largeList: PropTypes.bool,
};

OptionsHeader.defaultProps = {
  navSession: null,
  btnBack: false,
  btnSave: false,
  btnAdd: false,
  searchBox: false,
  largeList: false,
};
