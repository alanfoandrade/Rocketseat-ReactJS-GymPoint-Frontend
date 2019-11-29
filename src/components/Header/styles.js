import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border-bottom: solid 1px #dddddd;
`;
export const HeaderContent = styled.div`
  height: 64px;
  max-width: 1290px;
  min-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

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

  div {
    text-align: right;
    margin-right: 10;

    strong {
      display: block;
      color: #666;
    }

    a {
      display: block;
      font-size: 14px;
      margin-top: 2px;
      color: ${colors.red};
    }
  }
`;
