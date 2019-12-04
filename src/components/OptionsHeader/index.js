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

        <aside>
          <BackButton visible={btnBack} onClick={() => history.goBack()}>
            <MdKeyboardArrowLeft color="#fff" size={27} /> VOLTAR
          </BackButton>

          <SaveButton form="handler" type="submit" visible={btnSave}>
            <MdCheck color="#fff" size={22} /> SALVAR
          </SaveButton>

          <AddButton
            visible={btnAdd}
            onClick={() => history.push(`/dashboard/${navSession}/cadastrar`)}
          >
            <MdAdd color="#fff" size={22} /> CADASTRAR
          </AddButton>

          <SearchBox visible={searchBox} onSubmit={() => {}}>
            <button type="submit">
              <MdSearch color="#999" size={20} />
            </button>
            <Input name="search" type="search" placeholder="Buscar por nome" />
          </SearchBox>
        </aside>
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
