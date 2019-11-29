import styled from 'styled-components';

import colors from '../../styles/colors';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
  border: solid 1px #dddddd;
`;
export const Content = styled.div`
  height: 64px;

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

    a {
      font-size: 15px;
      font-weight: bold;
      color: ${props => (props.selected ? '#2b2b2b' : '#999')};
      margin-right: 20px;
    }
  }

  aside {
  }
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
