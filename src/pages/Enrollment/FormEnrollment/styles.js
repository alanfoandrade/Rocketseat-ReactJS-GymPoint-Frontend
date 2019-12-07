import styled from 'styled-components';

export const Content = styled.div`
  label {
    font-size: 14px;
    color: #444;
    font-weight: bold;
  }

  select {
    width: 100%;
    height: 45px;
    color: #666;
    font-size: 16px;
    line-height: 1.25;
    padding: 0 15px;
    margin: 8px 0 20px;
    border-radius: 4px;
    border: solid 1px #dddddd;
  }

  div:last-child select {
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
    width: 25%;

    input {
      width: 100%;
      height: 45px;
      color: #666;
      font-size: 16px;
      line-height: 1.25;
      padding: 0 15px;
      margin-top: 8px;
      border-radius: 4px;
      border: solid 1px #dddddd;

      &::placeholder {
        color: #999999;
      }
    }
  }

  #price {
    width: 180px;
  }
`;
