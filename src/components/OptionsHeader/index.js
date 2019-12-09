import React from 'react';

import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Input } from '@rocketseat/unform';
import { MdAdd, MdKeyboardArrowLeft, MdCheck, MdSearch } from 'react-icons/md';
import {
  loadStudentRequest,
  resetStudentUpdating,
} from '../../store/modules/student/actions';
import {
  loadPlanRequest,
  resetPlanUpdating,
} from '../../store/modules/plan/actions';
import { resetEnrollmentUpdating } from '../../store/modules/enrollment/actions';
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

  const dispatch = useDispatch();

  const handlegoBack = () => {
    history.goBack();
  };

  const handleAdd = () => {
    dispatch(resetPlanUpdating());
    dispatch(resetStudentUpdating());
    dispatch(resetEnrollmentUpdating());

    history.push(`/dashboard/${navSession}/cadastrar`);
  };

  const handleSearch = name => {
    if (navSession === 'aluno') dispatch(loadStudentRequest(1, name));
    if (navSession === 'plano') dispatch(loadPlanRequest(1, name));
  };

  return (
    <Container largeList={largeList}>
      <Content>
        <h1>{screenTitle}</h1>

        <aside>
          <BackButton visible={btnBack ? 1 : 0} onClick={handlegoBack}>
            <MdKeyboardArrowLeft color="#fff" size={27} /> VOLTAR
          </BackButton>

          <SaveButton visible={btnSave ? 1 : 0} form="handler" type="submit">
            <MdCheck color="#fff" size={22} /> SALVAR
          </SaveButton>

          <AddButton visible={btnAdd ? 1 : 0} onClick={handleAdd}>
            <MdAdd color="#fff" size={22} /> CADASTRAR
          </AddButton>

          <SearchBox visible={searchBox ? 1 : 0} onSubmit={() => {}}>
            <div>
              <MdSearch color="#999" size={20} />
            </div>
            <Input
              name="search"
              type="search"
              placeholder="Buscar por nome"
              onChange={e => handleSearch(e.target.value)}
            />
          </SearchBox>
        </aside>
      </Content>
    </Container>
  );
}

OptionsHeader.propTypes = {
  screenTitle: PropTypes.string.isRequired,
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
