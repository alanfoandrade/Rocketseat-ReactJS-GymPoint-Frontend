import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  background: #fff;
  min-width: ${props => (props.largeList ? '1300px' : '1000px')};
  padding: 0 30px;
  border-bottom: solid 1px #dddddd;
`;
export const HeaderContent = styled.div`
  height: 64px;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;
    min-width: 700px;

    img {
      margin-right: 30px;
      padding-right: 30px;
      border-right: 1px solid #ddd;
    }
  }
`;

export const NavMenu = styled(NavLink)`
  font-size: 15px;
  font-weight: bold;
  margin-right: 20px;
  color: #999999;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;

  strong {
    color: #666;
  }

  button {
    border: 0;
    background: none;
    font-size: 14px;
    margin-top: 2px;
    color: #de3b3b;
  }
`;
