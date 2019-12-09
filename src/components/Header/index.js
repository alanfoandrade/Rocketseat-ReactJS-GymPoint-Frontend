import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { confirmAlert } from 'react-confirm-alert';
import PropTypes from 'prop-types';
import { Container, HeaderContent, Profile, NavMenu } from './styles';
import { signOut } from '../../store/modules/auth/actions';

import logo from '../../assets/images/logo-small.svg';

const ActiveStyle = {
  color: '#444444',
};

export default function Header(props) {
  const { largeList } = props;
  const dispatch = useDispatch();
  const profile = useSelector(state => state.provider.profile);

  const handleSignOut = () => {
    confirmAlert({
      title: 'Confirmação de saída',
      message: 'Deseja realmente sair?',
      buttons: [
        {
          label: 'Yes',
          onClick: () => dispatch(signOut()),
        },
        {
          label: 'No',
          onClick: () => {},
        },
      ],
    });
  };

  return (
    <Container largeList={largeList}>
      <HeaderContent>
        <nav>
          <img src={logo} alt="GymPoint" />

          <NavMenu activeStyle={ActiveStyle} to="/dashboard/aluno">
            ALUNOS
          </NavMenu>
          <NavMenu activeStyle={ActiveStyle} to="/dashboard/plano">
            PLANOS
          </NavMenu>
          <NavMenu activeStyle={ActiveStyle} to="/dashboard/matricula">
            MATRÍCULAS
          </NavMenu>
          <NavMenu activeStyle={ActiveStyle} to="/dashboard/ajuda">
            PEDIDOS DE AUXÍLIO
          </NavMenu>
        </nav>

        <aside>
          <Profile>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleSignOut}>
              sair do sistema
            </button>
          </Profile>
        </aside>
      </HeaderContent>
    </Container>
  );
}

Header.propTypes = {
  largeList: PropTypes.bool,
};

Header.defaultProps = {
  largeList: false,
};
