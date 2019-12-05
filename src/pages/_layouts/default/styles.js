import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: ${props => (props.largeList ? '1200px' : '900px')};
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
