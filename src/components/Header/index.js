import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Content, Profile } from './styles';

import logo from '../../assets/images/logo-small.svg';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="GymPoint" />

          <Link selected to="/dashboard/aluno">
            ALUNOS
          </Link>
          <Link to="/dashboard/plano">PLANOS</Link>
          <Link to="/dashboard/matricula">MATRÍCULAS</Link>
          <Link to="/dashboard/ajuda">PEDIDOS DE AUXÍLIO</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Alan Andrade</strong>
              <Link to="/">sair do sistema</Link>
            </div>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
