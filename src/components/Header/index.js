import React from 'react';
import { Link } from 'react-router-dom';
import { Container, HeaderContent, Profile, NavMenu } from './styles';

import logo from '../../assets/images/logo-small.svg';

const ActiveStyle = {
  color: '#444444',
};

export default function Header() {
  return (
    <Container>
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
            <div>
              <strong>Alan Andrade</strong>
              <Link to="/">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </HeaderContent>
    </Container>
  );
}
