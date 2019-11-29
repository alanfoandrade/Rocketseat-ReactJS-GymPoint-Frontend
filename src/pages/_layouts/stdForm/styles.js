import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  overflow: auto;
  background: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled.div`
  width: 900px;
  height: 307px;
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
