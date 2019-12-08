import styled from 'styled-components';

import colors from '../../../styles/colors';

export const Wrapper = styled.div`
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${props => (props.largeList ? '1250px' : '950px')};
`;

export const Content = styled.div`
  padding: 30px;
`;

export const Container = styled.div`
  max-width: ${props => (props.largeList ? '1200px' : '900px')};
  border-radius: 4px;
  background-color: #ffffff;
  padding: 30px;

  h2 {
    font-size: 14px;
    font-weight: bold;
    color: #444444;
  }

  input {
    height: 45px;
    border-radius: 4px;
    border: solid 1px #dddddd;
  }
`;

export const StyledNav = styled.aside`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    color: ${colors.watermelon};
    opacity: 0.7;
    border: 0;
    background: none;
    font-weight: bold;
    font-size: 14px;
  }

  span {
    color: ${colors.watermelon};
    opacity: 0.7;
    margin: 0 5px;
    font-weight: bold;
    font-size: 14px;
  }
`;
