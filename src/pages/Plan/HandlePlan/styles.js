import styled from 'styled-components';

export const Content = styled.div`
  h2 {
    font-size: 14px;
    color: #444;
  }

  input {
    width: 100%;
    color: #666;
    font-size: 16px;
    line-height: 1.25;
    padding: 0 15px;
    margin: 8px 0 20px;

    &::placeholder {
      color: #999999;
    }
  }

  div:last-child input {
    margin-bottom: 0;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;

  label {
    color: #444;
    font-size: 14px;
    font-weight: bold;
    width: 32%;
  }
`;
